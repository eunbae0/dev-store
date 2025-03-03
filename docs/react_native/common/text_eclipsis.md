# Text에서 말줄임표 적용하는 법

React Native에서는 Web에서와 다르게, `text-overflow: ellipsis;`속성을 사용하지 않고 `<Text />`의 `numberOfLines` props를 설정하여 말줄임표를 적용할 수 있다.

```tsx
<HStack className="items-center">
  <Text>
    ABCD
  </Text>
  <Text
  // highlight-next-line
    numberOfLines={1}
    className="flex-auto" // flex-auto로 레이아웃 제한
  >
    Lorem Ipsum
  </Text>
</HStack>
```