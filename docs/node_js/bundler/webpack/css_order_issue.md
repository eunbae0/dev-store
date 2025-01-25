# Deep dive into webpack CSS order issue

:::info
[해당 글](https://github.com/orgs/web-infra-dev/discussions/12)을 번역 및 정리한 글입니다.
:::

## 서문

많은 사람들이 Webpack에서 CSS의 순서가 예상과 다르게 동작해 스타일이 올바르게 적용되지 않는 문제를 겪고 있다고 보고합니다. 사실 Webpack에서 CSS의 순서는 splitChunks 설정과 관련이 있으며, 매우 불안정합니다. 예를 들어, JS 모듈이 `a.css`를 먼저 import한 후 `b.css`를 import하더라도, **`splitChunks`를 설정하면 최종적으로 a와 b의 순서가 import 순서와 완전히 다를 수 있습니다.**

## 간단한 예시

우선 아래 코드를 살펴보겠습니다.
  
```js
import "./a.css"; // a.css: body { background: red }
import "./b.css"; // b.css: body { background: blue }
```

위 코드는 JS 파일에서 `a.css`를 먼저 import하여 브라우저 배경색을 빨간색으로 변경한 후, `b.css`를 import하여 배경색을 파란색으로 변경합니다.

이 시점에서 우리의 경험에 따르면 최종 페이지는 **파란색**이 되어야 합니다. 왜냐하면 `b.css`가 `a.css`의 스타일을 덮어쓰기 때문입니다.

실제로 이 상태에서는 결과가 파란색입니다.

### `SplitChunks` 설정 후의 변화

이제 `splitChunks`를 구성하여 `a.css`와 `b.css`를 서로 다른 Chunk로 분리해 보겠습니다.

우리는 CSS 처리를 위해 `mini-css-extract-plugin`을 사용하고, `splitChunks`를 구성하여 두 파일을 별도의 Chunk로 분리합니다.
  
```js
module.exports = {
  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: 'all',
      cacheGroups: {
        a: {
          test: /a\.css/,
          name: "a",
        },
        b: {
          test: /b\.css/,
          name: "b",
        },
      },
    },
  }
};
```

이 구성을 사용해 다시 빌드하고 페이지를 열어보면, **기적적으로 페이지가 빨간색으로 변**하는 것을 발견하게 됩니다.

### 왜 이런 일이 발생할까요?

이 문제는 Webpack에서 `splitChunks` 설정으로 인해 CSS 파일의 로드 순서가 변경되면서 발생합니다. 초기 import 순서는 유지되지 않고, 최종적으로 만들어진 Chunk 그룹의 순서에 따라 CSS가 로드되기 때문에 예상과 다른 결과가 나타날 수 있습니다.

#### 추가 예제

이 문제를 더 명확히 보여주기 위해, Webpack의 CSS 순서 불확실성을 설명하기 위해 핵심 팀 멤버 중 한 명인 **ahabhgk**가 만든 [GitHub 리포지토리](https://github.com/ahabhgk)가 있습니다. 위 코드도 이 리포지토리에서 가져온 예제입니다.

이 리포지토리를 참고하면 splitChunks로 인해 CSS의 순서가 얼마나 불안정해질 수 있는지 다양한 사례로 확인할 수 있습니다.



### webpack css + splitChunks: red or blue?

다음으로, 해당 예시를 설명하겠습니다.

| No. | import       | css     | splitChunks chunks | splitChunks priority | color |
| --- | ------------ | ------- | ------------------ | -------------------- | ----- |
| 0   | style-loader | static  | all                | a = b                | blue  |
| 1   | style-loader | static  | all                | a > b                | blue  |
| 2   | style-loader | static  | all                | a < b                | blue  |
| 3   | style-loader | static  | async              | a = b                | blue  |
| 4   | style-loader | static  | async              | a > b                | blue  |
| 5   | style-loader | static  | async              | a < b                | blue  |
| 6   | style-loader | dynamic | all                | a = b                | blue  |
| 7   | style-loader | dynamic | all                | a > b                | blue  |
| 8   | style-loader | dynamic | all                | a < b                | blue  |
| 9   | style-loader | dynamic | async              | a = b                | blue  |
| 10  | style-loader | dynamic | async              | a > b                | blue  |
| 11  | style-loader | dynamic | async              | a < b                | blue  |
| 12  | experiments  | static  | all                | a = b                | red   |
| 13  | experiments  | static  | all                | a > b                | blue  |
| 14  | experiments  | static  | all                | a < b                | red   |
| 15  | experiments  | static  | async              | a = b                | blue  |
| 16  | experiments  | static  | async              | a > b                | blue  |
| 17  | experiments  | static  | async              | a < b                | blue  |
| 18  | experiments  | dynamic | all                | a = b                | red   |
| 19  | experiments  | dynamic | all                | a > b                | blue  |
| 20  | experiments  | dynamic | all                | a < b                | red   |
| 21  | experiments  | dynamic | async              | a = b                | red   |
| 22  | experiments  | dynamic | async              | a > b                | blue  |
| 23  | experiments  | dynamic | async              | a < b                | red   |


해당 테이블에서, 마지막 페이지에서 색상이 `blue` 혹은 `red`로 표시되는 지 쉽게 알 수 없습니다.

- `import`는 어떻게 CSS가 handle되는지를 보여줍니다. `style-loader`, `mini-css-extract-plugin`, `Webpack의 기본 기능인 experiments.css` 옵션이 있습니다.
- `CSS`는 어떻게 `style.js`파일이 entry file에 의해 import되는지를 보여줍니다.
	- static: `import './shared/style.js`
	- dynamic: `import('./shared/style.js')`
- `splitChunks.chunks`는 어떤 chunks가 분할될지를 결정합니다.
	- `all`: 어떤 chunk든 분할이 가능합니다.
	- `async`: 오직 dynamic imports로 생성된 chunks만 분할됩니다.
- `splitChunks.priority`는 `splitChunks의 cacheGrouops`의 우선순위를 결정합니다.
- `Color`는 마지막 페이지의 색상을 보여줍니다. `red`혹은`blue`입니다.

### 선행 지식: CSS Processing Methods (CSS 처리 방식)
Webpack에서는 CSS 파일을 처리하는 데 일반적으로 세 가지 방법이 사용됩니다.

- `style-loader` + `css-loader`
- `mini-css-extract-webpack-plugin` + `css-loader`
- `experiments.css`
#### css-loader

css-loader에는 PostCSS가 내장되어 있습니다. 이 로더의 목적은 CSS 문법을 파싱하고 CSS 모듈을 처리하는 것입니다.
CSS 문자열을 받아들여 JS 문자열을 반환하며, 여기에는 CSS 내용, CSS 모듈 이름에 대한 매핑 등이 포함됩니다.
#### style-loader

style-loader는 CSS를 페이지에 삽입하는 데 사용됩니다. 이 loader는 **런타임에 style tag를 생성**하고 이를 통해 CSS를 페이지에 삽입합니다.
CSS 삽입 순서는 **import 순서와 완전히 일치**하므로, style-loader를 사용하면 최종 페이지의 색상이나 스타일이 항상 안정적이고 예측 가능한 상태를 유지합니다. 예를 들어, 위 예시에서는 최종 색상이 항상 `blue`로 표시됩니다.
#### mini-css-extract-plugin

이 플러그인은 런타임에 동적으로 style 태그를 삽입하는 `style-loader`와 달리, **패키징 시 CSS 파일을 Chunk로 병합**하고 **최종적으로 산출물에 출력**합니다.
#### experiments.css

Webpack의 자체 CSS 처리 기능입니다. built-in support이며, 활성화하면 **CSS가 Webpack에서 first-citizen처럼 다뤄집니다.** 또한 personalized package splitting도 지원합니다.

### SplitChunks?
Code Splitting(코드 분할)과 **splitChunks**를 구분하는 것이 중요합니다.
Code Splitting은 Webpack의 기본 기능으로, `import('package')`문을 사용하여 특정 module을 새로운 Chunk로 이동시킵니다. **splitChunks 설정은 code splitting strategy에 영향을 주지 않습니다.**
splitChunks는 본질적으로 코드 분할로 생성된 Chunk를 **추가로 분할**하는 작업입니다.

#### Chunk Group

Webpack에는 Chunk Group이라는 개념이 있습니다.
`maxRequest`를 사용자 정의하여 브라우저가 한 번에 요청할 수 있는 Chunk 수, 즉 ChunkGroup이 포함할 수 있는 Chunk 수를 제어할 수 있습니다.

코드 분할 후 여러 Chunk가 생성되며, 각 Chunk는 하나의 ChunkGroup에 대응됩니다.
splitChunks는 Chunk를 더 작은 여러 Chunk로 분할하여 그룹을 형성하고 그룹 단위로 로드하는 기능을 제공합니다. 예를 들어, HTTP/2 환경에서는 하나의 Chunk를 최대 20개의 Chunk로 나눠 동시에 로드할 수 있습니다.

Webpack에서는 JavaScript 모듈의 로드(loading)와 실행(execution)이 두 개의 별도 단계로 구분됩니다. 동일한 모듈이 여러 Chunk에 포함될 수 있지만, 실행은 한 번만 이루어집니다. 따라서 특정 모듈을 Chunk에서 분리하여 새로운 Chunk를 생성하는 작업을 자유롭게 수행할 수 있습니다.

반면, Rollup이나 Esbuild와 같은 가벼운 런타임 빌드 도구는 코드 분할 기능을 제공하지만, 생성된 산출물은 로드 시 즉시 실행됩니다. 이로 인해 Webpack에 비해 Chunk를 분리하는 유연성이 다소 제한됩니다.


## The Principle of CSS Order instablility

### Using style-loader
`style-loader`가 CSS를 JS module로 변환할때, 동적으로 runtime에서 style tags를 삽입하기때문에 마지막 페이지의 색상은 항상 `blue`입니다. 따라서, `style-loader`를 사용하는 것은 CSS modules이 import될 때 CSS의 순서를 안정적으로 일정하게 할 수 있습니다.

### Using experiments.css and mini-css-extract-plugin
| import      | css    | splitChunks chunks | splitChunks priority | color |
| ----------- | ------ | ------------------ | -------------------- | ----- |
| experiments | static | all                | a = b                | red   |
| experiments | static | all                | a > b                | blue  |
| experiments | static | all                | a < b                | red   |

#### 첫번째 사례
- `static`은 entry module이 `style.js`모듈을 정적으로 import한다는 것을 의미합니다.
- `all`은 splitChunks.chunks가 all로 설정되어 있다는 것을 나타내며, 이는 이 패키지 분할 설정이 모든 Chunk에 영향을 미친다는 뜻입니다.
- `=`는 두 cacheGroups가 동일한 우선순위를 갖는다는 것을 의미하며, 최종 페이지에서는 빨간색(red)이 표시됩니다.
```js
{
  minSize: 0,
  chunks: 'all',
  cacheGroups: {
    a: {
      test: /a\.css/,
      name: "a",
    },
    b: {
      test: /b\.css/,
      name: "b",
    },
}
```

![style-chunk-groups.png](https://raw.githubusercontent.com/JSerFeng/self-Image-db/main/img/style-chunk-groups.png?raw=true)

`a.css`와 `b.css`는 main chunk로 부터 splitChunks로 분리되었습니다. 동일한 group에 속하므로 두 모듈은 함께 load될 것입니다.
하지만 함께 load될 때, 순서는 생길 수 밖에 없지만 어떻게동일한 group에서 순서를 결정할 수 있을지 문제가 생깁니다.
정답은 **순서가 보장되지 않는다**입니다.

splitChunk는 모든 모듈을 순회하면서 해당 모듈이 만족하는 모든 CacheGroup 규칙을 찾습니다.
예를 들어,
- `a.css`는 cacheGroups['a']에 해당
- `b.css`는 cacheGroups['b']에 해당
그런 다음, 모듈은 해당하는 CacheGroups에 따라 그룹화되며, 각 그룹은 최종적으로 Chunk를 형성합니다.
결과는 아래와 유사합니다.
```js
const ChunkInfoMap = {
    a: { modules: ['a.css'], chunks: ['main'], cacheGroup: {...} },
    b: { modules: ['b.css'], chunks: ['main'], cacheGroup: {...} },
};
```
이후 선택된 group을 기반으로 Chunk가 분리됩니다.
1. cacheGroup에서 우선순위가 설정된 경우, 가장 높은 우선순위를 가진 group부터 분리합니다.
2. Group 내 chunk 개수를 기준으로, **가장 많은 Chunk를 포함하는 group**부터 분리합니다.
3. Group 내 모듈 크기와 Chunk 수의 곱(크기 x (Chunk 수 - 1))을 기준으로 **가장 큰 크기의 그룹**부터 분리합니다.
4. 모듈이 여러 CacheGroups를 만족하면, **가장 낮은 Index의 그룹**부터 분리합니다.
5. 모듈 수를 기준으로, **가장 많은 모듈을 포함하는 그룹**부터 분리합니다.
6. **module names**으로 정렬합니다.

우선순위 code는 [여기](https://github.com/webpack/webpack/blob/3919c844eca394d73ca930e4fc5506fb86e2b094/lib/optimize/SplitChunksPlugin.js#L242)서 확인할 수 있습니다.
![compare-entries.png](https://raw.githubusercontent.com/JSerFeng/self-Image-db/main/img/compare-entries.png?raw=true)
위 예제에서는 우선순위가 설정되지 않았으며, `a.css`, `b.css`의 Chunk의 개수도 모두 1개입니다. chunks.size - 1 = 0이고, cacheGroup index도 0이며, module 개수도 동일합니다. 최종적으로 **module names**에 따라 그룹 선택이 이루어집니다.

따라서 a < b이므로, `b` group이 먼저 split되고 splitting될 때 chunk가 가장 먼저 분리되어 맨 앞으로 위치하게 됩니다.
![before-split.png](https://raw.githubusercontent.com/JSerFeng/self-Image-db/main/img/before-split.png?raw=true)
다음, `a` group이 분리되고, 아래와 splitting이 완료되면 아래와 같은 이미지로 분리됩니다.
![splitted.png](https://raw.githubusercontent.com/JSerFeng/self-Image-db/main/img/splitted.png?raw=true)

`ChunkGroup`의 chunks의 순서에 따라 final page의 chunk가 로드됩니다. 따라서 이 경우 `b.css`가 먼저 로드되고, `a.css`가 로드되므로 **빨간색 페이지**가 표시됩니다.

모든 조건이 동일한 상황에서 a와 b 모두 우선순위(priority)가 설정된 경우를 고려해봅시다.

• a의 우선순위가 b보다 높다면, a**가 먼저 분리**되고, 이후 b가 분리되어 **파란색 페이지**가 표시됩니다.
• 반대로, b의 우선순위가 더 높다면, b**가 먼저 분리**되고, 최종적으로 **빨간색 페이지**가 표시됩니다.

#### async

splitChunks.chunks가 `async`로 설정된 경우, 이는 오직 `import()`문에 의해 생성된 Chunk만 분리됩니다. 이 경우, `a.css`와 `b.css` 모두 entry chunk(main chunk)에 속하므로, splitChunks에 의해 분리되지 않습니다. 따라서 a와 b는 동일한 chunk에 포함되어 이 경우 **순서가 보장됩니다.**

| import      | css    | splitChunks chunks | splitChunks priority | color |
| ----------- | ------ | ------------------ | -------------------- | ----- |
| experiments | static | async              | a = b                | blue  |
| experiments | static | async              | a > b                | blue  |
| experiments | static | async              | a < b                | blue  |

#### dynamic import

css import를 동적(dynamic)으로 변경하면 모든 모듈이 chunk 분할을 거칩니다. 따라서 첫번째 사례와 동일하게 작동합니다.

| import      | css     | splitChunks chunks | splitChunks priority | color |
| ----------- | ------- | ------------------ | -------------------- | ----- |
| experiments | dynamic | all                | a = b                | red   |
| experiments | dynamic | all                | a > b                | blue  |
| experiments | dynamic | all                | a < b                | red   |
| experiments | dynamic | async              | a = b                | red   |
| experiments | dynamic | async              | a > b                | blue  |
| experiments | dynamic | async              | a < b                | red   |

### Summary

`SplitChunks`를 사용하여 특정 CSS를 별도의 파일로 분리하면 기존 순서가 변경될 가능성이 높으며, 순서를 자동으로 추론하기 어렵습니다. 이는 스타일 순서 적용이 잘못되는 부작용을 초래할 수 있습니다.

해결책은 CSS load와 style의 적용을 분리하는 것입니다.
`style-loader`는 JS 실행 중에 CSS 스타일을 mounting하도록 하므로 부분적으로 문제를 해결할 수 있지만, 런타임 오버헤드가 발생하고 splitChunks 및 최소화(minimize)와 같은 최적화 작업이 CSS에는 적용되지 않습니다. 이는 **서버 사이드 렌더링(SSR)**에도 적합하지 않습니다.

Webpack의 [experiments.css supporting](https://github.com/webpack/webpack/issues/14893) 이슈에서는 CSS를 import하는 다섯 가지 방법을 언급하며, 이 중 2가지가 문제를 더 잘 해결할 수 있다고 설명합니다:

1. Native CSS Module
```js
import stylesheet from "./style.css" assert { type: "css" };
document.adoptedStyleSheets.push(stylesheet);
```
이 방식은 CSS를 load만 하고, style을 적용하기 위해서는 개발자가 수동으로 push해야합니다.
2.  URL 기반 import
```js
new URL("./style.css", import.meta.url);
```
이 방식은 style URL을 단순히 확인하는 방식으로, 네트워크 요청은 개발자가 직접 처리해야합니다.

두 방법 모두 추가 작업이 필요하기 떄문에 기존 `import './style.css';` 방식보다 번거롭습니다. 또한, 기존 방식은 명세를 따르지 않는다는 점을 유의해야 합니다.