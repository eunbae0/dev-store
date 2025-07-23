# iOS의 기본 쓸어서 뒤로가기 동작이 gesture-handler와 겹치는 현상

`panGesture` 이벤트를 사용할 때, horizontal 제스쳐를 걸면 iOS의 기본 뒤로가기 동작과 conflict되는 현상이 발생

## 해결

`hitslop` 메서드를 사용해 gesture 영역을 조절

:::info
This parameter enables control over what part of the connected view area can be used to begin recognizing the gesture. When a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly.
:::

```tsx
const panGesture = Gesture.Pan()
  .hitSlop({ left: -20 })
  .activeOffsetX([-10, 10])
  .failOffsetY([-20, 20]) 
  // ...
```

## 참고문서

github에서는 `Swipable`에 대한 문제였지만, rngh가 업데이트되면서 해당 컴포넌트가 사라졌기에 `Guesture`의 메서드를 사용할 수 있다.

https://github.com/software-mansion/react-native-gesture-handler/issues/890