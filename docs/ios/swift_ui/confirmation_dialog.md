# ConfirmationDialog

ActionSheet는 iOS 16까지만 지원하고 deprecated.
대신하여 `ConfirmationDialog`를 사용한다.


## 예시

```swift
.confirmationDialog(
  "제목",
  isPresented: $isPresented,
  titleVisibility: .visible,
  actions: {
    Button("카메라") {
      print("카메라 선택")
    }
    Button("라이브러리") {
      print("라이브러리 선택")
    }
    Button("취소", role: .cancel) {}
  },
  message: {
    Text("불러올 사진 위치를 선택해주세요.")
  }
)
```

## .destructive

선언적으로 `role: .destructive`를 추가하여 red 색상의 button을 생성할 수 있다.

```swift
Button("카메라", role: .destructive) {
    print("카메라 선택")
}
```