# Ejercicios sobre Promise.all

## 1. Ejercicio Básico: Ejecutar dos promesas en paralelo
**Enunciado:**  
Crea dos promesas que se ejecuten en paralelo. La primera promesa resuelve el número 10, y la segunda el número 20. Usa `Promise.all()` para esperar a que ambas promesas se resuelvan.

**Código:**
```js
const promesa1 = new Promise((resolve) => resolve(10));
const promesa2 = new Promise((resolve) => resolve(20));

Promise.all([promesa1, promesa2])
  .then((resultados) => {
    console.log(resultados); // Output: [10, 20]
  });
  ```
**Explicación:**
Promise.all() acepta un array de promesas y espera a que todas se resuelvan. En este caso, ambas promesas se resuelven, y el resultado es un array con los valores [10, 20].

## 2. Ejercicio Básico: Usar Promise.all con valores calculados
**Enunciado:**
Crea tres promesas que resuelvan números calculados de forma diferente: la primera resuelve 5, la segunda multiplica 2 por 3, y la tercera devuelve el valor 10. Usa Promise.all() para obtener los resultados.

**Código:**
```js
Copiar código
const promesa1 = new Promise((resolve) => resolve(5));
const promesa2 = new Promise((resolve) => resolve(2 * 3));
const promesa3 = new Promise((resolve) => resolve(10));

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados); // Output: [5, 6, 10]
  });
  ```
**Explicación:**
Se ejecutan tres promesas en paralelo, y Promise.all() espera que todas se resuelvan. El resultado es un array con los valores [5, 6, 10].

## 3. Ejercicio Intermedio: Manejar errores con Promise.all
**Enunciado:**
Crea dos promesas, una que resuelva un número y otra que se rechace. Usa Promise.all() para manejar el error.

**Código:**
```js
Copiar código
const promesa1 = new Promise((resolve) => resolve(5));
const promesa2 = new Promise((_, reject) => reject('Error en la promesa'));

Promise.all([promesa1, promesa2])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error(error); // Output: Error en la promesa
  });
  ```
**Explicación:**
Si alguna de las promesas falla (se rechaza), Promise.all() rechazará la promesa general, y el error se maneja con el método catch().

## 4. Ejercicio Intermedio: Esperar a que varias promesas se resuelvan
**Enunciado:**
Crea tres promesas que se resuelvan después de diferentes tiempos. Usa Promise.all() para esperar a que todas se resuelvan antes de mostrar el resultado.

**Código:**
```js
Copiar código
const promesa1 = new Promise((resolve) => setTimeout(() => resolve('Primera'), 1000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve('Segunda'), 2000));
const promesa3 = new Promise((resolve) => setTimeout(() => resolve('Tercera'), 3000));

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados); // Output: ['Primera', 'Segunda', 'Tercera']
  });
  ```
**Explicación:**
Las promesas se ejecutan en paralelo, y Promise.all() espera hasta que todas se resuelvan. El resultado es el array ['Primera', 'Segunda', 'Tercera'].

## 5. Ejercicio Avanzado: Uso de Promise.all con fetch
**Enunciado:**
Usa Promise.all() para hacer dos solicitudes fetch en paralelo. La primera solicitud obtiene datos de un archivo JSON, y la segunda solicita una imagen.

**Código:**
```js
Copiar código
const fetchData = fetch('https://jsonplaceholder.typicode.com/posts/1');
const fetchImage = fetch('https://via.placeholder.com/150');

Promise.all([fetchData, fetchImage])
  .then(([responseData, responseImage]) => {
    return Promise.all([responseData.json(), responseImage.blob()]);
  })
  .then(([data, imageBlob]) => {
    console.log(data); // Muestra los datos JSON
    console.log(imageBlob); // Muestra el blob de la imagen
  });
  ```
**Explicación:**
Se hacen dos solicitudes en paralelo usando fetch(), y Promise.all() espera a que ambas finalicen. Después, los resultados se extraen utilizando .json() y .blob().

## 6. Ejercicio Avanzado: Promise.all con operaciones asíncronas
**Enunciado:**
Crea tres promesas que representen operaciones asíncronas, como leer archivos o hacer solicitudes, y usa Promise.all() para esperar a que todas finalicen.

**Código:**
```js
Copiar código
function leerArchivo(nombre) {
  return new Promise((resolve) => setTimeout(() => resolve(`Archivo ${nombre} leído`), 1500));
}

const archivo1 = leerArchivo('1');
const archivo2 = leerArchivo('2');
const archivo3 = leerArchivo('3');

Promise.all([archivo1, archivo2, archivo3])
  .then((resultados) => {
    console.log(resultados); // Output: ['Archivo 1 leído', 'Archivo 2 leído', 'Archivo 3 leído']
  });
  ```
**Explicación:**
Las tres promesas simulan operaciones asíncronas (como leer archivos) que se ejecutan en paralelo. Promise.all() espera hasta que todas se resuelvan.

## 7. Ejercicio Intermedio: Promesas con tiempo de espera
**Enunciado:**
Crea cuatro promesas, cada una con un tiempo de resolución diferente. Usa Promise.all() para obtener el resultado de todas ellas.

**Código:**
```js
Copiar código
const promesa1 = new Promise((resolve) => setTimeout(() => resolve('1 segundo'), 1000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve('2 segundos'), 2000));
const promesa3 = new Promise((resolve) => setTimeout(() => resolve('3 segundos'), 3000));
const promesa4 = new Promise((resolve) => setTimeout(() => resolve('4 segundos'), 4000));

Promise.all([promesa1, promesa2, promesa3, promesa4])
  .then((resultados) => {
    console.log(resultados); // Output: ['1 segundo', '2 segundos', '3 segundos', '4 segundos']
  });
  ```
**Explicación:**
Las promesas se ejecutan en paralelo y Promise.all() espera hasta que todas se resuelvan. El resultado es un array con los valores de todas las promesas.

## 8. Ejercicio Avanzado: Combinar Promise.all con Error Handling
**Enunciado:**
Usa Promise.all() con múltiples promesas, y una de ellas se rechaza. Usa catch() para manejar el error.

**Código:**
```js
Copiar código
const promesa1 = new Promise((resolve) => resolve('Primera promesa'));
const promesa2 = new Promise((_, reject) => reject('Segunda promesa falló'));
const promesa3 = new Promise((resolve) => resolve('Tercera promesa'));

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.error(error); // Output: Segunda promesa falló
  });
  ```
**Explicación:**
Cuando una promesa se rechaza en Promise.all(), todas las promesas se consideran fallidas. El error se maneja con catch().