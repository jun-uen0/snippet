### delete images unused
```shell
docker rmi $(docker images --filter "dangling=true" -q)
docker image prune -a

# delete all unused image that have been stopped more than 24h
docker image prune -a --filter "until=24h"
```
### delete container
```shell
docker container prune
```

### build docker image without cache
```shell
docker-compose build --no-cache
```
