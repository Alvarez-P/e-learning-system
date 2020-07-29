# E-Learning System

Sistema de e-learning usando Express

## Getting Started :arrow_forward:

Estas instrucciones le proporcionarán una copia del proyecto en funcionamiento en su máquina local para fines de desarrollo y prueba. Consulte la implementación para obtener notas sobre cómo implementar el proyecto en un sistema en vivo.

### Prerequisites :clipboard:

Para usar el presente proyecto es necesario tener instalado:

- [Node y Npm](https://nodejs.org/es/)
- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)
- [Sequelize-CLI](https://www.npmjs.com/package/sequelize-cli)

### Installing :arrow_down:

Para instalar las librerias propias del proyecto ejecute:

```
npm i
```

## Deployment :package:

Para iniciar el proyecto es necesario tener una instancia de Postgres. Para ello ingrese su configuracion en un archivo `config.json` con un formato similar al archivo `src/db/config/config.example.json` e ingrese las mismas en el archivo `docker-compose.yml`, ejecute este último con:

```sh
docker-compose up -d
```

Cree la base de datos con el comando:
```sh
sequelize db:create
```

Agregue modelos con el comando:
```sh
sequelize model:generate --name User --attributes firstName:string,lastName:string
```

Ejecute la migracion con:
```sh
sequelize db:migrate
```
## Built With :hammer_and_wrench:
- [Node](https://nodejs.org/es/)
    * [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)

## Contributing :family_man_man_boy:

Please read [CONTRIBUTING.md](https://www.aaaimx.org/cod) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning :triangular_flag_on_post:

- [v0.1.0](https://github.com/alvarez98/e-learning-system/tree/v0.1.0)

## Future work :rocket:

## Contributors :family_man_man_boy:

- **Esteban Alvarez** - _Initial work_ - [@alvarez98](https://github.com/alvarez98)

## Credits :star:

- **A template to make good README.md** - _Base template_ - [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

## References :link:

1. [Sequelize-Cli](https://github.com/sequelize/cli)
2. [Sequelize](https://sequelize.org/master/index.html)
3. [Express](https://expressjs.com/)

## License :page_facing_up:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Made with ❤️ by [Esteban Alvarez](https://github.com/alvarez98) 
