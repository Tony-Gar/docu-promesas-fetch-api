---
sidebar_position: 6
---

# Fetch API

## Concepto y Definición

La **Fetch API** es una interfaz de JavaScript que permite hacer peticiones HTTP asincrónicas (como `GET`, `POST`, `PUT`, `DELETE`, entre otras) desde el navegador. Es una mejora significativa respecto a la antigua `XMLHttpRequest`, proporcionando una forma más sencilla y flexible de trabajar con solicitudes y respuestas HTTP.

`fetch()` es el método principal de la Fetch API, que devuelve una promesa. Este método se utiliza para obtener recursos desde una red, como un archivo JSON, HTML, o datos de una API.

## Sintaxis Básica

```js
fetch(url, options)
  .then(response => {
    // Manejo de la respuesta
  })
  .catch(error => {
    // Manejo de errores
  });
  ```
url: La dirección del recurso que se quiere obtener.
options: Un objeto opcional que permite configurar la solicitud, como el método HTTP, cabeceras, cuerpo, etc.

## Ejemplo Simple: Petición GET
```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    console.log(data); // Manejo de los datos obtenidos
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  ```
#### En este ejemplo:

Se realiza una petición GET a la API https://api.example.com/data.
La respuesta se convierte a formato JSON con response.json().
Si la solicitud falla o hay un error en la red, el bloque .catch() maneja el error.
Ejemplo con Petición POST
Puedes enviar datos a un servidor utilizando el método POST. Aquí un ejemplo de cómo hacerlo:

```js
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Error in POST request:', error);
  });
  ```
#### En este ejemplo:
Se envía un objeto JSON con los datos del usuario al servidor.
Se utiliza fetch() con el método POST y se pasa el cuerpo de la solicitud con body: JSON.stringify(...).
Consideraciones Importantes
Manejo de respuestas: fetch() solo rechaza una promesa en caso de fallo de red. No lo hace si la respuesta del servidor es un error HTTP (como 404 o 500). Debes verificar manualmente response.ok para comprobar si la respuesta fue exitosa.

Conversión de formatos: La respuesta de fetch() no se convierte automáticamente a JSON, texto o cualquier otro formato. Debes usar métodos como response.json(), response.text(), etc., para convertir la respuesta en el formato adecuado.

La Fetch API es una herramienta poderosa y versátil para hacer solicitudes de red en aplicaciones web modernas, permitiendo una programación asincrónica y un manejo más limpio de las respuestas HTTP.