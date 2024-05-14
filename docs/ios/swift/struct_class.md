# Structures & Classes

## 구조체와 클래스의 공통점

- 값을 저장하는 프로퍼티를 정의할 수 있다.

- 기능 제공을 위한 메서드를 정의할 수 있다.

- 서브 스크립트 구문을 사용하여 값에 접근을 제공하는 서브 스크립트를 정의할 수 있다.

- 초기화 상태를 설정하기 위한 초기화를 정의할 수 있다.

- 기본 구현을 넘어 기능적 확장을 위한 확장이 가능하다.

- 특정 종류의 표준 기능을 제공하는 프로토콜을 준수한다.

## 구조체와 클래스의 차이점

클래스는 구조체와 다르게 아래와 같은 기능을 추가적으로 제공한다.

- 상속을 사용하면 한 클래스가 다른 클래스의 특성을 상속할 수 있다. (super)

- 타입 캐스팅을 사용하면 런타임에 클래스 인스턴스의 타입을 확인하고 해석할 수 있다.

- 초기화 해제 구문 (Deinitializers) 을 사용하면 클래스의 인스턴스가 할당된 리소스를 해제할 수 있도록 한다.

```swift
class ...
  deinit {}
```

- 참조 카운팅은 하나 이상의 클래스 인스턴스 참조를 허락한다. (Reference Type)

## 정의 구문

```swift
struct Resolution {
    var width = 0
    var height = 0
}
class VideoMode {
    var resolution = Resolution()
    var interlaced = false
    var frameRate = 0.0
    var name: String?
}
```

## 구조체와 클래스 인스턴스

인스턴스 생성 구문은 모두 매우 유사하다.

```swift
let someResolution = Resolution()
let someVideoMode = VideoMode()
```

## 프로퍼티 접근

```swift
print(someResolution.width) // 0
print(someVideoMode.resolution.width) // 0
```

아래처럼 새로운 값을 할당 가능하다.

```swift
someVideoMode.resolution.width = 1280
print(someVideoMode.resolution.width) // 1280
```

## 구조체의 멤버 별 초기화

모든 구조체는 새로운 구조체 인스턴스의 멤버 프로퍼티를 초기화 할 때 사용할 수 있는 자동적으로 생성된 멤버별 초기화 구문 (memberwise intializer) 을 가지고 있다. 새로운 인스턴스에 프로퍼티 초기값은 이름으로 멤버별 초기화에 전달될 수 있다.

```swift
let vga = Resolution(width: 640, height: 480)
```

:::info
구조체와 반대로 클래스 인스턴스는 멤버별 초기화를 받지 않는다.
:::

## 값 타입 vs 참조 타입

구조체와 열거형(enum)은 값 타입(value type)이다.

```swift
let hd = Resolution(width: 1920, height: 1080)
var cinema = hd

cinema.width = 2048
print(hd.width) // 1920, 기존 hd 인스턴스의 width 프로퍼티는 기존값을 그대로 가짐
```

:::info
배열, 딕셔너리, 문자열과 같은 Swift 표준 라이브러리에 정의된 콜렉션은 최적화를 사용하여 복사 성능 비용을 줄인다.
즉시 복사본을 만드는 대신, 위 콜렉션은 **원본 인스턴스와 복사본 간에 요소가 저장된 메모리를 공유**한다. 코드에서 보이는 동작은 항상 바로 복사가 일어나는 것처럼 보이지만, 실제로는 콜렉션의 복사본 중 하나가 수정되면 요소는 수정되기 직전에 복사된다.
:::

클래스는 참조 타입(reference type)이다.

```swift
let tenEighty = VideoMode()
tenEighty.resolution = hd
tenEighty.interlaced = true
tenEighty.name = "1080i"
tenEighty.frameRate = 25.0

let alsoTenEighty = tenEighty
alsoTenEighty.frameRate = 30.0

print(tenEighty.framRate) // 30.0, 같은 하나의 인스턴스에 다른 2개의 이름을 가지고 있음
```

`tenEighty` 와 `alsoTenEighty` 는 변수가 아닌 상수 로 선언되지만, 상수 자체(메모리 주소)는 변경되지 않으므로 내부 프로퍼티의 수정이 가능하다.

## 식별 연산자

- 동일 인스턴스 (Identical to) (`===`)

- 동일하지 않은 인스턴스 (Not identical to) (`!==`)

위 두가지 연산자를 이용해서 2개의 상수 또는 변수가 하나의 동일한 인스턴스를 참조하는지 확인할 수 있다.

```swift
if tenEighty === alsoTenEighty {
    print("tenEighty and alsoTenEighty refer to the same VideoMode instance.")
}
// Prints "tenEighty and alsoTenEighty refer to the same VideoMode instance."
```

:::caution
`===`는 같음을 의미하는 `==`와 다름에 유의해야한다. `===`는 동일한 인스턴스를 참조하는지 여부를 확인하는 것이다.
:::
