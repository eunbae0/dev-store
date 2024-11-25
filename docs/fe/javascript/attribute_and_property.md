# Attribute와 Property

## Attribute

Attribute는 HTML의 속성이다. Element에 id, class와 같은 추가적인 정보를 일컫는다.

```html
<div id="id_1" class="class_1"></div>
```

## Property

Property는 DOM의 속성이다. HTML의 attribute를 DOM 내에서 대신해서 표현한다.

```html
<div class='my-class' style="color: red;"></div>

<script>
    // className과 style은 프로퍼티이다
    document.querySelector('div').className; // "my-class"
    document.querySelector('div').style.color; // "red"
</script>
```

## 둘의 차이점

attribute는 **정적으로 변하지 않는** 반면, property는 **동적으로 값이 변할 수 있다**.

### 예시

```html
<input type="text" value="0">
```
예를들어, 해당 input은 Attribute로 value를 0 값으로 가지고 있다.
이를 DOM 문법을 이용해서 해당 DOM의 property를 가져올 수 있다.

```js
document.querySelector('input').value; // value는 property
```

DOM을 이용해 가져온 property를 변경할 수도 있다.

```js
document.querySelector('input').value = 123; // value는 property
console.log(document.querySelector('input').value); // 123
```

하지만 이때 HTML 태그는 여전히 0인데, value property가 변경되었다고 굳이 HTML 속성을 변경할 필요는 없기 때문이다.

하지만 attribute를 변경하고 싶다면 `setAttribute()`메서드를 사용할 수 있다.
```js
document.querySelector('input').setAttribute('value', 123)
```

## custom attribute

개발자는 원하는 attribute를 임의로 HTML에 지정할 수 있다.
```html
<input type="text" value="0" custom="999">
```
그런데 Element는 가진 모든 속성을 property로 가지진 않는다.

```js
document.querySelector('input').custom; // undefined
```

따라서 이런 사용자 정의 attribute에 접근하기 위해서는 `getAttribute()`메서드를 사용하면 된다.
```js
document.querySelector('input').getAttribute('custom') // 999
```
