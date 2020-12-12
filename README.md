# DelilahResto-Proy3Acamica
Proyecto Backend manejo ordenes para restaurante. Acamica DWFS 35

Proyecto que se enfoca en la creacion de una REST-API que permite procesos CRUD creacion, consulta, actualizacion y borrado 
sobre una estructura de datos que usuario puede consumir

<h1>Herramientas usadas</h1>

* NodeJS
* SQL MariaDB
* NMP: express, sequelize, jsonwebtoken, nodemon, body-parser, 
* Postman // testing endpoints
* Swagger // documentacion API

<h1>Documentacion</h1>

* https://editor.swagger.io/
* archivo docsAPI_Resto.yaml

<h1>Instalacion</h1>

1. Clonar proyecto desde el repositorio: https://github.com/JoeRincon/DelilahResto-Proy3Acamica.git

2. Instalar dependencias
  * Ver archivo package.json
  
3. Crear BD; proceso divido en dos archivos
  * Creacion de las estructura de tablas crea_basedatos.sql
  * Insercion de datos a las tablas insert_basedatos.sql
  * Abrir XAMMP con puerto 3306 y activar MySQL
  * Ejecutar los archivos desde shell con el comando "source nombreArchivo"
  
4. Iniciar servidor ejecutando archivo: index.js o ejecutar comando "npm run start"

5. Coleccion de Postman, para validar checklist del proyecto API
https://web.postman.co/workspace/My-Workspace~4555ca3a-47ff-4422-8617-bced41cbd902/request/12705593-ba3e8846-d81b-4abd-8c38-c794e6af4e3a