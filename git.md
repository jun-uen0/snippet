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
undo commit
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
# git show  <branch name>>:<file or directory name>
git checkout <branch name> -- <file or directory name>
```
git clone with personal access tokens
ref: https://stackoverflow.com/questions/25409700/using-gitlab-token-to-clone-without-authentication
```shell
https://$GIT_USERNAME:$GITLAB_PERSONAL_ACCESS_TOKEN@<gitlab url>
```
see log with Author and Comitter
```shell
git log -1 --pretty=full
```
change author
```shell
git commit --amend --author="name <email address>"
```
change committer
link: https://stackoverflow.com/questions/750172/how-to-change-the-author-and-committer-name-and-e-mail-of-multiple-commits-in-gi
```shell
git config --local user.name "New Author Name"
git config --local user.email "<email@address.com>"

git commit --amend --no-edit --reset-author
git push -f origin <your branch>
```
change author and committer for all commit
ref: https://gist.github.com/bgromov/a1905055a8b9cdbeb1d2a87e70920cc8
```shell
git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='Newname'
    GIT_AUTHOR_EMAIL='new@email'
    GIT_COMMITTER_NAME='Newname'
    GIT_COMMITTER_EMAIL='new@email'
  " HEAD
```
Globally git ignore DS_STORE
```shell
vi ~/.gitignore_global

# add
.DS_Store

# run this command in git project
git config --global core.excludesfile ~/.gitignore_global
```
change commit message
```shell
git commit --amend
```
change default branch name
explanation: https://stackoverflow.com/questions/68277661
```shell
root/prj git:(main) git branch -M dev
➜ root/prj git:(dev)
```
