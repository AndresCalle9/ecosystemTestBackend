Esta es una API construida en Node ycon Express Fwk e implementa una base de datos con MongoDB. 

Descripción de la Arquitectura implementada
Esta API está construida bajo una arquitectura limpia (Clean Architecture), donde a su vez permite su desacoplamiento, aumenta su cobertura en prueba y la hace mantenible mentiante el tiempo. La organización de carpetas o "capas" se encuentra de la siguiente manera:

- Configurations: Contiene las clases las siguientes subcarpetas:
database: Contiene la configuración necesaria para conectarse a la base de datos (Mongo DB).
environments: Contiene los archivos de configuración para su respecto ambiente (siempre se recomienda que no estén versionados)
middleware: Contiene los middleware necesarios implementado a nivel de controladores, su mayoría de casos para la validación de datos. 
routes: Contiene el enrutamiendo API REST para los diferentes puntos de acceso que tiene la aplicación, aquí mismo se configuran los middleware que serán utilizados bien sea de manera global como específica para ciertas rutas.
server.ts: Contiene la configuración a nivel del servidor de Express para el correcto funcionamiento del api, aquí se configuran diferentes características como: cors, se enlaza todo el enrutamiento de la aplicación, se inicia el proceso de conexión a base de datos, implementación de middlewares globales y levantamiento o puesta en escucha del servidor en determinado puerto, etc.
- Entities: Contiene las clases necesarias para el funcionamiento del negocio y la definición de los modelos que se almacenarán en base de datos, esto mediante el paquete mongoose
- Repositories: Son los encargados del acceso hacia la capa de datos, en este caso, hacia MongoDb.
- Services: Aquí se implementa toda la lógica de negocio requerida, adicional es donde las pruebas se centrarán sin depender de las fuentes de datos haciendo el uso de respectivos mocks.
- Controllers: Se encuentran los puntos de acceso encargados de recibir, delegar funciones y retornar una respectiva respuesta al cliente.

Instrucciones de ejecución
Requisito: Tener instalado docker y node js en la máquina.
1. Clonar el repositorio.
2. Situarse en la carpeta raíz y ejecutar npm install para la instalación de dependencias.
3. Situarse en la carpeta raíz y ejecutar el comando npm run dev
4. Abrir en el navegador http://localhost:{DefaultPort}/api. DefaultPort: 5000
5. Aplicación lista para su uso! Para esto se proporciona un front básico en: XXXXXXX. De igual manera, puede usarse en cualquier programa de peticiones HTTP.


NOTAS:
1. Se recomienda primero usar el recurso /user/create para creación de un usuario 

Autor
Andrés Calle Uribe.
