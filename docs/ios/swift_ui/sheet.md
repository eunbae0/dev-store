# Sheet

```swift
struct ContentView: View {
  @State private var presentSheet = false

  var body: some View {
    VStack {
      Button("Show Sheet") {
        presentSheet.toggle()
      }
    }
    .sheet(isPresented: $presentSheet) {
        Sheet()
    }
  }
}

struct Sheet: View {
  var body: some View {
    VStack {
      Text("SheetView")
    }
  }
}
```

## 상단 drag indicator 추가

```swift
.sheet() {
  Sheet()
    .presentationDragIndicator(.visible)
}
```

## 크기 조절

### 기본 case

```swift
.sheet() {
  Sheet()
    .presentationDetents([.large])
}
```

```swift
.sheet() {
  Sheet()
    .presentationDetents([.medium])
}
```

### custom

```swift
.sheet() {
  Sheet()
    .presentationDetents([.fraction(0.8)])
}
```

## 닫기

```swift
struct Sheet: View {
  @Environment(\.dismiss) var dismiss
  var body: some View {
    VStack {
      Text("SheetView")
      Button("Dismiss") { dismiss() }
    }
  }
}
```
