Make appointment of germany embassy
------------------------------------
### Install
Change values inside of `.local.env` with your own data.

```shell script
cp .env .local.env
```

install cypress
```shell script
docker-compose run --rm cypress npm install && node_modules/.bin/cypress install
```

run cypress test
```shell script
docker-compose run --rm cypress node_modules/.bin/cypress run
```