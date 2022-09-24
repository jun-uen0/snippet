### CloudFormation
deploy
```shell
aws cloudformation deploy --template-file <file name> --stack-name <stack name (lower case only)>
```
delete
```shell
aws cloudformation delete-stack --stack-name <stack name>
```
profile swicher (https://github.com/johnnyopao/awsp)
```shell
$ awsp
AWS Profile Switcher
? Choose a profile
❯ test 
  default
```
delete amplify app (when you can't delete it in dashboard)
run command below in AWS CloudShell
```shell
aws amplify delete-app --app-id <your_app-id>
```
