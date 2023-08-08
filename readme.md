# Newsletter-api-ts

### API que simula el backend de una newsletter
Este proyecto simula el backend de una newsletter:

 - **API REST**: Endpoints para añadir emails con datos de usuarios y poderse dar de baja, programar newsletter y que se envíe automáticamente a la lista de usuarios, etc
 - **CRON**: Crearemos un schedule que comprobará si hay alguna newsletter para enviar y en caso afirmativo, la enviará
 - **NODEMAILER**: Gestor de envío de correos

### Que necesitaremos
Para este proyecto vamos a instalar los siguiente módulos:

 - **express**: Modulo que usaremos para crear nuestra API REST
 - **mongoose**: Modulo que usaremos para la conexión a BBDD (MongoDB)
 - **node-cron**: Modulo que usaremos para crear las automatizaciones y tareas a realizar cada X tiempo
 - **nodemailer**: Modulo que usaremos para enviar el correo
 - **typescript**: Modulo que usaremos para nuestro proyecto en Typescript