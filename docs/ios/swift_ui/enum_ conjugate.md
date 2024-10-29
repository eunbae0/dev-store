# enum의 활용

## calculate property로 label 설정

```swift
public enum Gender: String, CaseIterable {
  case male
  case female
  case etc = "other"

  public var label: String {
    switch self {
    case .male: "남자"
    case .female: "여자"
    case .etc: "기타"
    }
  }
}

ForEach(Gender.allCases, id: \.self) { gender in
  Text(gender.label)
}
```

## self + calculateProperty

```swift
public enum Example: String, Equatable {
  case _1 = "1"
  case _2 = "2"
  case _3 = "3"

  public var condition: Bool {
    return self == ._1
  }
}

// 활용
VStack {
  if example?.condition != true {
    // ...
  } else {}
}
```
## findBy

```swift
public static func findBy(sku: Product.ID) -> Self? {
  return allCases.first(where: { $0.sku == sku })
}
```