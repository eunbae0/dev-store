# 유틸리티 타입(1)

타입스크립트는 전역적으로 사용 가능한 타입 변환을 도와주는 유틸리티 타입을 제공합니다.

## Partial

객체의 모든 property를 optional하게 변환합니다.

```ts
interface Todo {
  title: string;
  description: string;
}
interface OptionalTodo = Partial<Todo> // { title?: string; description?: string; }
```

## Required

객체의 모든 property를 required하게 변환합니다. Partial 타입의 반대입니다.

```ts
interface Todo {
  title?: string;
  description?: string;
}
interface RequiredTodo = Required<Todo> // { title: string; description: string; }
```

## Record

Record는 Key와 Type을 받으며, Key와 Type쌍의 객체 타입을 생성합니다. 인덱스 시그니처와 유사한 기능을 하는 특징이 있습니다.

```ts
interface CatInfo {
	age: number;
	breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
	miffy: { age: 10, breed: "Persian" },
	boris: { age: 5, breed: "Maine Coon" },
	mordred: { age: 16, breed: "British Shorthair" },
};

const t1: Record<string, number> = {
	key1: 1,
	key2: 2,
};
```

## Pick

객체의 타입의 일부를 가져옵니다.

```ts
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<Todo, "title">; // { title: string; }
```

## Omit

객체의 타입의 일부를 제외하고 가져옵니다. Pick과 반대의 기능을 합니다.

```ts
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Omit<Todo, "title">; // { description: string; completed: boolean; }
```

## 참고문서

https://www.typescriptlang.org/docs/handbook/utility-types.html
