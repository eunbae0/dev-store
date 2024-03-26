# Delete All Local Branch

"main" 브랜치를 제외하고 모든 local branch를 지우는 명령어

```bash
$ git branch | grep -v "main" | xargs git branch -D
```
