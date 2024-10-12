---
sidebar_position: 1
---
# Ejercicios sobre Promesas en Cadena (Promise Chaining)

## 1. Ejercicio Básico: Encadenar dos promesas

**Enunciado:**  
Encadena dos promesas que resuelvan de manera secuencial. La primera promesa devuelve el número 10, y la segunda le suma 5.

**Código:**
```js
const promesa = new Promise((resolve) => {
  resolve(10);
});

promesa
  .then((valor) => valor + 5)
  .then((nuevoValor) => {
    console.log(nuevoValor); // Output: 15
  });
  ```
**Explicación:**
Primero, la primera promesa se resuelve con el valor 10. Luego, se encadena una segunda promesa con el método then(), que suma 5 al valor.
El resultado es 15 en la consola.

## 2. Ejercicio Básico: Cadena de promesas con valores diferentes
**Enunciado:**
Encadena tres promesas que resuelvan valores diferentes en cada paso. La primera devuelve el número 1, la segunda suma 3, y la tercera suma 2.

**Código:**

```js
Copiar código
new Promise((resolve) => resolve(1))
  .then((valor) => valor + 3)
  .then((nuevoValor) => nuevoValor + 2)
  .then((resultado) => {
    console.log(resultado); // Output: 6
  });
  ```
**Explicación:**
Cada then() encadena una promesa que resuelve un valor sumado al anterior.
El resultado final es 6 tras pasar por las tres promesas.

## 3. Ejercicio Intermedio: Encadenar promesas con un retraso
**Enunciado:**
Encadena tres promesas con un setTimeout() de 1 segundo entre cada una. La primera resuelve el número 2, la segunda le suma 4, y la tercera le suma 6.

**Código:**

```js
Copiar código
new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000);
})
  .then((valor) => {
    return new Promise((resolve) => setTimeout(() => resolve(valor + 4), 1000));
  })
  .then((nuevoValor) => {
    return new Promise((resolve) => setTimeout(() => resolve(nuevoValor + 6), 1000));
  })
  .then((resultado) => {
    console.log(resultado); // Output: 12
  });
  ```
**Explicación:**
Cada promesa espera 1 segundo utilizando setTimeout() y resuelve un valor que se encadena al siguiente paso.
El resultado final es 12 después de tres segundos.

## 4. Ejercicio Intermedio: Encadenar promesas con condiciones 

**Enunciado:**
Encadena dos promesas. La primera debe resolver un número aleatorio entre 1 y 10. La segunda promesa sumará 5 si el número es mayor a 5, y restará 5 si es menor o igual a 5.

**Código:**

```js
Copiar código
new Promise((resolve) => resolve(Math.floor(Math.random() * 10) + 1))
  .then((numero) => {
    console.log(`Número inicial: ${numero}`);
    return numero > 5 ? numero + 5 : numero - 5;
  })
  .then((resultado) => {
    console.log(`Resultado final: ${resultado}`);
  });
  ```
**Explicación:**
Primero se genera un número aleatorio entre 1 y 10. Luego, dependiendo de si el número es mayor a 5 o no, se suma o resta 5.
El resultado es un número modificado según la condición.

## 5. Ejercicio Avanzado: Usar promesas con múltiples valores

**Enunciado:**
Encadena tres promesas que reciban un array de números y los sumen secuencialmente.

**Código:**

```js
Copiar código
const numeros = [1, 2, 3, 4, 5];

Promise.resolve(numeros)
  .then((array) => array[0] + array[1])
  .then((suma1) => suma1 + 3)
  .then((suma2) => suma2 + 6)
  .then((resultado) => {
    console.log(resultado); // Output: 12
  });
  ```
**Explicación:**
Se empieza con un array de números, y luego se encadenan promesas que suman valores al resultado de la promesa anterior.
El resultado final es 12.

## 6. Ejercicio Avanzado: Encadenar promesas con valores de otras promesas

**Enunciado:**
Encadena tres promesas, donde cada una depende del resultado de la anterior, pero no se ejecuta hasta que la anterior se resuelva. La primera promesa devuelve un valor, la segunda le suma el valor de la primera, y la tercera le multiplica.

**Código:**

```js
Copiar código
new Promise((resolve) => resolve(5))
  .then((valor1) => valor1 + 3)
  .then((valor2) => valor2 * 2)
  .then((resultado) => {
    console.log(resultado); // Output: 16
  });
  ```
**Explicación:**
La primera promesa resuelve el número 5. Luego, se le suma 3 en la segunda promesa, y el resultado se multiplica por 2 en la tercera promesa.
El resultado final es 16.

## 7. Ejercicio Intermedio: Error en una promesa encadenada

**Enunciado:**
Crea una cadena de promesas donde la primera se resuelve, pero la segunda se rechaza. Muestra el error utilizando catch().

**Código:**

```js
Copiar código
new Promise((resolve) => resolve('Promesa resuelta'))
  .then((valor) => {
    console.log(valor); // Output: Promesa resuelta
    throw new Error('Error en la segunda promesa');
  })
  .catch((error) => {
    console.error(error.message); // Output: Error en la segunda promesa
  });
  ```
**Explicación:**
La primera promesa se resuelve correctamente, pero en la segunda se lanza un error utilizando throw.
El error se captura con catch() y se muestra en la consola.

## 8. Ejercicio Avanzado: Simular múltiples operaciones asíncronas encadenadas

**Enunciado:**
Simula una cadena de operaciones asíncronas utilizando promesas encadenadas. Cada promesa debe esperar 1 segundo y resolver el resultado que depende de la promesa anterior.

**Código:**

```js
Copiar código
function operacionAsincrona(valor) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(valor), 1000);
  });
}

operacionAsincrona(5)
  .then((resultado1) => operacionAsincrona(resultado1 + 2))
  .then((resultado2) => operacionAsincrona(resultado2 * 3))
  .then((resultadoFinal) => {
    console.log(resultadoFinal); // Output: 21
  });
  ```
**Explicación:**
Cada promesa espera 1 segundo antes de resolver un resultado basado en el valor de la promesa anterior.
El resultado final es 21 después de tres operaciones asíncronas.