# Interface vs Type

타입스크립트에서는 type과 interface 라는 두 가지 키워드로 객체의 타입을 정의할 수 있다.

## interface

- 객체(Object)의 타입을 설정할 때 사용할 수 있다.
- **extends**를 이용하여 타입 확장이 가능하다.

### 선언적 확장

interface는 선언적 확장(Declaration Merging)이 가능하다.

```ts
interface Person {
	name: string;
	age: number;
}

interface Person {
	gender: string;
}
```

## type

- 객체 뿐 아니라 원시 값(Primitive Type)이나 튜플(Tuple), 유니언(Union) 타입을 선언할 수 있다.
- &를 이용하여 타입 확장이 가능하다.

```ts
type T1 = string; // Primitive Type
type T2 = [string, number, boolean]; // Tuple
type T3 = string | number; // Union
type T4 = "Type1" | "Type2" | "Type3"; // Union
```

### computed value

type은 computed value를 사용 할 수 있지만, interface는 사용 할 수 없다.

```ts
type T1 = "Type1" | "Type2" | "Type3";
type T2 = {
	[key in T1]: string;
};
interface I1 {
	// error-next-line
	[key in T1]: string; // error
}
```
