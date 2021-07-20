# Red social - Thoughts
Red social similar a Twitter o Reddit desarrollada con NodeJs, Ejs, Express y Sequelize.

## ¿Cómo lo ejecuto en local?
Necesitarás tener instalado `Node.js` y tener acceso a una terminal para seguir los siguientes pasos:
<br />
``npm i`` => instalar las dependencias en la carpeta raíz
<br />

## Base de datos
Además deberás contar con algún paquete de software para levantar un servidor con base de datos `SQL` o `MariaDB`. Por ejemplo: `XAMPP`, `WAMP`, `LAMP` o alguno similar.<br />
Luego de iniciar los módulos de `Apache` y `MySQL` abrir el navegador y, en la barra de direcciones, escribir `localhost/phpmyadmin/`.<br />
Una vez en la página, crear una base de datos llamada `red-social-pensamientos` - `utf8_general_ci`.
<br />

## Variables de entorno
Crear un archivo `.env` dentro de la carpeta raíz con la siguiente estructura:
<br />
`PORT=` Seguido del número del puerto donde quieres ejecutar la aplicación
<br />

## Migraciones e inserciones en la base de datos
Abrir la consola e instalar Sequelize CLI con el comando
<br />
``npm i -g sequelize-cli`` => lo instalamos de forma global.
<br />
Una vez instalado nos posicionamos con la consola en la carpeta raíz del proyecto y ejecutamos los siguientes comandos:
<br />
``sequelize db:migrate:all`` => realiza las migraciones de las tablas<br />
``sequelize db:seed:all`` => realiza inserciones en la base de datos
<br />

:warning: Ejecutar el siguiente paso **SÓLO** si ya has completado los pasos `Base de datos`, `Variables de entorno` y `Migraciones e inserciones en la base de datos` :warning:<br />
<br />
`npm run dev` => levantar el entorno de desarrollo
<br />

### Créditos
Proyecto enteramente diseñado y desarrollado por [Octavio Caba](https://octaviocaba.github.io/portafolio/).
