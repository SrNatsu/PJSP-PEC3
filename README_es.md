# PJP PEC 3

En esta PEC se practican las técnicas de programación asíncrona en JavaScript: _callbacks_, promesas y _async/await_, así como las diferentes combinaciones entre ellas.

## Competencias

En esta PEC se desarrollan las siguientes competencias del Máster:

* [CB10] Que los estudiantes posean las habilidades de aprendizaje que les permitan continuar estudiando de una manera que tendrá que ser en gran medida autodirigida o autónoma.
* [CG2] Resolver problemas, identificando, analizando y definiendo sus elementos significativos.
* [CE3] Utilizar de manera adecuada los lenguajes de programación y las mejores herramientas de desarrollo para el análisis, el diseño y la implementación de lugares y aplicaciones web en función de las necesidades del proyecto.
* [CE5] Aplicar de la manera más adecuada los patrones de arquitectura de software más conveniente para cada problema.

## Objetivos

Los objetivos concretos de esta PEC son:

* Aprender a utilizar JavaScript y sus características básicas.
* Contribuir a conocer a fondo el lenguaje JavaScript para poder usarlo en el desarrollo de aplicaciones Web.
* Usar las técnicas de programación asíncrona que JavaScript ofrece.

## Entrega de la PEC

Una vez hayas realizado las actividades prácticas propuestas en este enunciado, **la entrega se realizará de forma doble**:

- Deberás enviar tus cambios al apartado del aula virtual de la UOC.
- Deberás enviar tus cambios al repositorio de GitHub Classroom.
 
Recuerda que este repositorio lo has clonado del repositorio en GitHub. Cuando trabajes en tu sistema, todos los cambios los harás en tus ficheros locales, los cuales tendrás que añadir y _comitear_ a tu repositorio Git. Estos cambios estarán en tu sistema hasta que hagas _push_ y los envíes al repositorio en GitHub.

Recuerda que debes trabajar en la rama _main_ o _master_ (la que se cree por defecto). Puedes hacer varios envíos.

En el aula virtual encontrarás una _checklist_ que te ayudará a repasar todos los pasos que debes hacer para la entrega de tu PEC.

## Puntuación

El hecho de trabajar con tests para verificar la funcionalidad del código os permitirá tener una idea de vuestra propia nota antes de la entrega. 

La puntuación de los ejercicios prácticos se basa en dos criterios: **Funcionalidad** e **Implementación**. Se espera que los ejercicios funcionen correctamente (pasen los tests) y que la implementación (el código) tenga una calidad adecuada. 

Algunos detalles a tener en cuenta:

- Se penalizará cualquier intento de _hardcodear_ los tests para forzar que pasen. Esta técnica consiste en cambiar la implementación para que devuelva únicamente el valor esperado por el test (cualquier otro test fallaría).
- Los tests automáticos están diseñados para detectar ejercicios erróneos o incompletos para casos concretos. El hecho de que un test pase no garantiza que el ejercicio esté realizado correctamente, es decir, que cubra todos los casos.
- Un ejercicio cuyos tests no pasan se puntuará con un 0 salvo que existan problemas con el test.
- Además de pasar los tests, el profesorado evaluará vuestro código en base a los siguientes criterios:
  - Legibilidad, sencillez y calidad del código.
  - Conocimientos de programación. Por ejemplo, no utilizar las estructuras de control adecuadas, como utilizar un bucle para construir una sentencia condicional o viceversa.

## Requisitos mínimos

- Tener instalado Visual Studio Code.
- Conocimientos básicos de Git y GitHub (Actividades 2 y 3 del Reto 1).
- Estudio de la introducción y repaso a JavaScript (Actividad 1 del Reto 2).
- Estudio de los conceptos de JavaScript (Actividades 2 y 3 del Reto 2).
- Estudio de la introducción a la asincronía en JavaScript (Actividad 1 del Reto 3).
- Estudio de los conceptos de asincronía de JavaScript (Actividad 2 del Reto 3).

## Actividades del reto (0,5ps)

Recuerda que este reto tiene asociadas dos actividades de evaluación que también deberás realizar. En particular, son las actividades 1.2 y 2.2, que encontrarás en el aula virtual. 

## Ejercicios prácticos (9,5p)

Para realizar los ejercicios prácticos debes dirigirte a la siguiente ruta, dentro del repositorio: `src/pec3/pec3.js`.
En este fichero deberás implementar las funciones que te indicamos en los ejercicios que verás más abajo.

Por otro lado, los tests que te permitirán saber si la solución que propones para los ejercicios es correcta están en el fichero `src/pec3/pec3.test.js`.
**No debes editar este fichero**.
Ten en cuenta que los tests son condiciones que deben cumplir las funciones que implementarás en los ejercicios, por lo que pueden servirte de ayuda para corregirlos.

### Preparando el entorno

Una vez hecho **clone** del repositorio, debes instalar las dependencias del proyecto.

```
npm install
```

A continuación, para lanzar los tests debes ejecutar el siguiente comando:

```
npm test
```

La instrucción anterior lanzará los tests cada vez que guardes el fichero `src/pec3/pec3.js`, que es precisamente donde implementarás los ejercicios de esta PEC.

Tal y como te indicamos en la PEC 1, la primera vez que ejecutes `npm test` y se lancen los tests, muy posiblemente fallarán todos, ya que no hay ningún ejercicio implementado. Conforme vayas trabajando en los ejercicios y guardes el fichero, puede que algún test lance algún error. Revisa el mensaje de error que se imprime para conocer su formato y entender cómo se notifican los errores.

Si tienes algún problema con los tests, no dudes en preguntar en el foro "Dudas PEC 3 | Dubtes PAC 3" del aula.

## Ejercicio 1 (2 pts)

En este ejercicio practicaremos el uso de _callbacks_ para gestionar la asincronía en JavaScript.

### Conceptos tratados:
* Uso de funciones _callback_ para manejar operaciones asíncronas.
* Manipulación de arrays y objetos.
* Validación de parámetros de entrada.

### Enunciado

Implementa la función:

```js
function processOrders(orders, callback) { ... }
```

Parámetros:
* `orders`: un array no nulo de objetos que representan pedidos. Cada objeto pedido tiene la siguiente estructura:

```js
{
  id: Number,
  status: String, // Puede ser 'pending', 'shipped', 'delivered', o 'cancelled'
}
```

* `callback`: una función que acepta dos parámetros:
  * `result`: un objeto que agrupa los pedidos por su estado. La clave será el estado, y el valor será un array con los ids de los pedidos que tienen ese estado.
  * `error`: será `null` si la operación ha tenido éxito, o una cadena de texto `"Invalid orders input"` si la entrada no es un array válido de objetos con las propiedades `id (Number)` y `status (String)`.

Requisitos:
1. La función debe validar que el parámetro `orders` es un array de objetos que contienen las propiedades `id` y `status` con los tipos adecuados.
2. Si la validación falla, la función debe invocar inmediatamente el callback con:
   * `result: null`
   * `error: "Invalid orders input"`
3. Si la validación es correcta, la función debe:
   * Agrupar los pedidos por su estado.
   * Generar un objeto donde las claves sean los distintos estados, y los valores sean arrays con los ids de los pedidos en ese estado.
   * Invocar el callback con:
     * `result:` el objeto generado.
     * `error: null`
4. La función debe retornar el valor devuelto por la ejecución de callback.

Ejemplo:

```js
const orders = [
  { id: 101, status: 'pending' },
  { id: 102, status: 'shipped' },
  { id: 103, status: 'delivered' },
  { id: 104, status: 'pending' },
  { id: 105, status: 'shipped' },
];

processOrders(orders, (result, error) => {
  console.log(result);
  console.log(error);
});
```

Salida esperada:

```js
{
  pending: [101, 104],
  shipped: [102, 105],
  delivered: [103],
}
null
```

## Ejercicio 2 (2 pts)

En este ejercicio practicaremos el uso de promesas simples y temporizadores para simular retrasos en la respuesta de una API.

### Conceptos tratados:
* Gestión asíncrona mediante promesas simples.
* Temporizadores (`setTimeout`).

### Enunciado

Implementa la función:

```js
function fetchProductStock(productId) { ... }
```

Parámetros:
* `productId`: un valor de tipo Number, que representa el identificador único del producto cuyo stock se desea consultar.

La función deberá cumplir las siguientes condiciones:
1. Debe devolver una promesa.
2. Debe simular un retraso de 300 milisegundos utilizando `setTimeout`.
3. Si `productId` es un número positivo (mayor que 0) y menor o igual que 5000, la promesa se resolverá con un objeto que contenga la siguiente estructura:

```js
{ productId: ID, stock: STOCK }
```

Donde:
* `ID` es el valor de productId recibido como argumento.
* `STOCK` es un número aleatorio entero entre 0 y 100 (puedes usar `Math.floor(Math.random() * 101)`).

4. Si `productId` no está en el rango permitido (mayor que 0 y menor o igual que 5000), la promesa se rechazará con un error (`Error`) que contenga el mensaje:

```
Product id is out of valid range
```

5. Si `productId` no es del tipo correcto (`Number`), la promesa se rechazará con un error (`Error`) que contenga el mensaje:

```
Invalid product id
```

Ejemplo:

```js
fetchProductStock(1234)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error.message);
  });

fetchProductStock('abc')
  .catch(error => {
    console.error(error.message);
  });

fetchProductStock(10000)
  .catch(error => {
    console.error(error.message);
  });
```

Salida esperada:

```js
{ productId: 1234, stock: 42 }  // stock es un número aleatorio entre 0 y 100
"Invalid product id"
"Product id is out of valid range"
```

## Ejercicio 3 (1 pts)

En este ejercicio practicaremos el encadenamiento de promesas para obtener datos relacionados de forma asíncrona.

### Conceptos tratados:
* Uso de promesas para manejar operaciones asíncronas.
* Encadenamiento de promesas.
* Manejo de errores en promesas.

### Enunciado

Implementa la función:

```js
function getOrderDetails(fetchUserId, fetchOrders, fetchOrderDetails) { ... }
```

Parámetros:

* `fetchUserId`: una función no nula que no acepta argumentos y devuelve una promesa que, en caso de éxito, se resuelve con un valor de tipo `Number` (el ID del usuario). En caso de error, la promesa se rechaza con un mensaje de error.
* `fetchOrders`: una función no nula que acepta un argumento de tipo `Number` (el ID de usuario) y devuelve una promesa que, en caso de éxito, se resuelve con un valor de tipo `Array<Number>` (los IDs de los pedidos realizados por ese usuario). En caso de error, la promesa se rechaza con un mensaje de error.
* `fetchOrderDetails`: una función no nula que acepta un argumento de tipo `Array<Number>` (los IDs de los pedidos) y devuelve una promesa que, en caso de éxito, se resuelve con un valor de tipo `Array<Object>` (los detalles de los pedidos). En caso de error, la promesa se rechaza con un mensaje de error.

Requisitos:

1. Debe devolver una promesa.
2. Debe invocar la función `fetchUserId`.
3. Debe invocar la función `fetchOrders` usando como argumento el resultado de `fetchUserId`.
4. Debe invocar la función `fetchOrderDetails` usando como argumento el resultado de `fetchOrders`.
5. En caso de éxito, la promesa debe resolverse con el valor devuelto por `fetchOrderDetails`.
6. En caso de error, la promesa debe rechazarse con un valor de tipo Error y mensaje `Error: <errorMessage>`, donde <errorMessage> es el mensaje de error capturado.

Ejemplo:

```js
const fetchUserId = () => Promise.resolve(123);
const fetchOrders = (userId) => Promise.resolve([101, 102, 103]);
const fetchOrderDetails = (orderIds) => Promise.resolve(orderIds.map((id) => ({ id, details: "" })));

getOrderDetails(fetchUserId, fetchOrders, fetchOrderDetails)
  .then((orderDetails) => {
    console.log('Detalles de los pedidos:', orderDetails);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

Salida esperada:

```js
Detalles de los pedidos: [
  { id: 101, details: "" },
  { id: 102, details: "" },
  { id: 103, details: "" }
]
// En caso de error:
"Error: <errorMessage>" // Donde <errorMessage> es el mensaje de error capturado
```

## Ejercicio 4 (1,5 pts)

En este ejercicio practicaremos el uso de async/await para tratar la asincronía en JavaScript.

### Conceptos tratados:
* Promesas.
* async/await.
* Bloques try/catch.

### Enunciado

Imagina que estás desarrollando la lógica de una tienda online y necesitas una función genérica para obtener datos asíncronos desde distintas fuentes de la tienda, como usuarios, productos o pedidos.

Implementa la función:

```js
async function fetchAsyncData(asyncCallback) { ... }
```

Parámetros:
* `asyncCallback`: una función que retorna una promesa, que simula una llamada a una API de la tienda online (por ejemplo, recuperar los detalles de un usuario o el listado de productos).

Requisitos:
1. La función debe ser async.
2. Debe llamar a `asyncCallback()` usando await.
3. La llamada debe ir dentro de un bloque try/catch.
4. Si la promesa se resuelve correctamente, se debe retornar un objeto con el siguiente formato:

```js
{
  status: "success",
  data: RESULT
}
```

donde `RESULT` es el valor resuelto por la promesa.

5. Si la promesa es rechazada, se debe capturar el error y retornar un objeto con el siguiente formato:

```js
{
  status: "error",
  message: "<errorMessage>"
}
```

donde `<errorMessage>` es el mensaje del error (`error.message`).

Ejemplo:

```js
function getCartData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderIds: [101, 102] });
    }, 200);
  });
}

fetchAsyncData(getCartData)
  .then(result => console.log(result));
```

Salida esperada:

```js
{ 
  status: "success", 
  data: { orderIds: [101, 102] } 
}
```

## Ejercicio 5 (1,5 pts)

En este ejercicio practicaremos el procesamiento múltiples promesas usando async/await.

### Conceptos tratados:
* async/await
* Manejo de errores con try/catch
* Iteración y composición de funciones asíncronas

### Enunciado

Implementa la función:

```js
async function processPendingOrders(fetchPendingOrders, processOrder) { ... }
```

Parámetros:
* `fetchPendingOrders`: una función asíncrona que no recibe argumentos y retorna un array de identificadores de pedidos pendientes (`orderIds`). Si ocurre un error, lanzará una excepción con un mensaje descriptivo.
* `processOrder`: una función asíncrona que toma como argumento un identificador de pedido (`orderId`) y devuelve un objeto con información del procesamiento del pedido. Si ocurre un error durante su ejecución, lanzará una excepción con un mensaje descriptivo.

Requisitos:
1. `processPendingOrders` debe ser una función async.
2. Se deberá usar await para obtener los pedidos pendientes usando `fetchPendingOrders()`.
3. A continuación, se debe procesar cada pedido con `processOrder(orderId)`.
4. La función debe devolver un array con los resultados de todos los pedidos procesados.
5. Si ocurre un error al obtener los pedidos o al procesar uno de ellos, se deberá lanzar un error de tipo Error con el siguiente formato:

```
Error in order <orderId>: <errorMessage>
```

donde `<orderId>` es el identificador del pedido fallido y `<errorMessage>` es el mensaje de error recibido.

Ejemplo:

```js
async function fetchPendingOrders() {
  return [101, 102, 103];
}

async function processOrder(orderId) {
  if (orderId === 102) throw new Error('Payment declined');
  return { orderId, status: 'processed' };
}

await processPendingOrders(fetchPendingOrders, processOrder);
```

Salida esperada:

```js
// Lanza un error cuando falla el procesamiento de un pedido
"Error: Error in order 102: Payment declined"

// Si todos los pedidos se procesaran con éxito, devolvería:
[
  { orderId: 101, status: 'processed' },
  { orderId: 102, status: 'processed' },
  { orderId: 103, status: 'processed' }
]
```

## Ejercicio 6 (1,5 pts)

En este ejercicio practicaremos el uso de async/await como alternativa a las promesas encadenadas.

### Conceptos tratados:
* async/await
* Manejo de promesas
* Refactorización de código asíncrono

### Enunciado

Implementa la función:

```js
async function getOrderDetailsAsync(fetchUserId, fetchOrders, fetchOrderDetails) { ... }
```

Parámetros:
* Los mismos que en el ejercicio 3 (`fetchUserId`, `fetchOrders`, `fetchOrderDetails`).

Requisitos:
1. La función debe implementar la misma funcionalidad que la del ejercicio 3 (`getOrderDetails`), pero utilizando la sintaxis async/await en lugar de encadenar promesas.
2. Debe manejar los errores adecuadamente usando bloques try/catch.

Ejemplo:

```js
const fetchUserId = () => Promise.resolve(123);
const fetchOrders = (userId) => Promise.resolve([101, 102, 103]);
const fetchOrderDetails = (orderIds) => Promise.resolve(orderIds.map((id) => ({ id, details: "" })));

getOrderDetailsAsync(fetchUserId, fetchOrders, fetchOrderDetails)
  .then((orderDetails) => {
    console.log('Detalles de los pedidos:', orderDetails);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

Salida esperada:

```js
Detalles de los pedidos: [
  { id: 101, details: "" },
  { id: 102, details: "" },
  { id: 103, details: "" }
]
// En caso de error:
"Error: ERROR" // Donde ERROR es el mensaje de error capturado
```

## Ejercicio 7 - Opcional (1 pts)

En este ejercicio practicaremos la gestión de procesos en segundo plano.

### Conceptos tratados:
* async/await
* Programación asíncrona y control de estado
* Ejecución periódica
* Gestión de errores
* Encapsulamiento de estado y tareas

### Enunciado

Queremos simular el comportamiento de un sistema de logística que gestiona los envíos de una tienda online. Estos envíos se procesan en segundo plano, y deben poder ser consultados en cualquier momento.

Implementa la función:

```js
function createShippingManager(fetchNextBatch, shipOrder) { ... }
```

Parámetros:
* `fetchNextBatch`: una función asíncrona que no recibe argumentos y devuelve un array de objetos Order listos para ser enviados, o null si ya no quedan más pedidos.
* `shipOrder`: una función asíncrona que recibe un objeto Order y devuelve un objeto `ShippingResult` si el envío se ha realizado correctamente. En caso de error, lanza una excepción con un mensaje de error.

Requisitos:

La función `createShippingManager` debe devolver un objeto con tres métodos:

```js
{
  start(),
  stop(),
  getStatus()
}
```

1. El método `start()` inicia un proceso en segundo plano que:
   * Cada 200ms ejecuta `fetchNextBatch()`.
   * Si el resultado no es null, itera sobre los pedidos obtenidos y los envía uno a uno con `shipOrder(order)`.
   * Por cada pedido, se registrará su estado: "pending" → "shipping" → "shipped" o "failed".
   * Si el resultado de `fetchNextBatch()` es null, el proceso se detiene.
2. El método `stop()` detiene inmediatamente el proceso en segundo plano, cancelando cualquier operación futura programada.
3. El método `getStatus()` devuelve un array de objetos, cada uno representando un pedido con los siguientes atributos:
   * `orderId`: ID del pedido.
   * `status`: "pending", "shipping", "shipped" o "failed".
   * `result`: objeto de tipo ShippingResult, si el envío fue exitoso.
   * `error`: string con el mensaje de error si falló.

Ejemplo:

```js
const fetchNextBatch = async () => [
  { id: Math.floor(Math.random() * 9) + 100 }
];
const shipOrder = async (order) => {
  // Introducimos una causa de error arbitraria
  if (order.id === 102) throw new Error('Shipping label error');
  return { orderId: order.id, status: 'success' };
};

const manager = createShippingManager(fetchNextBatch, shipOrder);

manager.start();

// Parar y consultar los pedidos pasados 2 segundos
setTimeout(() => {
  manager.stop();
  console.table(manager.getStatus());
}, 2000);
```

Salida esperada:

```js
┌─────────┬──────────┬───────────┬─────────┬────────────────────────┐
│ (index) │ orderId  │ status    │ result  │ error                  │
├─────────┼──────────┼───────────┼─────────┼────────────────────────┤
│ 0       │ 101      │ 'shipped' │ {...}   │ null                   │
│ 1       │ 102      │ 'failed'  │ null    │ 'Shipping label error' │
└─────────┴──────────┴───────────┴─────────┴────────────────────────┘
```



