# 클로저

## 정의

Javascript에서 외부 함수의 실행이 끝나고, 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근할 수 있는 것.

이는 반환된 내부함수가 자신이 선언되었을때의 환경(Lexical Environment)에서의 스코프를 기억하기 때문에 접근이 가능한 것이다.

:::note
클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.
:::

## 예시

```ts
const closureComponent = () => {
	const outerFunc = () => {
		let x = "x";
		let innerFunc = () => {
			console.log(x); // 내부 함수에서 외부 함수의 지역 변수에 접근한다.
		};
		return innerFunc;
	};
	const callInnerFunc = outerFunc();
	callInnerFunc(); // "x", 외부 함수의 실행이 끝나더라도 변수에 접근 가능
};
export default closureComponent;
```

## 활용

클로저는 자신이 생성될 때의 환경(Lexical environment)을 기억하기 때문에 메모리 차원에서 손해를 볼 수 있다. 하지만 클로저는 자바스크립트의 강력한 기능이므로 이를 유용하게 사용할 수 있다.

### 정보의 접근 제한

```ts
function Counter() {
	var counter = 0;

	// 클로저
	this.increase = function () {
		return ++counter;
	};

	// 클로저
	this.decrease = function () {
		return --counter;
	};
}

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.decrease()); // 0
```

클로저인 increase(), decrease()에서만 내부 변수를 조작 가능하기 때문에 class의 private 키워드의 역할을 할 수 있다.
