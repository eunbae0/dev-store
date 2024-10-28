# Promise

ES6에서는 비동기 처리를 위한 또 다른 패턴으로 Promise를 도입했다.

Promise는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을 명확하게 표현할 수 있다는 장점이 있다.

## 콜백 헬

```javascript
const get = (url) => {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.send();

	xhr.onload = () => {
		if (xhr.status === 200) {
			return JSON.parse(xhr.response);
		}
		console.error("error");
	};
	const res = get("http://~");
	console.log(res); // undefined
};
```

- 반환문 `return JSON.parse(xhr.response)`는 `get` 함수의 반환문이 아니기때문에 onload 이벤트 핸들러의 반환값은 캐치할 수 없다.
- xhr.onload 이벤트 핸들러에 바인딩한 이벤트 핸들러는 언제나 `console.log(res)` 구문이 종료한 이후 호출된다. (태스크 큐에 저장되기 때문)

따라서 아래와 같이 콜백 함수를 전달하는 방식으로 비동기 처리 결과에 대한 후속 처리를 수행할 수 있다.

```javascript
const get = (url, successCallback, failureCallback) => {
	// ...
};
```

위와 같은 방식으로 비동기 함수가 또다시 비동기 함수를 호출해야한다면, 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생하는데, 이를 **콜백 헬**이라 한다.

```javascript
// example of callback hell
get("/step1", (a) => {
	get(`/step2/${a}`, (b) => {
		get(`/step3/${b}`, (c) => {
			// ...
		});
	});
});
```

## 에러 처리의 한계

```javascript
try {
	setTimeout(() => {
		throw new Error("Timeout");
	}, 1000);
} catch (e) {
	console.error("error: ", e);
}
```

에러는 호출자방향으로 전파되기 때문에 setTimeout 함수의 콜백 함수가 발생시킨 에러는 catch 블록에서 캐치되지 않는다.

## 프로미스의 생성

Promise 생성자 함수를 new 연산자와 함께 호출하면 Promise 객체를 생성한다.
ES6에서 도입된 Promise는 호스트 객체가 아닌 ECMAScript 사양에 정의된 표준 빌트인 객체이다.

Promise 생성자 함수는 비동기 처리를 수행할 콜백(executor)함수를 인수로 전달받고, 이 콜백 함수는 `resolve`와 `reject` 함수를 인수로 전달받는다.

비동기 처리가 성공하면 `resolve`함수를 호출하고, 실패하면 `reject`함수를 호출한다.

프로미스가 생성된 직후 기본적으로 `pending` 상태이며, 이후 비동기 처리가 수행되면 `settled` 상태로 변경된다.
(성공: `fulfilled`, 실패: `rejected`)

:::info
`Promise`는 **비동기 처리 상태와 처리 결과를 관리**하는 객체이다.
:::

## 프로미스의 후속 처리 메서드

### Promise.prototype.then

- 첫번째 콜백함수는 프로미스가 fullfilled 상태가 되면 호출된다.
- 두번째 콜백함수는 프로미스가 rejected 상태가 되면 호출된다.

만약 then 메서드의 콜백함수가 프로미스를 반환하면 그 프로미스를 그대로 반환하고, 콜백 함수가 프로미스가 아닌 값을 반환하면 그 값을 암묵적으로 resolve 또는 reject하여 프로미스를 생성해 반환한다.

### Promise.prototype.catch

catch 메서드의 콜백함수는 프로미스가 rejected 상태인 경우만 호출된다.

### Promise.prototype.finally

프로미스의 성공 또는 실패와 상관없이 무조건 한 번 호출된다.

:::info
catch와 finally 메서드 모두 언제나 Promise를 반환한다.
:::

### 프로미스의 정적 메서드

- Promise.resolve / Promise.reject

```javascript
const resolvedPromise = Promise.resolve([1, 2, 3]);
const resolvedPromise = new Promise((resolve) => resolve([1, 2, 3])); // 위와 같음
resolvedPromise.then(console.log); // [1, 2, 3]
```

- Promise.all
- Promise.race
- Promise.allSettled

### 마이크로태스크 큐

- 마이크로태스크 큐는 태스크 큐와는 별도의 큐로, 프로미스의 후속 처리 메서드의 콜백 함수가 일시 저장된다.
- 마이크로태스크 큐는 태스크큐보다 우선순위가 높다.
