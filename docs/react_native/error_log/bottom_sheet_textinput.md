# BottomSheet에서 텍스트 입력시 튕기는 현상

BottomSheet에서 `textinput` 컴포넌트에 Keyboard를 사용할 경우, 앱이 무조건적으로 튕기는 현상이 발생한다.

## 해결

```tsx
<BottomSheetTextInput
// highlight-next-line
  defaultValue={editGroupName}
  onChangeText={handleGroupNameChange}
  placeholder="그룹명을 입력해주세요"
  editable={!isLoading && !isUpdating}
  className={TEXT_INPUT_STYLE}
/>
```

textinput prop에 `value`대신, `defaultValue`에 값을 할당한다.