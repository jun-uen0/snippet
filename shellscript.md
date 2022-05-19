- Copy file with specific data size
```shell
dd if=source_file of=target_file bs=1M count=100

# dd = Linux command data difinition (link: https://askubuntu.com/questions/645689/what-does-the-command-name-dd-stand-for)
# if = source file
# of = target file
# bs = data size
# count = number of reading source file
```
