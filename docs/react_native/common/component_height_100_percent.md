# 컴포넌트 높이를 100%로 사용할 때

`space-between` 속성을 사용해서 적용하기 위해서는 부모의 크기(높이)가 명확히 정해져있어야 한다.

```jsx
<SafeAreaView>
  <View style={{ height: "100%" }}>
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
    {...}
    </View>
  </View>
</SafeAreaView>
```


## 참고문서
- https://stackoverflow.com/questions/29326998/setting-component-height-to-100-in-react-native/29327026