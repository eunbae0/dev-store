# Firestore 에러

##

> Function updateDoc() called with invalid data. Unsupported field value: undefined

## 이유

updateDoc() 함수를 사용할 때 undefined 값을 전달하면 발생합니다.

```ts
updateDoc(doc, { field: undefined });
```

## 해결 방법

```ts
const newUser = Object.assign(
			{ id: memberData.user.id },
			memberData.user.displayName
				? { displayName: memberData.user.displayName }
				: {},
		)
```



