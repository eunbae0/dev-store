# Array

- 배열은 순서대로 같은 타입의 값을 저장한다.

```swift
var threeDoubles = Array(repeating: 0.0, count: 3) // [Double], [0.0, 0.0, 0.0]
```

- 덧셈연산자를 이용해 배열을 더해 새로운 배열을 생성할 수 있다.

```swift
var sixDoubles = Array(repeating: 0.0, count: 2) + Array(repeating: 2.5, count: 3)  // [Double], [0.0, 0.0, 2.5, 2.5]
```

## Accessing & Modifying

- 배열에 아이템 갯수를 알기 위해서는 읽기 전용 `count`프로퍼티로 확인한다.

```swift
exampleArray.count
```

- 배열의 **append(\_:) 메서드를 호출** 또는 **덧셈 대입 연산자**를 통해 배열 끝에 새로운 아이템을 추가할 수 있다.

```swift
exampleArray.append(4)
exampleArray += [4, 5, 6]
```

- 서브스크립트 구문으로 범위 안에 값을 한번에 변경할 수 있다.

```swift
exampleArray[4...6] = [4, 5, 6]
```

- 배열에 특정 인덱스에 아이템을 추가하려면 배열의 **insert(\_:at:) 메서드**를 호출한다.

```swift
exampleArrayinsert(5, at: 4)
```

- **remove(\_:at:) 메서드**를 통해 배열의 아이템을 삭제할 수 있다.

```swift
let item = exampleArray.remove(at: 0)
```

:::info
배열의 범위를 넘는 인덱스로 값에 접근 또는 수정을 할 경우 런타임 에러가 발생한다.
따라서 배열의 count 프로퍼티를 사용하여 인덱스가 유효한지 확인할 수 있습니다.
ex. count == 0
:::

- 배열의 마지막 아이템을 삭제하기 위해 **removeLast() 메서드**를 이용할 수 있다. count 프로퍼티를 사용하지 않기 위함이다.

```swift
let apples = shoppingList.removeLast()
```

## Iterating Over an Array

- 각 아이템의 인덱스, 값이 모두 필요하다면 **enumerated() 메서드**를 사용할 수 있다.
- 배열의 각 아이템에 대해 enumerated() 메서드는 정수와 아이템을 조합하여 튜플로 반환한다.

```swift
for (index, value) in shoppingList.enumerated() {
    print("Item \(index + 1): \(value)")
}
// Item 1: Six eggs
// Item 2: Milk
// Item 3: Flour
// Item 4: Baking Powder
// Item 5: Bananas
```
