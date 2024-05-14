# Properties

## 저장된 프로퍼티

저장된 프로퍼티는 가장 간단한 형식으로, 특정 클래스 또는 구조체의 인스턴스의 부분으로 저장된 상수 또는 변수이다.

저장된 프로퍼티는 저장된 프로퍼티 변수 (variable stored properties) (`var 키워드`) 또는 저장된 프로퍼티 상수 (constant stored properties) (`let 키워드`)로 쓸 수 있다.

### Lazy Stored Properties

lazy property는

- 인스턴스의 초기화가 완료될 때까지 값을 알 수 없는 외부 요인에 인해 초기값이 달라질 경우
- 프로퍼티의 초기값으로 필요할 때까지 수행하면 안되는 복잡하거나 계산 비용이 많이 드는 경우

등에 유용하다.

```swift
class DataImporter {
    var filename = "data.txt"
}

class DataManager {
    lazy var importer = DataImporter()
    var data = [String]()
}


let manager = DataManager()
manager.data.append("Some data")
manager.data.append("Some more data")

print(manager.importer.filename) // DataImporter() 인스턴스는 import property에 처음 접근 될 때 생성된다.
```

위 예제는 lazy property를 이용하여 복잡한 클래스 `DataImporter`의 불필요한 초기화를 방지한다.

:::info
인스턴스 초기화가 완료된 후에도 초기값이 없을 수 있기 때문에 lazy property는 `var 키워드`를 사용하여 변수로 선언해야 한다. 상수인 `let 키워드` 초기화가 완료되기 전에 항상 값을 가지고 있어야 하므로 lazy로 선언할 수 없다.
:::

:::caution
lazy 수식어가 표시된 property는 여러 쓰레드에서 동시에 접근되고 + 프로퍼티가 아직 초기화되지 않은 경우 프로퍼티가 한번만 초기화 된다는 보장이 없다.
:::

## 계산된 프로퍼티

저장된 프로퍼티 이외에도 값을 실질적으로 저장하지 않는 **계산된 프로퍼티(computed properties)**를 정의할 수 있다.

계산된 프로퍼티는 다른 프로퍼티와 값을 간접적으로 조회하고 설정하는 **getter**와 **옵셔널 setter**를 제공한다.

### 짧은 Getter 선언

getter의 전체 본문이 **단일 표현식**이라면 getter는 **암시적으로 표현식을 반환**한다. 이는 함수의 return생략 규칙과 동일하다.

```swift
struct CompactRect {
  var origin = Point()
  var size = Size()
  var center: Point {
    get {
      Point(x: origin.x + (size.width / 2), y: origin.y + (size.height / 2))
    }
    // ...
  }
}
```

### 짧은 Setter 선언

계산된 프로퍼티의 setter가 새로운 값을 설정하는데 이름을 정의하지 않았다면 `newValue` 라는 기본 이름이 사용된다.

```swift
struct AlternativeRect {
  var origin = Point()
  var size = Size()
  var center: Point {
    get {
      // ...
    }
    set {
      origin.x = newValue.x - (size.width / 2)
      origin.y = newValue.y - (size.height / 2)
    }
  }
}
```

### Read-Only Computed Properties

setter가 없고 getter만 있는 계산된 프로퍼티는 읽기전용 계산된 프로퍼티 (read-only computed property)라고 한다.

읽기전용 계산된 프로퍼티는 항상 값을 반환(get)하고 점(.) 구문으로 접근할 수 있지만 다른 값을 설정(set)할 수 없다.

```swift
struct Cuboid {
  var width = 0.0, height = 0.0, depth = 0.0
  var volume: Double {
    return width * height * depth
  }
}
let fourByFiveByTwo = Cuboid(width: 4.0, height: 5.0, depth: 2.0)
print(fourByFiveByTwo.volume) // 40.0
```

## 프로퍼티 관찰자

프로퍼티 관찰자 (Property observers)는 프로퍼티의 값이 변경되는지 관찰하고 응답한다.
프로퍼티 관찰자는 프로퍼티의 현재 값이 새로운 값과 같더라도 프로퍼티의 값이 **설정될 때** 호출된다.

아래의 위치에 프로퍼티 관찰자를 추가할 수 있습니다:

- 정의한 저장된 프로퍼티
- 상속한 저장된 프로퍼티
- 상속한 계산된 프로퍼티

프로퍼티 관찰자인 willSet과 didSet 관찰자는 새로운 값이 프로퍼티에 할당될 때마다 호출된다. 추가적으로, 새로운 값이 현재값과 같더라도 항상 호출된다.

### willSet

willSet은 값이 저장되기 직전에 호출된다.

### didSet

didSet 은 새로운 값이 저장되자마자 호출됩니다.

### 예시

```swift
class StepCounter {
    var totalSteps: Int = 0 {
        willSet(newTotalSteps) {
            print("About to set totalSteps to \(newTotalSteps)")
        }
        didSet {
            if totalSteps > oldValue  {
                print("Added \(totalSteps - oldValue) steps")
            }
        }
    }
}
let stepCounter = StepCounter()
stepCounter.totalSteps = 200
// About to set totalSteps to 200
// Added 200 steps
stepCounter.totalSteps = 360
// About to set totalSteps to 360
// Added 160 steps
stepCounter.totalSteps = 896
// About to set totalSteps to 896
// Added 536 steps
```

didSet 관찰자는 오래된 값에 대한 사용자 파라미터 명을 제공하지 않고 대신에 oldValue 의 기본 이름을 사용합니다.

## 프로퍼티 래퍼 (Properties Wrapper)

프로퍼티 래퍼를 정의하기 위해서는 `wrappedValue 프로퍼티`를 정의한 구조체, 열거형 또는 클래스를 만들어야 한다.

```swift
@propertyWrapper
struct TwelveOrLess {
    private var number = 0
    var wrappedValue: Int {
        get { return number }
        set { number = min(newValue, 12) }
    }
}
// setter는 새로운 값이 12 보다 작거나 같은 지를 확인하고, getter는 저장된 값을 반환한다.
```

### 래핑된 프로퍼티를 위한 초기 값 설정

```swift
@propertyWrapper
struct SmallNumber {
    private var maximum: Int
    private var number: Int


    var wrappedValue: Int {
        get { return number }
        set { number = min(newValue, maximum) }
    }


    init() {
        maximum = 12
        number = 0
    }
    init(wrappedValue: Int) {
        maximum = 12
        number = min(wrappedValue, maximum)
    }
    init(wrappedValue: Int, maximum: Int) {
        self.maximum = maximum
        number = min(wrappedValue, maximum)
    }
}
```

```swift
struct ZeroRectangle {
    @SmallNumber var height: Int
    @SmallNumber var width: Int
}

var zeroRectangle = ZeroRectangle()
print(zeroRectangle.height, zeroRectangle.width)
// Prints "0 0"

struct NarrowRectangle {
    @SmallNumber(wrappedValue: 2, maximum: 5) var height: Int
    @SmallNumber(wrappedValue: 3, maximum: 4) var width: Int
}

var narrowRectangle = NarrowRectangle()
print(narrowRectangle.height, narrowRectangle.width)
// Prints "2 3"

narrowRectangle.height = 100
narrowRectangle.width = 100
print(narrowRectangle.height, narrowRectangle.width)
// Prints "5 4"

struct MixedRectangle {
    @SmallNumber var height: Int = 1
    @SmallNumber(maximum: 9) var width: Int = 2
}

var mixedRectangle = MixedRectangle()
print(mixedRectangle.height)
// Prints "1"

mixedRectangle.height = 20
print(mixedRectangle.height)
// Prints "12"
```

### 프로퍼티 래퍼에서 값 투영(Projecting a Value)

래핑된 값 외에도 프로퍼티 래퍼는 `projectedValue 프로퍼티` 정의에 의해 추가적인 기능을 노출할 수 있다.

```swift
@propertyWrapper
struct SmallNumber {
    private var number: Int
    private(set) var projectedValue: Bool


    var wrappedValue: Int {
        get { return number }
        set {
            if newValue > 12 {
                number = 12
                projectedValue = true
            } else {
                number = newValue
                projectedValue = false
            }
        }
    }


    init() {
        self.number = 0
        self.projectedValue = false
    }
}
struct SomeStructure {
    @SmallNumber var someNumber: Int
}
var someStructure = SomeStructure()


someStructure.someNumber = 4
print(someStructure.$someNumber)
// Prints "false"


someStructure.someNumber = 55
print(someStructure.$someNumber)
// Prints "true"
```

SwiftUI의 `@State`, `@Binding`이 이를 통해 구현될 수 있음을 알 수 있다.

## 타입 프로퍼티

static 키워드로 타입 프로퍼티를 정의할 수 있다.

타입 프로퍼티는 인스턴스 프로퍼티처럼 점 구문으로 조회되고 설정할 수 있으며, class 인스턴스의 초기화 없이 점 구문으로 조회 가능하다.

```swift
struct SomeStructure {
    static var storedTypeProperty = "Some value."
    static var computedTypeProperty: Int {
        return 1
    }
}
enum SomeEnumeration {
    static var storedTypeProperty = "Some value."
    static var computedTypeProperty: Int {
        return 6
    }
}
class SomeClass {
    static var storedTypeProperty = "Some value."
    static var computedTypeProperty: Int {
        return 27
    }
    // class 인스턴스 내부에 class 키워드를 사용해도 타입 프로퍼티로 사용할 수 있다.
    class var overrideableComputedTypeProperty: Int {
        return 107
    }
}
```

```swift
print(SomeStructure.storedTypeProperty)
// Prints "Some value."
SomeStructure.storedTypeProperty = "Another value."
print(SomeStructure.storedTypeProperty)
// Prints "Another value."
print(SomeEnumeration.computedTypeProperty)
// Prints "6"
print(SomeClass.computedTypeProperty)
// Prints "27"
```

```swift
struct Animal {
  static var nums = 0

  init() {
    Animal.nums += 1
  }
}
let dog = Animal()
print(dog.nums) // 1
let cat = Animal()
print(cat.nums) // 2
```

두 개의 구분된 Animal 인스턴스를 dog와 cat에 할당했지만, static으로 선언된 nums 프로퍼티가 서로 공유되어 변경되는 모습.
