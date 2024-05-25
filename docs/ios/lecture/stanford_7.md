---
sidebar_position: 4
---

# Stanford iOS 한글자막 강의 (7)

## 메모리를 관리하는 기초

- class는 heap 메모리에 저장, 자동으로 관리한다.
- 예측 불가능한 가비지 컬렉션과는 다르게 ARC를 이용하여 관리.

- strong
  - 기본적인 Reference Counting 방식(default)
  - strong 포인터는 힙 안에 있는 것들을 그 포인터가 더이상 그것을 가르키지 않을 때 까지 힙에 머물도록 강제한다.
- weak
  - 오직 옵셔널 타입의 참조 포인터에만 적용된다.
  - 힙에 어떤 것도 저장해두지 않음.
- unowned
