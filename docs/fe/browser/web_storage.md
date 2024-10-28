# Web Storage

웹 스토리지(Web Storage)에는 두 종류, **localStorage와 sessionStorage**가 있다.
web storage는 Origin(도메인·포트·프로토콜)에 묶여있으며, 아래와 같은 특성을 지닌다.

## local storage

- 저장공간: 5MB
- 수명: 직접 제거될 때 까지
- 저장장소: Disk 또는 Browser Memory
- Origin: 같은 탭, 창 전체에서 공유됨

## session storage

- 저장공간: 5MB
- 수명: 직접 제거되거나, 브라우저 탭이 닫힐 때까지
- 저장장소: Browser Memory
- Origin: 같은 브라우저 탭, iframe에서 공유됨

## web storage API의 기본 사용 방법

웹 스토리지는 기본적으로 키(key)와 값(value)으로 이루어진 데이터를 저장할 수 있다.

```ts title="Javascript"
localStorage.setItem("key", value); // 키에 데이터 쓰기

localStorage.getItem("key"); // 키를 이용해 데이터 읽기

localStorage.removeItem("key"); // 키의 데이터 삭제

localStorage.clear(); // 모든 키의 데이터 삭제

localStorage.length; // 저장된 key-value 쌍의 개수
```

## 주의사항

오직 문자형(string)의 데이터 타입만 지원한다.
예를 들어 1(number)을 저장한 다음, storage에서 해당 데이터를 가져오면 "1"(string)을 반환한다.

```ts title="Javascript"
localStorage.setItem("num", 1);
typeof localStorage.getItem("num"); // string
```

### 해결 방법

위 문제를 해결하기 위해 JSON 형태로 storage에 데이터를 저장하고 쓸 수 있다.

```ts title="Javascript"
localStorage.setItem("json", JSON.stringify({ a: 1, b: 2 }));
JSON.parse(localStorage.getItem("json")); // {a: 1, b: 2}
```

## 결론

**자신의 브라우저에서 데이터를 계속 보존시키면서 사용**한다면 localStorage를, **여러 페이지 마다 다른 데이터를 보존시키고 싶다**면 sessionStorage를 사용하면 된다.

## 참고문서

https://www.daleseo.com/js-web-storage
https://ko.javascript.info/localstorage
