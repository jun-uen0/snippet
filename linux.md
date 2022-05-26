### man / tldr
get usage example for each linux command
to use tldr you have to dl: https://tldr.sh
```shell
man <linux commnad>
tldr <linux commnad>
```

### nslookup / dig / host
check domain name, get ip address and additional info
```shell
nslookup <domain name>
dig <domain name>
host <domain name>
```

### mv
change directory name
```shell
mv <old name> <new name>
```

### rm / rmdir
```shell
rm <file name>
rm -r <directory name>
rm -rf <directory name> # remove without confarmation
```

### tail
check log in real time
```shell
tail -f
```
### lsof
list all file opens
```shell
# see what port number nginx listens
lsof -c nginx -P | grep LISTEN
```
check local port
```shell
# checking port 3000
lsof -i -P | grep :3000
com.docke 19748 junueno   43u  IPv6 0x31364f6acdd32089      0t0  TCP *:3000 (LISTEN)
# 19748 is PID, if you want to kill the process run command below
kill 19748
```

### htop
display GUI for tasks, CPU, workers
```shell
# install htop for Mac via homebrew
brew install htop

# Run htop
htop
```

```shell
systemctl # start deamon
gpasswd # manage groups
locate # to get location for files/directories
netstat # to check port
dpkg # control packages
```
