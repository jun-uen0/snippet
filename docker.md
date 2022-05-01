### delete images unused
```shell
docker rmi $(docker images --filter "dangling=true" -q)
```
### build docker image without cache
```shell
docker-compose build --no-cache 
```
