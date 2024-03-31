# Cannot read property 'makeMutable' of undefined

## 문제상황

- Cannot read property 'makeMutable' of undefined 에러가 발생

## 해결

- `babel.config.js`의 `react-native-reanimated/plugin`을 가장 아래에 지정하지 않아서 발생하는 문제

```js
module.exports = {
  presets: [
    ... // don't add it here :)
  ],
  plugins: [
    ...
    // highlight-next-line
    'react-native-reanimated/plugin',
  ],
};
```

:::caution
react-native-reanimated/plugin has to be listed last.
:::

## 참고문서

- https://github.com/software-mansion/react-native-reanimated/discussions/5511
- https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/#step-2-add-reanimateds-babel-plugin
