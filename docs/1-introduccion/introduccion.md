# Introducción a Promesas y Fetch API

JavaScript es un lenguaje asíncrono que permite manejar operaciones que no se completan de inmediato, como la obtención de datos desde una API. Para gestionar estas operaciones, contamos con dos herramientas esenciales: **las Promesas** y la **Fetch API**.

## 1. Promesas (Promises)

Una **Promesa** es un objeto en JavaScript que representa la eventual finalización (o fallo) de una operación asíncrona. Permiten ejecutar código sin bloquear la ejecución principal, haciendo posible trabajar con resultados futuros de manera eficiente.

### Sintaxis básica:
```javascript
let promise = new Promise((resolve, reject) => {
    // Operación asincrónica
    if (/* éxito */) {
        resolve('Resultado');
    } else {
        reject('Error');
    }
});

promise
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
