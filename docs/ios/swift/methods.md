# Methods

Objective-C에서는 클래스에서만 메서드를 정의할 수 있지만, Swift에서는 구조체, 클래스, 열거형에서 메서드를 유연하게 저장할 수 있다.

## 인스턴스 메서드

인스턴스 메서드(Instance methods)는 특정 클래스,구조체,또는 열거형의 인스턴스에 속하는 함수이다.
인스턴스 프로퍼티에 접근하고 수정하는 방법을 제공하거나, 인스턴스의 목적과 관련된 기능을 제공하며 함수 구문과 완벽하게 일치하게 동작한다.

## self 프로퍼티

타입의 모든 인스턴스는 인스턴스 자체와 정확하게 일치하는 `self 라는 암시적 프로퍼티`를 가지고 있습니다.

```swift
class Counter {
  var count = 0
  func increment() {
    count += 1
  }
}

class Counter {
  var count = 0
  func increment() {
    self.count += 1
  }
}
```

increment() 메서드는 `self 프로퍼티`를 이용하여 아래처럼 작성할 수 있다.
하지만 실제로 코드에서 `self`를 꼭 작성할 필요는 없다. `self`를 명시적으로 작성하지 않으면 Swift는 메서드 내에서 이미 알고 있는 프로퍼티 또는 메서드 이름을 사용할 때마다 **현재 인스턴스의 프로퍼티 또는 메서드를 참조한다고 가정**하기 때문이다.

인스턴스 메서드의 파라미터 명이 그 인스턴스에 프로퍼티 명과 동일할 경우, 이름을 분리하기 위해 self 프로퍼티를 사용한다.

```swift
struct Point {
    var x = 0.0, y = 0.0
    func isToTheRightOf(x: Double) -> Bool {
        return self.x > x // 파라미터 x와 인스턴스 프로퍼티 self.x를 구분
    }
}
let somePoint = Point(x: 4.0, y: 5.0)
print(somePoint.isToTheRightOf(x: 1.0)) // true
```

## 인스턴스 메서드 내부에서 값 타입 수정

구조체(struct)와 열거형(enum)은 값 타입이다. 기본적으로 값 타입의 프로퍼티는 **인스턴스 메서드 내에서 수정될 수 없다.**
하지만 특정 메서드 내부에서 프로퍼티를 수정하기 위해서 `mutating 키워드`를 func 키워드 이전에 위치시켜 동작을 수행할 수 있다.

```swift
struct Point {
    var x = 0.0, y = 0.0
    mutating func moveBy(x deltaX: Double, y deltaY: Double) {
        x += deltaX
        y += deltaY
    }
}
var somePoint = Point(x: 1.0, y: 1.0)
somePoint.moveBy(x: 2.0, y: 3.0)
print(somePoint.x, somePoint.y) // (3.0, 4.0)
```

하지만 구조체를 상수(let)로 선언한다면 값 타입은 내부를 변경할 수 없기 때문에 에러가 발생한다.

```swift
let fixedPoint = Point(x: 3.0, y: 3.0)
fixedPoint.moveBy(x: 2.0, y: 3.0) // this will report an error
```

## Mutating Method 내부에서 self 할당

```swift
struct Point {
    var x = 0.0, y = 0.0
    mutating func moveBy(x deltaX: Double, y deltaY: Double) {
        self = Point(x: x + deltaX, y: y + deltaY)
    } // 위 예시의 moveBy 메서드와 일치하게 동작한다.
}
```

```swift
enum TriStateSwitch {
    case off, low, high
    mutating func next() {
        switch self {
        case .off:
            self = .low
        case .low:
            self = .high
        case .high:
            self = .off
        }
    }
}
var ovenLight = TriStateSwitch.low
ovenLight.next()
// ovenLight is now equal to .high
ovenLight.next()
// ovenLight is now equal to .off
```
