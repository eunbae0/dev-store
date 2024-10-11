# TCA에서 State 초기화 구문 사용시 state가 변경되지 않는 문제

## 문제

```swift
 @ObservableState
  struct State: Equatable {
    var currentPage: Int = 0
    var MAX_PAGE: Int = 5
    var isLastPage: Bool = false
    
    init() {
      self.isLastPage = currentPage == MAX_PAGE
    }
  }
  // ...
  var body: some Reducer<State, Action> {
    BindingReducer()
    Reduce { state, action in
      switch action {
      case .view(.increasePage):
        withAnimation {
          state.currentPage += 1
        }
        return .none

      default: break
      }
      return .none
    }
  }
```
Swift TCA에서 `.view(.increasePage)` Action을 이용하여 `currentPage` state를 변경했지만, 변경되지 않는 문제

## 해결

@ObservableState로 State init() 사용시 state는 변경되지 않기 때문에 발생

-> init() 구문 삭제

