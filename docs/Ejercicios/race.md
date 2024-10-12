---
sidebar_position: 3
---
# Ejercicios sobre Promise.race

## 1. Ejercicio Básico: Obtener la primera promesa que se resuelva
**Enunciado:**  
Crea dos promesas que se resuelvan en diferentes tiempos. Usa `Promise.race()` para obtener el valor de la primera promesa que se resuelva.

**Código:**
```js
const promesa1 = new Promise((resolve) => setTimeout(() => resolve('Primera promesa'), 3000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve('Segunda promesa'), 1000));

Promise.race([promesa1, promesa2])
  .then((resultado) => {
    console.log(resultado); // Output: Segunda promesa
  }); 
  ```
**Explicación:**
En este caso, Promise.race() devuelve la primera promesa que se resuelve. La segunda promesa se resuelve en 1 segundo, mientras que la primera lo hace en 3 segundos. Así que el resultado será "Segunda promesa".

## 2. Ejercicio Básico: Usar Promise.race con un retraso
**Enunciado:**
Crea tres promesas que se resuelvan con un retraso diferente y usa Promise.race() para mostrar el resultado de la primera que se resuelva.

**Código:**

```js
Copiar código
const promesa1 = new Promise((resolve) => setTimeout(() => resolve('Promesa 1'), 5000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve('Promesa 2'), 3000));
const promesa3 = new Promise((resolve) => setTimeout(() => resolve('Promesa 3'), 1000));

Promise.race([promesa1, promesa2, promesa3])
  .then((resultado) => {
    console.log(resultado); // Output: Promesa 3
  });
  ```
**Explicación:**
Promise.race() devuelve la primera promesa que se resuelva. En este caso, la tercera promesa se resuelve en 1 segundo, por lo que ese es el valor que se muestra.

## 3. Ejercicio Intermedio: Usar Promise.race con un rechazo
**Enunciado:**
Crea varias promesas, una de las cuales se rechaza, y usa Promise.race() para obtener el primer resultado, sea resuelto o rechazado.

**Código:**

```js
Copiar código
const promesa1 = new Promise((resolve) => setTimeout(() => resolve('Primera promesa'), 2000));
const promesa2 = new Promise((_, reject) => setTimeout(() => reject('Segunda promesa falló'), 1000));

Promise.race([promesa1, promesa2])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error); // Output: Segunda promesa falló
  });
  ```
**Explicación:**
Promise.race() devolverá la primera promesa que se resuelva o rechace. En este caso, la segunda promesa se rechaza primero, por lo que se captura el error con catch().

## 4. Ejercicio Intermedio: Timeout con Promise.race
**Enunciado:**
Crea una promesa con un tiempo de espera (timeout) y otra promesa que se resuelve correctamente. Usa Promise.race() para hacer un timeout si la promesa tarda más de 2 segundos.

**Código:**

```js
Copiar código
const promesaConTimeout = new Promise((resolve, reject) => {
  setTimeout(() => reject('Tiempo agotado'), 2000);
});

const promesaLarga = new Promise((resolve) => {
  setTimeout(() => resolve('Promesa completada'), 3000);
});

Promise.race([promesaConTimeout, promesaLarga])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error); // Output: Tiempo agotado
  });
  ```
**Explicación:**
Promise.race() devuelve la promesa que se resuelva o rechace primero. En este caso, el tiempo de espera vence antes de que la promesa larga se resuelva, por lo que se captura el error de "Tiempo agotado".

## 5. Ejercicio Avanzado: Cancelar operaciones largas usando Promise.race
**Enunciado:**
Simula un escenario en el que un usuario intenta realizar dos operaciones asíncronas y puedes cancelarlas si tardan demasiado usando Promise.race().

**Código:**

```js
Copiar código
const cancelarOperacion = new Promise((_, reject) => {
  setTimeout(() => reject('Operación cancelada'), 3000);
});

const operacionLarga = new Promise((resolve) => {
  setTimeout(() => resolve('Operación completada'), 5000);
});

Promise.race([cancelarOperacion, operacionLarga])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error); // Output: Operación cancelada
  });
  ```
**Explicación:**
En este caso, Promise.race() permite cancelar la operación larga si tarda más de 3 segundos. La promesa cancelarOperacion se resuelve primero, causando que la operación larga sea "cancelada".

## 6. Ejercicio Avanzado: Timeout de múltiples promesas
**Enunciado:**
Crea varias promesas que simulan operaciones largas, y usa Promise.race() para definir un tiempo máximo de espera. Si el tiempo de espera se excede, rechaza con un error.

**Código:**

```js
Copiar código
const operacion1 = new Promise((resolve) => setTimeout(() => resolve('Operación 1 completa'), 4000));
const operacion2 = new Promise((resolve) => setTimeout(() => resolve('Operación 2 completa'), 6000));
const operacion3 = new Promise((resolve) => setTimeout(() => resolve('Operación 3 completa'), 3000));

const timeout = new Promise((_, reject) => setTimeout(() => reject('Excedido el tiempo de espera'), 3500));

Promise.race([operacion1, operacion2, operacion3, timeout])
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error); // Output: Excedido el tiempo de espera
  });
  ```
**Explicación:**
El timeout se usa para establecer un límite de 3.5 segundos. Si alguna de las promesas no se resuelve dentro de este límite, el Promise.race() rechaza con el error "Excedido el tiempo de espera".

## 7. Ejercicio Intermedio: Primer resultado válido con Promise.race
**Enunciado:**
Crea tres promesas que representan solicitudes de datos. Una de ellas se rechaza, y las otras dos se resuelven. Usa Promise.race() para obtener el primer valor válido.

**Código:**

```js
Copiar código
const solicitud1 = new Promise((resolve, reject) => setTimeout(() => reject('Error en la solicitud 1'), 2000));
const solicitud2 = new Promise((resolve) => setTimeout(() => resolve('Datos recibidos de solicitud 2'), 1000));
const solicitud3 = new Promise((resolve) => setTimeout(() => resolve('Datos recibidos de solicitud 3'), 1500));

Promise.race([solicitud1, solicitud2, solicitud3])
  .then((resultado) => {
    console.log(resultado); // Output: Datos recibidos de solicitud 2
  })
  .catch((error) => {
    console.error(error);
  });
  ```
**Explicación:**
Promise.race() retorna el primer resultado válido (resuelto o rechazado). En este caso, la segunda solicitud es la primera que se resuelve, por lo que su resultado se muestra.

## 8. Ejercicio Avanzado: Combinar Promise.race con operaciones asíncronas
**Enunciado:**
Crea un escenario donde múltiples operaciones asíncronas se inician y solo te interesa la primera que termine.

**Código:**

```js
Copiar código
const operacionLarga = new Promise((resolve) => setTimeout(() => resolve('Larga operación completada'), 7000));
const operacionCorta = new Promise((resolve) => setTimeout(() => resolve('Corta operación completada'), 3000));

Promise.race([operacionLarga, operacionCorta])
  .then((resultado) => {
    console.log(resultado); // Output: Corta operación completada
  });
  ```
**Explicación:**
En este caso, Promise.race() se utiliza para obtener el resultado de la operación que finalice primero. La operación corta se resuelve antes, por lo que su resultado se muestra.