### delete images unused
```shell
docker rmi $(docker images --filter "dangling=true" -q)
docker image prune -a

# delete all unused image that have been stopped more than 24h
docker image prune -a --filter "until=24h"
```
### delete all container
```shell
docker container prune
```
### delete all Volume
```shell
docker volume prune
```
### delete all item in entire docker system (images,containers,volumes)
```shell
docker system prune
```


### build docker image without cache
```shell
docker-compose build --no-cache
```
