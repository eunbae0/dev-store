# Batching

:::info
Batching is when React groups multiple state updates into a single re-render for better performance.
:::

## React의 렌더링 과정

### Rendering

상태 값이 변경되면, React는 변경된 상태 값을 중심으로 새로운 Virtual DOM을 생성

즉시 컴포넌트를 다시 호출(리렌더링)하는거이 아닌, 언제 컴포넌트를 생성할 지 최적의 시간을 계산한다.

### Reconciliation(조정)

컴포넌트가 다시 호출되면, Rendering 단계에서 만든 Virtual DOM을 현재 UI에 적용된 가장 최신의 Virtual DOM과 비교한다. (Fiber로 처리)

### Commit(적용)

Actual DOM에 변경된 Virtual DOM을 적용해 화면의 변화를 만들어낸다.

## React Batching?

유저 이벤트가 발생하는 시점에 여러 상태 값이 변경되는 코드(ex. setState)가 있다면 모두 기다린 다음 렌더링으로 넘어간다.

## React 18 이후의 Automatic Batching

- 유저 이벤트에 연결된 함수 내에서 직접적으로 변경된 상태 값만 batching의 범위 안에 들어왔음.
  - 다시 말해 timeouts, promises, native event handlers 등은 batching이 수행되지 않음
- 18 이후부터는 createRoot로 리액트 루트 컴포넌트를 초기화하면 promise 등의 주기 내에서도 batching이 적용 됨.

```typescript
const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

## batch를 원하지 않는다면?

```typescript
import { flushSync } from "react-dom"; // Note: react-dom, not react

function handleClick() {
	flushSync(() => {
		setCounter((c) => c + 1);
	});
	// React has updated the DOM by now
	flushSync(() => {
		setFlag((f) => !f);
	});
	// React has updated the DOM by now
}
```

## 참고 문서

- https://github.com/reactwg/react-18/discussions/21
