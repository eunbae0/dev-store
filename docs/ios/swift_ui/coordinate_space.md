# coordinateSpace

`coordinateSpace`는 특정 view의 좌표 공간의 이름을 지정해서, 이 이름으로 접근하여 지정된 view의 points, sizes 등의 dimension를 사용할 수 있도록 함.

:::info
coordinateSpace(name:)은 deprecated되었음.
```swift
.coordinateSpace(name: "stack") // deprecated
.coordinateSpace(.named("stack"))
```
:::

## 예제

### Drag gesture

```swift
struct ContentView: View {
  @State private var location = CGPoint.zero


  var body: some View {
    VStack {
      Color.red.frame(width: 100, height: 100)
        .overlay(circle)
        Text("Location: \(Int(location.x)), \(Int(location.y))")
    }
    .coordinateSpace(.named("stack"))
  }


  var circle: some View {
    Circle()
      .frame(width: 25, height: 25)
      .gesture(drag)
      .padding(5)
  }


  var drag: some Gesture {
    DragGesture(coordinateSpace: .named("stack"))
      .onChanged { info in location = info.location }
  }
}
```

### Set scroll offset
```swift
GeometryReader { geometry in
  Color.clear
    .preference(
      key: ScrollOffsetPreferenceKey.self,
      value: -geometry.frame(in: .named("SCROLL")).origin.y
    )
}
 .onPreferenceChange(ScrollOffsetPreferenceKey.self) { value in
  offset = value
}
```