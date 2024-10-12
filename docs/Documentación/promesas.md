---
sidebar_position: 1
---
# Promesas (Promises)

Las **promesas** son un objeto en JavaScript que representan la finalización o el fracaso de una operación asincrónica. Permiten manejar operaciones asíncronas, como llamadas a APIs o lecturas de archivos, de una manera más clara y manejable que el uso de callbacks.

## ¿Qué es una Promesa?

Una **promesa** es un objeto que puede estar en uno de tres estados:

- **Pending (Pendiente)**: La operación asincrónica aún no ha terminado.
- **Resolved (Resuelta)**: La operación ha sido completada exitosamente.
- **Rejected (Rechazada)**: La operación ha fallado, generalmente debido a un error.

## Sintaxis Básica

Una promesa se crea utilizando el constructor `Promise`, que recibe una función llamada **executor** con dos parámetros: `resolve` y `reject`. El valor que se pasa a `resolve` es el resultado exitoso, y lo que se pasa a `reject` es el error.

```js
const myPromise = new Promise((resolve, reject) => {
  // Simulamos una operación asincrónica
  let success = true; // Cambia esto a false para probar la promesa rechazada

  if (success) {
    resolve("Operación completada exitosamente!");
  } else {
    reject("Hubo un error en la operación.");
  }
});

myPromise
  .then((message) => {
    console.log("Éxito:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  ```

## Manejo de Promesas
Una vez que se crea una promesa, se puede manejar su resultado usando los métodos .then(), .catch() y .finally().

.then(): Se ejecuta cuando la promesa es resuelta exitosamente.
.catch(): Se ejecuta cuando la promesa es rechazada.
.finally(): Se ejecuta independientemente de si la promesa fue resuelta o rechazada.

## Ejemplo Básico
```js
Copiar código
myPromise
  .then((message) => {
    console.log("Éxito:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Esto siempre se ejecuta.");
  });
  ```
### En este ejemplo:

Si la promesa se resuelve, el mensaje de éxito será mostrado.
Si la promesa se rechaza, el error será mostrado.
El bloque finally se ejecutará siempre, sin importar el resultado de la promesa.