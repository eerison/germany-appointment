Germany appointment
------------------------------------
[![germany appointment][cypress_badge]][cypress_link]
[![looking for an appointment][test_badge]][test_link]
[![License: MIT][licence_badge]][licence_link]

This project help you to make an appointment on [Berlin Foreigners Registration Office][berlin_form_link] (Ausländerbehörde)

##### Usage

To start to use this project you just need to `fork` the project, and you will receive an email.

> Look we aren't finish the appointment yet because this lib is work in progress yet, 
> But if you receive an email from github, it's mean there are an appointment free :)

### Development

Those steps will be helpful if you wish to help the project.

##### Change values inside of `.local.env` with your own data.

```shell script
cp .env .local.env
```

##### install cypress
```shell script
docker-compose run --rm cypress npm install && yarn cy:install
```

##### run cypress test
```shell script
docker-compose run --rm cypress yarn cy:run
```

[cypress_badge]: https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/so3pi8&style=flat&logo=cypress
[cypress_link]: https://dashboard.cypress.io/projects/so3pi8/runs
[test_badge]: https://github.com/eerison/germany-appointment/workflows/Looking%20for%20an%20appointment/badge.svg?branch=master
[test_link]: https://github.com/eerison/germany-appointment/actions?query=workflow%3A%22Looking+for+an+appointment%22+branch%3Amaster
[licence_badge]: https://img.shields.io/badge/License-MIT-yellow.svg
[licence_link]: https://github.com/eerison/germany-appointment/blob/master/LICENSE
[berlin_form_link]: https://formular.berlin.de/xima-forms-29/get/14963116144270000?mandantid=/OTVBerlin_LABO_XIMA/000-01/instantiationTasks.properties