# GeometryReader와 ScrollView

ScrollView 내부에 GeometryReader와 사용시 height를 계산하지 않는 문제가 있다.

:::info
"Content View" of ScrollView is bigger than screen size, to allow spring effect at the edges, when one scrolls more than a scrolling document size
:::

```swift
ScrollView {
  GeometryReader { geometry in
    //...
  }
}
```

따라서 GeometryReader 내부에 ScrollView를 사용하는 것이 바람직하다.

```swift
GeometryReader { geometry in
  ScrollView {
    //...
  }
}
```

## 참고문서

- https://stackoverflow.com/questions/58965503/geometryreader-in-swiftui-scrollview-causes-weird-behaviour-and-random-offset/58966715#58966715
- https://coding-rengar.tistory.com/9