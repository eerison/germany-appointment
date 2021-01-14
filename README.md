Make appointment of germany embassy
------------------------------------
[![germany appointment](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/so3pi8&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/so3pi8/runs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Install
Change values inside of `.local.env` with your own data.

```shell script
cp .env .local.env
```

install cypress
```shell script
docker-compose run --rm cypress npm install && yarn cy:install
```

run cypress test
```shell script
docker-compose run --rm cypress yarn cy:run
```