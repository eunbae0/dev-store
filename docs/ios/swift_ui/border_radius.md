# Border Radius

swiftUI에서는 `clipShape`를 이용해서 cornerRadius를 주더라도, border의 radius는 cornerRadius와 같이 변하지 않는다.

따라서 `.overlay`를 통해 border의 cornerRadius를 설정해줘야한다.

```swift
.clipShape(
      RoundedRectangle(cornerRadius: 6)
  )
.overlay(
    RoundedRectangle(cornerRadius: 6)
        .stroke(.red, lineWidth: 2)
)
```