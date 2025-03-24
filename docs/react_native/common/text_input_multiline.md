# TextInput에서 Multiline 사용하기

`multiline` props를 설정하여 TextInput을 multiline으로 사용할 수 있다.

```tsx
<TextInput
  multiline
  // ...
/>
```

## numberOfLines으로 줄 수 제한하기

```tsx
<TextInput
  multiline
  numberOfLines={4}
/>
```

## scrollEnabled로 스크롤 제어하기

TextInput이 ScrollView로 감싸져 있는 경우, `scrollEnabled` props를 설정하여 스크롤을 제어할 수 있다.

```tsx
<TextInput
  multiline
  scrollEnabled={false}
/>
```

## textAlignVertical로 텍스트 정렬하기

```tsx
<TextInput
  multiline
  textAlignVertical="top"
/>
```
