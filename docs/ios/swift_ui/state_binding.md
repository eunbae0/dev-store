# @State, @Binding

## @State

@State는 변화가 생기면 해당 변수의 값을 읽거나 새로 쓸 수 있음을 의미하는 property wrapper이다.

- State value 값이 변경되면 뷰는 해당 value 의 appearance 를 무효화 하고 다시 body 값을 계산한다.
- State 변수값이 변경되면 view 를 다시 랜더링 하기 때문에 항상 최신 값을 가진다.
- State 인스턴스는 그 자체로 값이 아닌 값을 읽고 쓰는 것을 의미한다.
- @State 속성으로 어떤 프로퍼티의 초기값을 지정했다면, 다른 값으로 재할당이 불가능하다. 재할당은 @Binding 변수를 통해서만 가능하다.

```swift
@State var isOn: Bool = false
@State private var number : Int = 10
```

@State 프로퍼티는 항상 private으로 선언하고 가장 상위 뷰에서 @State를 관리해야한다.

:::info
뷰를 초기화할때, @State 프로퍼티 값도 같이 초기화하게되면 SwiftUI에서 @State 프로퍼티를 관리하는 공간인 Storage에서 conflict가 나기 때문에 private로 선언해야한다.
:::

## @Binding

@Binding property wrapper를 통해 데이터를 표시하고 변경하는 View 간에 양방향 연결을 만들 수 있다.

- 다른 뷰에서 @State 속성으로 선언된 프로퍼티를 사용한다면 @Binding 속성을 사용한다.
- 사용시에는 $를 앞에 붙여 binding 변수임을 나타낸다.
- 외부에서 접근해야 하기 때문에 private 키워드는 사용하지 않는다.

```swift
// 상위 View
var body: some View {
  Button(isOn: $isOn) // isOn: Binding<T>
}
// 하위 View
@Binding var isOn: Bool
```

:::info
A binding controls the storage for a value, so you can pass data around to different views that need to read or write it.
:::
