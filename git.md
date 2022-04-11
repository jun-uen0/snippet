i think all dev needs git completion:</br> 
https://gist.github.com/juno/5546179

add remote origin
```shell
git remote add orign <url>
```
add origin url
```shell
git remote set-url origin <url>
```
rename local branch
```shell
git branch -m <old branch name>　<new branch name>
```
set initail branch name as "main"
```shell
git config --global init.defaultBranch <branch name>
```
link local branch to remote one
```shell
git branch -u origin/<branch>
git push origin <new remote branch name>
```
undo add
```shell
git rm --cache -r .
git rm --cache <file name>
```
uedo commit
```shell
git revert -n HEAD
git revert -n HEAD~1
git revert -n HEAD~2
```
udno remote branch (※ caution)
```shell
git pull origin <branch name>
git push origin <branch name>: <branch name>_backup # copy
git reset HEAD~<desired number> # undo
git push origin :<branch name> # delete branch
git push origin <branch name> # create branch
git push origin :<branch name>_backup # create branch
```
combing bultiple commits</br>
```shell
git rebase -i HEAD
git rebase -i HEAD~~ # combining 2 commits
git rebase -i HEAD~~~  # combining 3 commits
git rebase -i HEAD~4 # combining 4 commits
```
set alias
```shell
git config --global --edit
```
stash changes
```shell
git stash -u # stash current change
git stash list 
git stash pop stash@{0} # retrive stash by number
git stash save "stash message" # stash with massages
git stash clear # clear all stash
```
rebasing commits
```shell
git rebase -i HEAD~<number>
```
delete branch (both local and remote)
```shell
git branch -d <local branch name>
git push --delete <remote branch name>
```
merge specific file or directory from other branch
```shell
git checkout <branch name> -- <file or directory name>
```