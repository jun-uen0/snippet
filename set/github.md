# Connecting to github by SSH

At root, make directory "ssh"
and move to .ssh
```bash
mkdir .ssh
cd .ssh
```

Generate keys
```bash
ssh-keygen -t rsa
```

Show private key and copy it
```bash
cat id_rsa_github
# The key must begin with "ssh-rsa"
```
Add new key at https://github.com/settings/ssh/new   
Then you can clone your repository