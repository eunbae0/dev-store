# struct 초기화 & escaping closure

```swift
struct Item: View {
  private let product: StoreUserProduct
  private let isSelected: Bool
  private let onSelect: () -> Void

  public init(
    _ product: StoreUserProduct,
    isSelected: Bool,
    onSelect: @escaping () -> Void
  ) {
    self.product = product
    self.isSelected = isSelected
    self.onSelect = onSelect
  }
```

## @Binding 초기화

```swift
struct Item: View {
  @Binding private let isOn: Bool

  public init(
    _ isOn: isOn,
  ) {
    self._isOn = isOn
  }
```

## @escaping 생략

closure가 1개라면 init()에서 생략해서 표현 가능

```swift
struct Item: View {
  public let onChange: (String) -> Void // == init(onChange: @escaping (String) -> Void)
}

struct View: View {
  ...
  var body: some View {
    Item { dispatch($0) } // 축약형
  }
}
```
