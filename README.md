# DelilahResto-Proy3Acamica
Proyecto Backend manejo ordenes para restaurante. Acamica DWFS 35

Proyecto que se enfoca en la creacion de una REST-API que permite procesos CRUD creacion, consulta, actualizacion y borrado 
sobre una estructura de datos que usuario puede consumir

<h1>Herramientas usadas</h1>

* NodeJS
* SQL MariaDB
* npm: express, sequelize, jsonwebtoken, nodemon, body-parser, 
* Postman // testing endpoints
* Swagger // documentacion API

<h1>Documentacion</h1>

* https://editor.swagger.io/
* archivo docsAPI_Resto.yaml

<h1>Instalacion</h1>

1. Clonar proyecto desde el repositorio: https://github.com/JoeRincon/DelilahRestoJR.git

2. Instalar dependencias
  * Ver archivo package.json
  
3. Crear BD; 
  * Creacion de las estructura de tablas CREATE_DATABASE.sql
  * Abrir XAMMP con puerto 3306 y activar MySQL
  * Ejecutar los archivos desde shell con el comando "source path_archivo.sql"
  
4. Iniciar servidor ejecutando archivo: index.js o ejecutar comando "npm run start"

5. Coleccion de Postman, para validar checklist del proyecto API

https://www.getpostman.com/collections/a32e5de66317371673ad

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="a32e5de66317371673ad"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>