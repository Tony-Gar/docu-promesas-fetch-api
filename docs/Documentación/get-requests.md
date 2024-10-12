---
sidebar_position: 7
---

# Solicitudes HTTP GET con Fetch API

## Concepto

Una solicitud **GET** se utiliza para obtener recursos o datos desde un servidor. Con la **Fetch API**, realizar una solicitud GET es sencillo y puede hacerse en pocas líneas de código. La respuesta de una solicitud GET puede ser en diferentes formatos, como JSON, texto o incluso HTML, dependiendo de lo que el servidor devuelva.

## Sintaxis Básica

```js
fetch(url)
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
    console.error('Error en la solicitud GET:', error);
  });
  ```
## Ejemplo de Solicitud GET
```js

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then(data => {
    console.log('Datos obtenidos:', data); 
  })
  .catch(error => {
    console.error('Error en la solicitud GET:', error);
  });
  ```
#### En este ejemplo:

Realizamos una solicitud GET a la API pública https://jsonplaceholder.typicode.com/posts/1.
La respuesta se convierte en JSON con response.json().
Si la solicitud es exitosa, los datos se imprimen en la consola.
Si ocurre algún error, como una respuesta de red fallida, se captura en el bloque .catch().
Consideraciones Importantes
Manejo de errores: fetch() no rechaza automáticamente la promesa si el servidor responde con un código de error (por ejemplo, 404 o 500). Por eso, es importante comprobar response.ok para asegurarse de que la respuesta es válida antes de procesar los datos.

Encabezados personalizados: Si necesitas enviar encabezados personalizados en tu solicitud GET, puedes hacerlo a través del segundo parámetro de fetch() como en el siguiente ejemplo:

```js

fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer tu_token_aqui'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error en la solicitud GET:', error);
  });
  ```
Con la Fetch API, realizar solicitudes GET es una tarea sencilla y eficiente, permitiendo acceder a datos en servidores externos de forma asincrónica.