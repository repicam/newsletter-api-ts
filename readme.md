# Newsletter-api-ts

### API que simula el backend de una newsletter
Este proyecto simula el backend de una newsletter:

 - **API REST**: Endpoints para añadir emails con datos de usuarios y poderse dar de baja, programar newsletter y que se envíe automáticamente a la lista de usuarios, etc
 - **CRON**: Crearemos un schedule que comprobará si hay alguna newsletter para enviar y en caso afirmativo, la enviará
 - **NODEMAILER**: Gestor de envío de correos
 - **JOI**: Validador de datos para las peticiones

### Que necesitaremos
Para este proyecto vamos a instalar los siguiente módulos:

 - **express**: Modulo que usaremos para crear nuestra API REST
 - @types/express (devDependency)
 - **mongoose**: Modulo que usaremos para la conexión a BBDD (MongoDB)
 - **node-cron**: Modulo que usaremos para crear las automatizaciones y tareas a realizar cada X tiempo
 - @types/node-cron (devDependency)
 - **nodemailer**: Modulo que usaremos para enviar el correo
 - @types/nodemailer (devDependency)
 - **typescript**: Modulo que usaremos para nuestro proyecto en Typescript
 - **joi**: Modulo que usaremos para validar los datos de nuestras peticiones
 - dotenv (devDependency): Modulo que usaremos para las variables de entorno

También necesitaremos un fichero .env y añadiremos las siguientes propiedades:

 - **DB_URI**: Donde indicaremos la URI de la base de datos, ya sea local o en la nube (mongo atlas)
 - **PORT** (opcional): Donde indicaremos el puerto al que queremos que apunte nuestra aplicacion

Las rutas que vamos a tener (sobre la URI /api/v1) son las siguientes:

 - **/users** (POST): Ruta en la que podremos crear usuarios
    
        {
          "name": "your name",
          "email": "youremail@domain.com
        }

 - **/users/:id** (DELETE): Ruta en la que podremos dar de baja usuarios

 - **/users/:id** (PATCH): Ruta en la que podremos modificar preferencias de usuarios (quitarse de la lista)
    
        {
          "unsuscribe": true
        }

 - **/cron/** (POST): Ruta en la que podremos iniciar o parar un cron
    
        {
          "action": "stop",
          "cron": "monthly"
        }