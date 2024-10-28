# tools.bundlerChain

rspack-chain은 rspack을 configuring 할 수 있도록 도와주며, 이를 사용해 rsbuild에서 bundlerChain을 구성하여 직접 configuration을 작성할 필요 없이 체이닝이 가능하다.

```js
export default {
  tools: {
    rspack: (config, { env }) => {
      if (env === 'development') {
        config.devtool = 'cheap-module-eval-source-map';
      }
      return config;
    },
  },
};
export default {
  tools: {
    bundlerChain: (chain, { env }) => {
      if (env === 'development') {
        chain.devtool('cheap-module-eval-source-map');
      }
    },
  },
};
```

해당 두 코드는 같은 동작을 한다.

## Rspress의 예시

### react-fast-refresh

rsbuild의 내장 chain이 존재하며, `CHAIN_ID`를 통해 접근 가능하다.
`PLUGIN.REACT_FAST_REFRESH`의 option에 MDX 확장자를 오버라이딩하는 코드.

```js
bundlerChain(chain, { CHAIN_ID, target }) {
  if (chain.plugins.has(CHAIN_ID.PLUGIN.REACT_FAST_REFRESH)) {
    chain.plugin(CHAIN_ID.PLUGIN.REACT_FAST_REFRESH).tap(options => {
      // options = [ { include: [ /\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/ ] } ]
      options[0] ??= {};
      options[0].include = [/\.([cm]js|[jt]sx?|flow)$/i, MDX_REGEXP];
      return options; // [ { include: [ /\.([cm]js|[jt]sx?|flow)$/i, /\.mdx?$/ ] } ]
    });
  }
}
```

### server environment output

서버 환경에서 output filename을 `main.cjs`로 변경
```js
bundlerChain(chain, { target }) {
  const isServer = target === 'node';
  if (isServer) {
    chain.output.filename('main.cjs');
  }
}
```

### MDX Compile

MDX를 컴파일할 때 `builtin:swc-loader`를 사용하고, `loader.cjs` 커스텀 로더를 사용
```js
bundlerChain(chain, { CHAIN_ID, target }) {
  chain.module
    .rule('MDX')
    .type('javascript/auto')
    .test(MDX_REGEXP)
    .resolve.merge({
      conditionNames: jsModuleRule.resolve.conditionNames.values(),
      mainFields: jsModuleRule.resolve.mainFields.values(),
    })
    .end()
    .oneOf('MDXCompile')
    .use('builtin:swc-loader')
    .loader('builtin:swc-loader')
    .options(swcLoaderOptions)
    .end()
    .use('mdx-loader')
    .loader(require.resolve('../loader.cjs'))
    .options({
      config,
      docDirectory: userDocRoot,
      checkDeadLinks,
      routeService,
      pluginDriver,
    })
    .end();
}