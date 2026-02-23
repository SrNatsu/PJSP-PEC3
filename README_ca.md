# PJP PAC 3

En aquesta PAC es practiquen les tècniques de programació asíncrona a JavaScript: _callbacks_, promeses i _async/await_, així com les diferents combinacions entre elles.

## Competències

En aquesta PAC es desenvolupen les següents competències del Màster:

- [CB10] Que els estudiants tinguin les habilitats d'aprenentatge que els permetin continuar estudiant d'una manera que haurà de ser en gran mesura autodirigida o autònoma.
- [CG2] Resoldre problemes, identificant, analitzant i definint-ne els elements significatius.
- [CE3] Utilitzar de manera adequada els llenguatges de programació i les millors eines de desenvolupament per a l'anàlisi, el disseny i la implementació de llocs i aplicacions web en funció de les necessitats del projecte.
- [CE5] Aplicar de la manera més adequada els patrons d'arquitectura de programari més convenient per a cada problema.

## Objectius

Els objectius concrets d'aquesta PAC són:

- Aprendre a utilitzar JavaScript i les seves característiques bàsiques.
- Contribuir a conèixer a fons el llenguatge JavaScript per poder fer-lo servir en el desenvolupament d'aplicacions Web.
- Utilitzar les tècniques de programació asíncrona que ofereix JavaScript.

## Lliurament de la PAC

Un cop hagis realitzat les activitats pràctiques proposades en aquest enunciat, **el lliurament es realitzarà de forma doble**:

- Hauràs d'enviar els teus canvis a l'apartat de l'aula virtual de la UOC.
- Hauràs d'enviar els teus canvis al repositori de GitHub Classroom.

Recorda que aquest repositori l'has clonat del repositori a GitHub. Quan treballis al teu sistema, tots els canvis els faràs als teus fitxers locals, els quals hauràs d'afegir i _comitejar_ al teu repositori Git. Aquests canvis estaran al teu sistema fins que facis _push_ i els enviïs al repositori a GitHub.

Recorda que has de treballar a la branca _main_ o _master_ (la que es crei per defecte). Pots fer diversos enviaments.

A l'aula virtual trobaràs una _checklist_ que t'ajudarà a repassar tots els passos que has de fer per al lliurament de la teva PAC.

## Puntuació

El fet de treballar amb tests per verificar la funcionalitat del codi us permetrà tenir una idea de la vostra pròpia nota abans del lliurament.

La puntuació dels exercicis pràctics es basa en dos criteris: **Funcionalitat** i **Implementació**. S'espera que els exercicis funcionin correctament (passin els tests) i que la implementació (el codi) tingui una qualitat adequada.

Alguns detalls a tenir en compte:

- Es penalitzarà qualsevol intent de _hardcodejar_ els tests per forçar que passin. Aquesta tècnica consisteix a canviar la implementació perquè retorni únicament el valor esperat pel test (qualsevol altre test fallaria).
- Els tests automàtics estan dissenyats per detectar exercicis erronis o incomplets per a casos concrets. El fet que un test passi no garanteix que l'exercici estigui realitzat correctament, és a dir, que cobreixi tots els casos.
- Un exercici els tests del qual no passen es puntuarà amb un 0 llevat que hi hagi problemes amb els tests.
- A més de passar els tests, el professorat avaluarà el vostre codi en base als següents criteris:
- Llegibilitat, senzillesa i qualitat del codi.
- Coneixements de programació. Per exemple, no utilitzar les estructures de control adequades, com ara utilitzar un bucle per construir una sentència condicional o viceversa.

## Requisits mínims

- Tenir instal·lat Visual Studio Code (o qualsevol altre IDE).
- Coneixements bàsics de Git i GitHub (Activitats 2 i 3 del Repte 1).
- Estudi de la introducció i repàs a JavaScript (Activitat 1 del Repte 2).
- Estudi dels conceptes de JavaScript (Activitats 2 i 3 del Repte 2).
- Estudi de la introducció a l'assincronia en JavaScript (Activitat 1 del Repte 3).
- Estudi dels conceptes d'assincronia de JavaScript (Activitat 2 del Repte 3).

## Activitats del repte - 0,5 punts

Recorda que aquest repte té associades dues activitats d'avaluació que també has de realitzar. En particular, són les activitats 1.2 i 2.2, que trobaràs a l'aula virtual.

## Exercicis pràctics - 9,5 punts

Per realitzar els exercicis pràctics t'has de dirigir a la següent ruta, dins del repositori: `src/pec3/pec3.js`.
En aquest fitxer hauràs d'implementar les funcions que t'indiquem als exercicis que veuràs més avall.

D'altra banda, els tests que et permetran saber si la solució que proposes per als exercicis és correcta són al fitxer `src/pec3/pec3.test.js`.
**No has d'editar aquest fitxer**.
Tingues en compte que els tests són condicions que han de complir les funcions que implementaràs en els exercicis, per la qual cosa et poden servir d'ajuda per corregir-los.

### Preparant l'entorn

Un cop fet **clone** del repositori, has d'instal·lar les dependències del projecte.

```
npm install
```

A continuació, per llançar els tests has d'executar la següent ordre:

```
npm test
```

La instrucció anterior llançarà els tests cada vegada que desis el fitxer `src/pec3/pec3.js`, que és precisament on implementaràs els exercicis d'aquesta PAC.

Tal com t'indiquem a la PAC 1, la primera vegada que executis `npm test` i es llencin els tests, molt possiblement fallaran tots, ja que no hi ha cap exercici implementat. A mesura que vagis treballant en els exercicis i guardis el fitxer, pot ser que algun test llanci algun error. Revisa el missatge d'error que s'imprimeix per conèixer el format i entendre com es notifiquen els errors.

Si tens algun problema amb els tests, no dubtis a preguntar al fòrum "Dudas PAC 3 | Dubtes PAC 3" de l'aula.

## Exercici 1 (2 pts)

En aquest exercici practicarem l'ús de _callbacks_ per gestionar l'asincronisme en JavaScript.

### Conceptes tractats:

- Ús de funcions _callback_ per gestionar operacions asíncrones.
- Manipulació d'arrays i objectes.
- Validació de paràmetres d'entrada.

### Enunciat

Implementa la funció:

```js
function processOrders(orders, callback) { ... }
```

Paràmetres:

- `orders`: un array no nul d'objectes que representen comandes. Cada objecte comanda té la següent estructura:

```js
{
  id: Number,
  status: String, // Pot ser 'pending', 'shipped', 'delivered', o 'cancelled'
}
```

- `callback`: una funció que accepta dos paràmetres:
  - `result`: un objecte que agrupa les comandes pel seu estat. La clau serà l'estat, i el valor serà un array amb els ids de les comandes que tenen aquest estat.
  - `error`: serà `null` si l'operació ha tingut èxit, o una cadena de text `"Invalid orders input"` si l'entrada no és un array vàlid d'objectes amb les propietats `id (Number)` i `status (String)`.

Requisits:

1. La funció ha de validar que el paràmetre `orders` és un array d'objectes que contenen les propietats `id` i `status` amb els tipus adequats.
2. Si la validació falla, la funció ha d'invocar immediatament el callback amb:
   - `result: null`
   - `error: "Invalid orders input"`
3. Si la validació és correcta, la funció ha de:
   - Agrupar les comandes pel seu estat.
   - Generar un objecte on les claus siguin els diferents estats, i els valors siguin arrays amb els ids de les comandes en aquest estat.
   - Invocar el callback amb:
     - `result:` l'objecte generat.
     - `error: null`
4. La funció ha de retornar el valor retornat per l'execució del callback.

Exemple:

```js
const orders = [
  { id: 101, status: "pending" },
  { id: 102, status: "shipped" },
  { id: 103, status: "delivered" },
  { id: 104, status: "pending" },
  { id: 105, status: "shipped" },
];

processOrders(orders, (result, error) => {
  console.log(result);
  console.log(error);
});
```

Sortida esperada:

```js
{
  pending: [101, 104],
  shipped: [102, 105],
  delivered: [103],
}
null
```

## Exercici 2 (2 pts)

En aquest exercici practicarem l'ús de promeses simples i temporitzadors per simular retards en la resposta d'una API.

### Conceptes tractats:

- Gestió asíncrona mitjançant promeses simples.
- Temporitzadors (`setTimeout`).

### Enunciat

Implementa la funció:

```js
function fetchProductStock(productId) { ... }
```

Paràmetres:

- `productId`: un valor de tipus Number, que representa l'identificador únic del producte l'estoc del qual es vol consultar.

La funció haurà de complir les següents condicions:

1. Ha de retornar una promesa.
2. Ha de simular un retard de 300 mil·lisegons utilitzant `setTimeout`.
3. Si `productId` és un número positiu (major que 0) i menor o igual que 5000, la promesa es resoldrà amb un objecte que contingui la següent estructura:

```js
{ productId: ID, stock: STOCK }
```

On:

- `ID` és el valor de productId rebut com a argument.
- `STOCK` és un número aleatori enter entre 0 i 100 (pots utilitzar `Math.floor(Math.random() * 101)`).

4. Si `productId` no està dins el rang permès (major que 0 i menor o igual que 5000), la promesa es rebutjarà amb un error (`Error`) que contingui el missatge:

```
Product id is out of valid range
```

5. Si `productId` no és del tipus correcte (`Number`), la promesa es rebutjarà amb un error (`Error`) que contingui el missatge:

```
Invalid product id
```

Exemple:

```js
fetchProductStock(1234)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

fetchProductStock("abc").catch((error) => {
  console.error(error.message);
});

fetchProductStock(10000).catch((error) => {
  console.error(error.message);
});
```

Sortida esperada:

```js
{ productId: 1234, stock: 42 }  // stock és un número aleatori entre 0 i 100
"Invalid product id"
"Product id is out of valid range"
```

## Exercici 3 (1 pts)

En aquest exercici practicarem l'encadenament de promeses per obtenir dades relacionades de forma asíncrona.

### Conceptes tractats:

- Ús de promeses per gestionar operacions asíncrones.
- Encadenament de promeses.
- Gestió d'errors en promeses.

### Enunciat

Implementa la funció:

```js
function getOrderDetails(fetchUserId, fetchOrders, fetchOrderDetails) { ... }
```

Paràmetres:

- `fetchUserId`: una funció no nul·la que no accepta arguments i retorna una promesa que, en cas d'èxit, es resol amb un valor de tipus `Number` (l'ID de l'usuari). En cas d'error, la promesa es rebutja amb un missatge d'error.
- `fetchOrders`: una funció no nul·la que accepta un argument de tipus `Number` (l'ID d'usuari) i retorna una promesa que, en cas d'èxit, es resol amb un valor de tipus `Array<Number>` (els IDs de les comandes realitzades per aquest usuari). En cas d'error, la promesa es rebutja amb un missatge d'error.
- `fetchOrderDetails`: una funció no nul·la que accepta un argument de tipus `Array<Number>` (els IDs de les comandes) i retorna una promesa que, en cas d'èxit, es resol amb un valor de tipus `Array<Object>` (els detalls de les comandes). En cas d'error, la promesa es rebutja amb un missatge d'error.

Requisits:

1. Ha de retornar una promesa.
2. Ha d'invocar la funció `fetchUserId`.
3. Ha d'invocar la funció `fetchOrders` utilitzant com a argument el resultat de `fetchUserId`.
4. Ha d'invocar la funció `fetchOrderDetails` utilitzant com a argument el resultat de `fetchOrders`.
5. En cas d'èxit, la promesa ha de resoldre's amb el valor retornat per `fetchOrderDetails`.
6. En cas d'error, la promesa ha de rebutjar-se amb un valor de tipus Error i missatge `Error: <errorMessage>`, on <errorMessage> és el missatge d'error capturat.

Exemple:

```js
const fetchUserId = () => Promise.resolve(123);
const fetchOrders = (userId) => Promise.resolve([101, 102, 103]);
const fetchOrderDetails = (orderIds) =>
  Promise.resolve(orderIds.map((id) => ({ id, details: "" })));

getOrderDetails(fetchUserId, fetchOrders, fetchOrderDetails)
  .then((orderDetails) => {
    console.log("Detalls de les comandes:", orderDetails);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

Sortida esperada:

```js
Detalls de les comandes: [
  { id: 101, details: "" },
  { id: 102, details: "" },
  { id: 103, details: "" }
]
// En cas d'error:
"Error: <errorMessage>" // On <errorMessage> és el missatge d'error capturat
```

## Exercici 4 (1,5 pts)

En aquest exercici practicarem l'ús d'async/await per tractar l'asincronisme en JavaScript.

### Conceptes tractats:

- Promeses.
- async/await.
- Blocs try/catch.

### Enunciat

Imagina que estàs desenvolupant la lògica d'una botiga online i necessites una funció genèrica per obtenir dades asíncrones des de diferents fonts de la botiga, com usuaris, productes o comandes.

Implementa la funció:

```js
async function fetchAsyncData(asyncCallback) { ... }
```

Paràmetres:

- `asyncCallback`: una funció que retorna una promesa, que simula una crida a una API de la botiga online (per exemple, recuperar els detalls d'un usuari o el llistat de productes).

Requisits:

1. La funció ha de ser async.
2. Ha de cridar a `asyncCallback()` utilitzant await.
3. La crida ha d'anar dins d'un bloc try/catch.
4. Si la promesa es resol correctament, s'ha de retornar un objecte amb el següent format:

```js
{
  status: "success",
  data: RESULT
}
```

on `RESULT` és el valor resuelto por la promesa.

5. Si la promesa és rebutjada, s'ha de capturar l'error i retornar un objecte amb el següent format:

```js
{
  status: "error",
  message: "<errorMessage>"
}
```

on `<errorMessage>` és el missatge de l'error (`error.message`).

Exemple:

```js
function getCartData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ orderIds: [101, 102] });
    }, 200);
  });
}

fetchAsyncData(getCartData).then((result) => console.log(result));
```

Sortida esperada:

```js
{
  status: "success",
  data: { orderIds: [101, 102] }
}
```

## Exercici 5 (1,5 pts)

En aquest exercici practicarem el processament de múltiples promeses utilitzant async/await.

### Conceptes tractats:

- async/await
- Gestió d'errors amb try/catch
- Iteració i composició de funcions asíncrones

### Enunciat

Implementa la funció:

```js
async function processPendingOrders(fetchPendingOrders, processOrder) { ... }
```

Paràmetres:

- `fetchPendingOrders`: una funció asíncrona que no rep arguments i retorna un array d'identificadors de comandes pendents (`orderIds`). Si es produeix un error, llançarà una excepció amb un missatge descriptiu.
- `processOrder`: una funció asíncrona que pren com a argument un identificador de comanda (`orderId`) i retorna un objecte amb informació del processament de la comanda. Si es produeix un error durant la seva execució, llançarà una excepció amb un missatge descriptiu.

Requisits:

1. `processPendingOrders` ha de ser una funció async.
2. S'haurà d'utilitzar await per obtenir les comandes pendents utilitzant `fetchPendingOrders()`.
3. A continuació, s'ha de processar cada comanda amb `processOrder(orderId)`.
4. La funció ha de retornar un array amb els resultats de totes les comandes processades.
5. Si es produeix un error en obtenir les comandes o en processar-ne una, s'haurà de llançar un error de tipus Error amb el següent format:

```
Error in order <orderId>: <errorMessage>
```

on `<orderId>` és l'identificador de la comanda fallida i `<errorMessage>` és el missatge d'error rebut.

Exemple:

```js
async function fetchPendingOrders() {
  return [101, 102, 103];
}

async function processOrder(orderId) {
  if (orderId === 102) throw new Error("Payment declined");
  return { orderId, status: "processed" };
}

await processPendingOrders(fetchPendingOrders, processOrder);
```

Sortida esperada:

```js
// Llança un error quan falla el processament d'una comanda
"Error: Error in order 102: Payment declined"[
  // Si totes les comandes es processessin amb èxit, retornaria:
  ({ orderId: 101, status: "processed" },
  { orderId: 102, status: "processed" },
  { orderId: 103, status: "processed" })
];
```

## Exercici 6 (1,5 pts)

En aquest exercici practicarem l'ús d'async/await com a alternativa a les promeses encadenades.

### Conceptes tractats:

- async/await
- Gestió de promeses
- Refactorització de codi asíncron

### Enunciat

Implementa la funció:

```js
async function getOrderDetailsAsync(fetchUserId, fetchOrders, fetchOrderDetails) { ... }
```

Paràmetres:

- Els mateixos que a l'exercici 3 (`fetchUserId`, `fetchOrders`, `fetchOrderDetails`).

Requisits:

1. La funció ha d'implementar la mateixa funcionalitat que la de l'exercici 3 (`getOrderDetails`), però utilitzant la sintaxi async/await en lloc d'encadenar promeses.
2. Ha de gestionar els errors adequadament utilitzant blocs try/catch.

Exemple:

```js
const fetchUserId = () => Promise.resolve(123);
const fetchOrders = (userId) => Promise.resolve([101, 102, 103]);
const fetchOrderDetails = (orderIds) =>
  Promise.resolve(orderIds.map((id) => ({ id, details: "" })));

getOrderDetailsAsync(fetchUserId, fetchOrders, fetchOrderDetails)
  .then((orderDetails) => {
    console.log("Detalls de les comandes:", orderDetails);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

Sortida esperada:

```js
Detalls de les comandes: [
  { id: 101, details: "" },
  { id: 102, details: "" },
  { id: 103, details: "" }
]
// En cas d'error:
"Error: ERROR" // On ERROR és el missatge d'error capturat
```

## Exercici 7 - Opcional (1 pts)

En aquest exercici practicarem la gestió de processos en segon pla.

### Conceptes tractats:

- async/await
- Programació asíncrona i control d'estat
- Execució periòdica
- Gestió d'errors
- Encapsulament d'estat i tasques

### Enunciat

Volem simular el comportament d'un sistema de logística que gestiona els enviaments d'una botiga online. Aquests enviaments es processen en segon pla, i han de poder ser consultats en qualsevol moment.

Implementa la funció:

```js
function createShippingManager(fetchNextBatch, shipOrder) { ... }
```

Paràmetres:

- `fetchNextBatch`: una funció asíncrona que no rep arguments i retorna un array d'objectes Order preparats per ser enviats, o null si ja no queden més comandes.
- `shipOrder`: una funció asíncrona que rep un objecte Order i retorna un objecte `ShippingResult` si l'enviament s'ha realitzat correctament. En cas d'error, llança una excepció amb un missatge d'error.

Requisits:

La funció `createShippingManager` ha de retornar un objecte amb tres mètodes:

```js
{
  start(), stop(), getStatus();
}
```

1. El mètode `start()` inicia un procés en segon pla que:
   - Cada 200ms executa `fetchNextBatch()`.
   - Si el resultat no és null, itera sobre les comandes obtingudes i les envia una a una amb `shipOrder(order)`.
   - Per cada comanda, es registrarà el seu estat: "pending" → "shipping" → "shipped" o "failed".
   - Si el resultat de `fetchNextBatch()` és null, el procés s'atura.
2. El mètode `stop()` atura inmediatamente el procés en segon pla, cancel·lant qualsevol operació futura programada.
3. El mètode `getStatus()` retorna un array d'objectes, cadascun representant una comanda amb els següents atributs:
   - `orderId`: ID de la comanda.
   - `status`: "pending", "shipping", "shipped" o "failed".
   - `result`: objecte de tipus ShippingResult, si l'enviament va ser exitós.
   - `error`: string amb el missatge d'error si va fallar.

Exemple:

```js
const fetchNextBatch = async () => [
  { id: Math.floor(Math.random() * 9) + 100 },
];
const shipOrder = async (order) => {
  // Introduïm una causa d'error arbitrària
  if (order.id === 102) throw new Error("Shipping label error");
  return { orderId: order.id, status: "success" };
};

const manager = createShippingManager(fetchNextBatch, shipOrder);

manager.start();

// Aturar i consultar les comandes passats 2 segons
setTimeout(() => {
  manager.stop();
  console.table(manager.getStatus());
}, 2000);
```

Sortida esperada:

```js
┌─────────┬──────────┬───────────┬─────────┬────────────────────────┐
│ (index) │ orderId  │ status    │ result  │ error                  │
├─────────┼──────────┼───────────┼─────────┼────────────────────────┤
│ 0       │ 101      │ 'shipped' │ {...}   │ null                   │
│ 1       │ 102      │ 'failed'  │ null    │ 'Shipping label error' │
└─────────┴──────────┴───────────┴─────────┴────────────────────────┘
```
