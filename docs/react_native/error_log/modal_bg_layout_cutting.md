# 모달의 background가 잘려서 보이는 문제

![modal_bg_layout_cutting](modal_bg_layout_cutting.jpeg)

위 화면처럼 모달의 background가 잘려서 보이는 문제가 발생

```tsx
 <Animated.View
  ref={menuRef}
  onLayout={handleMenuLayout}
  className={cn(
    "absolute rounded-md bg-background-0 border border-outline-100 p-1 shadow-hard-5",
    className
  )}
  style={[
    {
      top: menuPosition.top,
      left: menuPosition.left,
      minWidth: 200,
      maxWidth: Dimensions.get('window').width - 20,
    },
    menuStyle
  ]}
>
```

## 해결

`overflow-hidden`속성을 추가하여 해결
