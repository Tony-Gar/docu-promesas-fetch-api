---
sidebar_position: 2
---

# Promesas en cadena (Promise chaining)

## Concepto y Definición

**Promesas en cadena** se refieren al encadenamiento de varias promesas de manera secuencial, donde cada promesa espera a que la anterior se resuelva antes de continuar su ejecución. Este enfoque evita los llamados **callback hell** (infierno de los callbacks) y permite que el código sea más limpio y fácil de leer.

Cada promesa devuelve una nueva promesa, lo que permite encadenar varias operaciones asincrónicas y manejarlas de manera ordenada.

## Sintaxis Básica

El encadenamiento de promesas se puede hacer utilizando los métodos `.then()` y `.catch()`, donde cada `.then()` toma el resultado de la promesa anterior y devuelve una nueva promesa.

```js
promise1
  .then(result1 => {
    // Operación con result1
    return result2;
  })
  .then(result2 => {
    // Operación con result2
    return result3;
  })
  .catch(error => {
    // Manejo de errores
    console.error(error);
  });
 ``` 
## Ejemplo Simple
Imaginemos que tienes tres funciones asincrónicas que necesitas ejecutar secuencialmente. Aquí te mostramos un ejemplo:

```js
Copiar código
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Primera tarea completada"), 1000);
  });
}

function secondTask(message) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message + " -> Segunda tarea completada"), 1000);
  });
}

function thirdTask(message) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(message + " -> Tercera tarea completada"), 1000);
  });
}

firstTask()
  .then((message) => secondTask(message))
  .then((message) => thirdTask(message))
  .then((finalMessage) => {
    console.log(finalMessage); // "Tercera tarea completada"
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  ```
#### En este ejemplo:

firstTask() se ejecuta primero.
Cuando se resuelve, pasa el resultado a secondTask().
Luego, secondTask() pasa su resultado a thirdTask().
Si alguna promesa falla, el error es manejado por el bloque .catch()