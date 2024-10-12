---
sidebar_position: 3
---
# Promesas.all
### `Promise.all`: Ejecución de Múltiples Promesas en Paralelo

## Concepto y Definición

`Promise.all` es un método que permite ejecutar múltiples promesas en paralelo. Recibe un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas en el array se resuelven. Si alguna de las promesas falla (se rechaza), la promesa devuelta por `Promise.all` también se rechazará.

Es útil cuando necesitas realizar varias operaciones asincrónicas de forma simultánea y quieres esperar hasta que todas se completen antes de proceder.

## Sintaxis

```js
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // results es un array con los resultados de cada promesa
  })
  .catch((error) => {
    // Si alguna promesa falla, el bloque catch se ejecuta
  });
  ```
## Ejemplo Simple
Supongamos que tenemos tres operaciones asincrónicas que queremos ejecutar en paralelo:

```js
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 1 completada"), 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 2 completada"), 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 3 completada"), 1500);
  });
}

Promise.all([task1(), task2(), task3()])
  .then((results) => {
    console.log(results); // ["Tarea 1 completada", "Tarea 2 completada", "Tarea 3 completada"]
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  ```
#### En este ejemplo:

Las tres tareas se ejecutan en paralelo.
Promise.all espera que todas las promesas se resuelvan y luego imprime los resultados como un array.
Si alguna de las tareas falla, el bloque .catch() se ejecutará.
Consideraciones Importantes
Orden de los resultados: Los resultados que se pasan a la función .then() se devuelven en el mismo orden en que fueron pasadas las promesas a Promise.all(), sin importar el orden en que las promesas se resuelvan.
Fallo de una promesa: Si alguna de las promesas se rechaza, Promise.all se rechaza inmediatamente y el error se maneja en el bloque .catch().
Promise.all es muy útil cuando quieres ejecutar varias operaciones de manera simultánea y necesitas esperar hasta que todas se completen para continuar con el siguiente paso.