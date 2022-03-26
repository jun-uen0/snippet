delete images unused
```shell
docker rmi $(docker images --filter "dangling=true" -q)
```