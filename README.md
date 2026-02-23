# 💻 PEC 3 - Programación en JavaScript para Programadores

Este repositorio contiene la solución a la **PEC 3** de la asignatura **Programación en JavaScript para Programadores** de la UOC. 

El objetivo principal de esta práctica es dominar las diferentes técnicas de programación asíncrona que ofrece JavaScript, manejando correctamente el flujo de ejecución, el consumo de datos y el control de errores.

## 🧠 Conceptos aplicados en la práctica

La PEC consta de 7 ejercicios donde se han puesto en práctica los siguientes enfoques de asincronía:

1. **Callbacks (`processOrders`):** Creación de funciones de orden superior que delegan el resultado y manejo de errores a funciones callback pasadas por parámetro.
2. **Promesas y Temporizadores (`fetchProductStock`):** Creación manual de instancias de `Promise` gestionando las resoluciones (`resolve`) y rechazos (`reject`), combinadas con simulaciones de latencia (`setTimeout`).
3. **Encadenamiento de Promesas (`getOrderDetails`):** Resolución de la asincronía y el flujo de datos dependiente usando la sintaxis `.then()` y el manejo centralizado de errores con `.catch()`.
4. **Async / Await (`fetchAsyncData`):** Consumo de promesas utilizando un enfoque de código más lineal e imperativo mediante `async/await` y bloques `try/catch` para el control de excepciones.
5. **Procesamiento de múltiples promesas (`processPendingOrders`):** Iteración de llamadas asíncronas para el procesamiento secuencial de una colección de datos (pedidos) evaluando los posibles errores individuales.
6. **Refactorización a Async/Await (`getOrderDetailsAsync`):** Transformación de código de encadenamiento de promesas complejo al paradigma más moderno y legible de ES8.
7. **Procesos en segundo plano (`createShippingManager`):** *Ejercicio avanzado.* Implementación de funciones cíclicas (polling) asíncronas, aplicando el patrón de encapsulamiento mediante cierres (*closures*) para proteger y consultar el estado interno del ciclo de vida de los envíos.

## 🚀 Instalación y ejecución de tests

Para revisar y ejecutar el código fuente en un entorno local, asegúrate de tener [Node.js](https://nodejs.org/es) instalado en tu sistema.

1. **Instalación de las dependencias del proyecto:**
   ```bash
   npm install
   ```
   (También se puede lanzar la instalación con el alias ```npm i```)

2. **Ejecuta la batería de pruebas (Jest):**
   ```bash
   npm run test
   ```
   (También se pueden lanzar los tests con el alias ```npm t```)