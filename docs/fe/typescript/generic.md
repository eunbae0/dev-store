# Generic

Generic을 이용하면 타입을 직접적으로 고정된 값으로 명시하지 않고, '변수'를 통해 언제든지 변할 수 있는 타입으로 지정할 수 있다.

```ts
function add<T>(x: T, y: T): T {
   return x + y;
}

add<number>(1, 2); // 3
add<string>('foo', 'bar'); // 'foobar'
```

## Generic 제약

extends 키워드를 이용해 타입의 종류를 제한할 수 있다.

```ts
type numberOrString = number | string;

function add<T extends numberOrString>(x: T, y: T): T {
   return x + y;
}

add(1, 2); // 3
add([1, 2], [3, 4]); // Error
```

:::info
interface, class의 extends는 상속의 의미로 '확장'의 의미를 가지지만, generic의 extends는 '제한'의 의미를 가진다는 차이점이 있다.
:::

## Generic 함수 타입

Generic을 이용해서 함수 자체 타입 구조를 정해서 할당 제한이 가능하다.

```ts
interface GenericIdentityFn<T> {
   (arg: T): T;
}

function identity<T>(arg: T): T {
   return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
let myIdentity2: GenericIdentityFn<string> = identity;

myIdentity(100);
myIdentity2('100');
```