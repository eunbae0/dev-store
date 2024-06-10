# Revert

커밋을 추가하는 방식으로 코드를 되돌리는 방법.

revert 명령어는 `reset --soft, mixed`와 동일한 결과를 가져오지만 이력은 Revert "..."라는 메세지가 추가됨

## 방법

```bash
$ git commit -m "1번 커밋"
$ git commit -m "2번 커밋"
$ git commit -m "3번 커밋"

$ git revert {1번 커밋 hash}
```

위 명령어를 순차적으로 실행하면 **1번 커밋에 해당하는 내용만** 삭제된다.

## 바로 커밋되지 않도록 하는 방법

```bash
$ git revert --no-commit {커밋 해쉬}
```

revert한 결과를 stage 상태만 유지하기 위해서는 `--no-commit` 옵션을 추가한다.

## Revert 취소하는 방법

`git log`를 이용하여 작업 로그를 확인한 다음, 되돌리고 싶은 내역의 커밋해쉬를 `git reset`을 통해 리셋한다.
