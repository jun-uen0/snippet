### nginx start
```shell
nginx
sudo nginx
```
### nginx stop
```shell
nginx -s stop
```
### see nginx process
```shell
ps -ef | grep nginx | grep -v grep
```
### nginx restart
ref: https://serverfault.com/questions/225948/how-to-restart-nginx-on-mac-os-x
```
sudo nginx -s stop && sudo nginx
```
### check for the process id of the main nginx process
```
ps x | grep nginx
```