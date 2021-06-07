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

Rutas y estructura:
1) http://localhost:5000/api/user/login. Realizar el login, ruta tipo POST. Deben enviarse los siquientes datos:

{
	"dni":"123456789",
	"password":"123456"
}
Estos son los datos otorgados para el usuario de prueba

PD: si previamente se usa la ruta para crear el usuario, los datos de envió deben ser cambiado.

2) http://localhost:5000/api/create. Ruta utilizada para crear un nuevo usuario, ruta tipo POST. Deben enviarse lo siguientes datos:

{
	"dni":"",
	"name":"",
	"password":""
}

3) http://localhost:5000/api/accounts/:key. Routa para obtener las cuentas de un usario, ruta tipo GET. KEY: hace referencia al DNI del usuario logeado. en el caso de prueba 1037620268

Con lo anterior la ruta queda: http://localhost:5000/api/user/accounts/1037620268

4) http://localhost:5000/api/accounts/transactions/:key/:dni. Routa para obtener las transacciones de una cuenta determinada de un usuario determinado, ruta tipo GET. Key, hace referencia al id único de la cuenta seleccionada, se recomienta usar: 60bb9b0e4c573e38eb9395bf. Adicionalmente DNI, hace referencia al documento del usuario logeado, en el caso del ejemplo 1037620268.

Con lo anterior la ruta queda: http://localhost:5000/api/user/accounts/transactions/60bb9b0e4c573e38eb9395bf/1037620268

5) http://localhost:5000/api/accounts/transaction/:key/:dni/:acc. Routa para obtener los detalles de una transacción determinada, de un usuario determinado y de una cuenta determinada, ruta tipo GET. Key hace referencia a el id único de una transacción, para el ejemplo se recomienda: 60bb9b5c4c573e38eb9395c0. De igual manera ACC, hace referencia al id único de la cuenta seleccionada, se recomienta usar: 60bb9b0e4c573e38eb9395bf. Adicionalmente DNI, hace referencia al documento del usuario logeado, en el caso del ejemplo 1037620268.

Con lo anterior la ruta queda: http://localhost:5000/api/user/accounts/transaction/60bb9b5c4c573e38eb9395c0/1037620268/60bb9b0e4c573e38eb9395bf

6) http://localhost:5000/api/accounts/transaction/mean/:key/:dni. Esta es la ruta utilizada para obtener el promedio de transacciones de una cuenta en un periodo dado. Routa tipo POST. KEY: hace referencia a el id único de una cuenta determinada en este caso 60bb9b0e4c573e38eb9395bf, mientras que DNI: hace referencia al documento de identidad de un usuario logeado en etse caso 1037620268.

Con lo anterior la ruta queda: http://localhost:5000/api/user/accounts/transaction/mean/60bb9b0e4c573e38eb9395bf/1037620268

Adicionalmente, debe enviarse información como la siguiente:

{
	"initial":"2021/06/01",
	"end":"2021/06/08"
}

NOTAS:
1. Se recomienda primero usar el recurso /user/create para creación de un usuario. Sin embargo, la información bancaria estará vacia.

ESTRUCTURA DE DATOS MONGO DB Y DATOS PARA EJEMPLOS:

{
    "Products": [],
    "Accounts": [{
        "id": "60bb9b0e4c573e38eb9395bf",
        "amount": 1577896,
        "currency": "COP",
        "transactions": [{
            "id": "60bb9b5c4c573e38eb9395c0",
            "amount": 245789,
            "date": {
                "$date": "2021-06-03T05:00:00.000Z"
            },
            "state": true,
            "currency": "COP",
            "type": "In"
        }, {
            "id": "60bb9c1c4c573e38eb9395c1",
            "amount": 57896,
            "date": {
                "$date": "2021-06-04T05:00:00.000Z"
            },
            "state": true,
            "currency": "Cop",
            "type": "Out"
        }, {
            "id": "60bb9c6f4c573e38eb9395c2",
            "amount": 47852,
            "date": {
                "$date": "2021-06-07T05:00:00.000Z"
            },
            "state": false,
            "currency": "COP",
            "type": "Out"
        }, {
            "id": "60bb9cd74c573e38eb9395c3",
            "amount": 87963,
            "date": {
                "$date": "2021-06-07T05:00:00.000Z"
            },
            "state": true,
            "currency": "COP",
            "type": "In"
        }]
    }, {
        "id": "60bb9dfe4c573e38eb9395c4",
        "amount": 57896,
        "currency": "USD",
        "transactions": [{
            "id": "60bb9e7b4c573e38eb9395c5",
            "amount": 200,
            "date": {
                "$date": "2021-06-01T05:00:00.000Z"
            },
            "state": true,
            "currency": "USD",
            "type": "In"
        }, {
            "id": "60bb9ec74c573e38eb9395c6",
            "amount": 50,
            "date": {
                "$date": "2021-06-05T05:00:00.000Z"
            },
            "state": true,
            "currency": "USD",
            "type": "In"
        }]
    }],
    "Name": "Andrés Alfonso Calle Uribe",
    "Dni": "1037620268",
    "Password": "123456",
    "__v": 0
}

Autor
Andrés Calle Uribe.
