---
sidebar_position: 4
---
# Promesas.race




## Concepto y Definición

`Promise.race` es un método que acepta un array de promesas y devuelve una nueva promesa. Esta promesa se resuelve o rechaza tan pronto como la **primera** de las promesas en el array se resuelva o rechace. Es útil cuando solo te interesa el resultado de la primera promesa que se complete, independientemente de si las demás promesas se resuelven o no.

Es importante tener en cuenta que `Promise.race` no espera a que todas las promesas se resuelvan, solo a la primera que termine.

## Sintaxis

```js
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    // La primera promesa en completarse proporciona el resultado
  })
  .catch((error) => {
    // Si alguna promesa se rechaza, el error se maneja aquí
  });
  ```
## Ejemplo Simple
Imaginemos que tienes tres promesas que tienen tiempos de espera distintos:

```js
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 1 completada"), 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 2 completada"), 500);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Tarea 3 completada"), 1500);
  });
}

Promise.race([task1(), task2(), task3()])
  .then((result) => {
    console.log(result); // "Tarea 2 completada" (la más rápida)
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  ```
#### En este ejemplo:

task1, task2 y task3 son promesas que se ejecutan en paralelo.
Promise.race devuelve la promesa que se resuelve o rechaza primero, en este caso la que se resuelve más rápido, que es task2() después de 500 ms.
Consideraciones Importantes
Primera en completarse: Promise.race se resuelve con la primera promesa que se complete (ya sea resuelta o rechazada), sin esperar a que las demás promesas terminen.
Error en la primera: Si la primera promesa que se complete es rechazada, Promise.race también se rechazará con ese error.

Promise.race es útil cuando solo te interesa la primera respuesta, como en casos de temporizadores o cuando esperas múltiples respuestas, pero solo te importa la primera que llegue.