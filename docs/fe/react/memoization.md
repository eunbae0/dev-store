# Memoization Hooks (useCallback, useMemo)

메모이제이션(Memoization)은 프로그램이 동일한 계산을 반복할 때, 이전에 계산한 값을 메모리에 저장함으로써 중복되는 연산을 제거해서 프로그램 실행 속도를 빠르게하는 기술이다.

리액트 함수형 컴포넌트에서는 이러한 메모이제이션을 돕기 위한 두가지 Hook을 제공한다.

## 메모이제이션을 사용할 수 있는 경우

아래와 같은 경우 메모이제이션 훅 useCallback과 useMemo를 사용할 수 있습니다.

1. 렌더링 마다 함수가 새로 생성되어 참조값이 변하는 경우
2. 실행되는 함수가 복잡한 연산을 수행하는 경우

## useCallback

> useCallback(fn, deps);

useCallback 함수는 콜백 함수를 메모이제이션하고 반환한다.

import { useCallback } from 'react';

```ts
const memoizedCallback = useCallback(() => {
	doSomething(a, b);
}, [a, b]);
```

코드에서 useCallback함수는 doSomething함수를 반환한다. 그리고 렌더링시 반환된 함수가 저장된 memoizedCallback 함수는 의존성 배열안에 들어있는 값 a, b의 상태가 변경되었을 때만 생성된다.

## useMemo

> useMemo(() => fn, deps);

useMemo 함수는 콜백 함수의 반환값을 메모이제이션하고 반환한다.

```ts
import { useMemo } from "react";

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

코드에서 computeExpensiveValue() 함수의 반환값이 memoizedValue에 저장되며, 렌더링시 a와 b의 상태가 변경되었을 때만 선언된다.

## 마치며

자세한 내용은 아래에서 확인할 수 있습니다.

https://devpluto.tistory.com/entry/React-%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98-Hook%EC%9C%BC%EB%A1%9C-%EC%A4%91%EB%B3%B5%EC%97%B0%EC%82%B0-%ED%94%BC%ED%95%98%EA%B8%B0useCallback-useMemo
