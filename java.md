### install
```shell
java --version
```

```shell
brew install java
```

if an error occur..
> For the system Java wrappers to find this JDK, symlink it with
> sudo ln -sfn $(brew --prefix)/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```shell
sudo ln -sfn $(brew --prefix)/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

```shell
java --version
```