# 렉시컬 환경

실행 컨텍스트(execution context)는 `LexicalEnvironment` 컴포넌트와 `VariableEnvironment` 컴포넌트로 구성된다.

생성 초기에 두 컴포넌트는 **하나의 동일한 렉시컬 환경을 참조**한다.

이후 몇 가지 상황을 만나면 `VariableEnvironment` 컴포넌트를 위한 새로운 렉시컬 환경을 생성하고, 이때부터 두 컴포넌트는 내용이 달라지는 경우가 있다.

렉시컬 환경으로 통힐해 간략히 설명

렉시컬 환경은 다음 두 개의 컴포넌트로 구성된다.

1. 환경 레코드(Environment Record)
2. 외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference)

## 실행 컨텍스트 생성 & 식별자 검색 과정

```jsx
var x = 1;
const y = 2;

function foo() {
	var x = 3;
	const y = 4;

	function bar() {
		const z = 5;
		console.log(a + b + x + y + z);
	}
	// highlight-next-line
	bar(10);
}
// highlight-next-line
foo(20); // 42
```

1. 전역 객체 생성
   전역 객체는 **전역 코드가 평가되기 이전에 생성**된다. 이때 전역 객체에는 빌트인 전역 프로퍼티와 빌트인 전역 함수, 표준 빌트인 객체가 추가되며 동작환경(client or server side)에 따라 Web API 또는 특정 환경을 위한 호스트 객체를 포함한다.
2. 전역 코드 평가
3. 전역 코드 실행
4. foo 함수 코드 평가
5. foo 함수 코드 실행
6. bar 함수 코드 평가
7. bar 함수 코드 실행
8. bar 함수 코드 실행 종료
9. bar 함수 코드 실행 종료
10. 전역 코드 실행 종료
