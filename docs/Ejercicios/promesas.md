---
sidebar_position: 0
---
# Ejercicios sobre Promesas en JavaScript

## 1. Ejercicio Básico: Crear una promesa simple que resuelva un valor numérico
**Enunciado:**  
Crea una promesa que se resuelva con el número `42`.

**Código:**
```js
const promesa = new Promise((resolve, reject) => {
  resolve(42);
});

promesa.then((valor) => {
  console.log(valor); // Output: 42
});
```
### Explicación:
Aquí estamos creando una promesa que se resuelve con el valor 42 utilizando la función resolve.
La promesa se maneja con el método then(), que recibe la función que se ejecutará cuando la promesa se resuelva.
El resultado será 42 en la consola.

## 2. Ejercicio Básico: Crear una promesa que se rechace con un error

**Enunciado:** 
Crea una promesa que se rechace con el mensaje de error "Algo salió mal".

**Código:**

```js
const promesa = new Promise((resolve, reject) => {
  reject('Algo salió mal');
});

promesa.catch((error) => {
  console.log(error); // Output: Algo salió mal
});
```
**Explicación:**
En este caso, la promesa se rechaza utilizando la función reject.
El método catch() maneja los errores que ocurren en la promesa y los imprime en la consola.
La consola mostrará "Algo salió mal".

## 3. Ejercicio Intermedio: Cadena de promesas que resuelvan en orden
Enunciado:
Encadena tres promesas, cada una resolviendo un valor distinto, de manera secuencial.

**Código:**

```js

const promesa1 = new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});

const promesa2 = (valor) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor + 2), 1000);
  });
};

const promesa3 = (valor) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor + 3), 1000);
  });
};

promesa1
  .then(promesa2)
  .then(promesa3)
  .then((resultado) => {
    console.log(resultado); // Output: 6
  });
  ```

**Explicación:**

promesa1 se resuelve con 1 después de un segundo.
promesa2 se encadena con promesa1 y resuelve el valor 3 (1 + 2) después de otro segundo.
promesa3 se encadena con promesa2 y resuelve el valor 6 (3 + 3) después de un segundo más.
El resultado es 6 después de tres segundos.

## 4. Ejercicio Intermedio: Usar Promise.all() para ejecutar varias promesas en paralelo

**Enunciado:**
Crea tres promesas que se ejecuten en paralelo y espera a que todas se resuelvan usando Promise.all().

**Código:**

```js
Copiar código
const promesa1 = new Promise((resolve) => {
  setTimeout(() => resolve('Primera promesa'), 1000);
});

const promesa2 = new Promise((resolve) => {
  setTimeout(() => resolve('Segunda promesa'), 1500);
});

const promesa3 = new Promise((resolve) => {
  setTimeout(() => resolve('Tercera promesa'), 2000);
});

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados); // Output: ['Primera promesa', 'Segunda promesa', 'Tercera promesa']
  });
  ```

**Explicación:**
Promise.all() acepta un array de promesas y espera a que todas se resuelvan.
Cuando todas las promesas se resuelven, el método then() recibe un array con los resultados de cada promesa en el mismo orden en que fueron declaradas.
El resultado es un array con los mensajes de las tres promesas.

## 5. Ejercicio Avanzado: Usar Promise.race() para obtener la primera promesa que se resuelva

**Enunciado:**
Crea varias promesas y usa Promise.race() para que se resuelva la primera que termine.

**Código:**

```js
Copiar código
const promesa1 = new Promise((resolve) => {
  setTimeout(() => resolve('Primera promesa'), 3000);
});

const promesa2 = new Promise((resolve) => {
  setTimeout(() => resolve('Segunda promesa'), 1000);
});

const promesa3 = new Promise((resolve) => {
  setTimeout(() => resolve('Tercera promesa'), 2000);
});

Promise.race([promesa1, promesa2, promesa3])
  .then((resultado) => {
    console.log(resultado); // Output: 'Segunda promesa'
  });
```
**Explicación:**
Promise.race() devuelve la primera promesa que se resuelva, sin esperar a que las demás finalicen.
En este caso, la segunda promesa es la primera que se resuelve, por lo que el resultado es "Segunda promesa".

## 6. Ejercicio Avanzado: Promesa con temporizador (setTimeout)
**Enunciado:**
Crea una promesa que se resuelva después de 2 segundos.

**Código:**

```js
Copiar código
const promesa = new Promise((resolve) => {
  setTimeout(() => resolve('¡Hola, mundo!'), 2000);
});

promesa.then((mensaje) => {
  console.log(mensaje); // Output: ¡Hola, mundo!
});
```
Explicación:
En este caso, la promesa se resuelve después de 2 segundos usando setTimeout.
El método then() maneja el resultado de la promesa después de que se haya resuelto.

## 7. Ejercicio Intermedio: Reintentar una promesa que falla usando un contador

**Enunciado:**
Simula una promesa que a veces falla y reintenta hasta 3 veces antes de dar un error definitivo.

**Código:**

```js
Copiar código
function simuladorDePromesa(intentos) {
  return new Promise((resolve, reject) => {
    const exito = Math.random() > 0.5;
    if (exito) {
      resolve('Promesa exitosa');
    } else {
      reject('Error en la promesa');
    }
  });
}

function intentarHastaExito(intentos) {
  return new Promise((resolve, reject) => {
    function intentar(i) {
      simuladorDePromesa(i)
        .then(resolve)
        .catch((error) => {
          if (i < intentos) {
            console.log(`Intento ${i} fallido, reintentando...`);
            intentar(i + 1);
          } else {
            reject('No se logró éxito tras varios intentos');
          }
        });
    }
    intentar(1);
  });
}

intentarHastaExito(3)
  .then(console.log)
  .catch(console.error);
```
**Explicación:**
simuladorDePromesa simula una promesa que tiene un 50% de probabilidades de fallar.
intentarHastaExito intenta resolver la promesa hasta 3 veces antes de rechazarla.
Utiliza recursión para intentar la promesa hasta alcanzar el número máximo de intentos.

## 8. Ejercicio Avanzado: Uso de finally() para ejecutar código después de una promesa

**Enunciado:**
Ejecuta un bloque de código tanto si la promesa se resuelve como si se rechaza, usando finally().

**Código:**

```js
Copiar código
const promesa = new Promise((resolve, reject) => {
  const exito = Math.random() > 0.5;
  if (exito) {
    resolve('¡Éxito!');
  } else {
    reject('¡Falló!');
  }
});

promesa
  .then((resultado) => {
    console.log(resultado); // Output: ¡Éxito! o ¡Falló!
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Esto siempre se ejecutará, independientemente del resultado');
  });
```
**Explicación:**
El método finally() se ejecuta después de que la promesa se haya resuelto o rechazado, sin importar el resultado.
Esto es útil para ejecutar código de limpieza o finalización (como cerrar conexiones o mostrar mensajes).