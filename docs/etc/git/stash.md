# Git Stash

## Save stash

새로운 stash를 스택에 만들어 하던 작업을 임시로 저장한다.

```bash
$ git stash
$ git stash save
```

## Check stash list

새로운 stash를 스택에 만들어 하던 작업을 임시로 저장한다.

```bash
$ git stash list
```

## Apply stash

stash를 이용해 하던 작업을 다시 불러온다.

```bash
$ git stash apply
$ git stash apply stash@{0}
```

index 옵션을 주면 Staged 상태까지 복원한다.

```bash
$ git stash apply --index
```

## Delete stash

```bash
$ git stash drop
$ git stash drop stash@{0}
```

## Rollback

실수로 잘못 stash 적용한 것을 되돌리고 싶다면 아래 명령어를 이용한다.  
가장 최근의 stash를 사용하여 패치를 만들고 그것을 거꾸로 적용한다.

```bash
$ git stash show -p | git apply -R
$ git stash show -p stash@{0} | git apply -R
```
