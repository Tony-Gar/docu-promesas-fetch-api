---
sidebar_position: 8
---
# Solicitudes HTTP POST con Fetch API

## Concepto

Una solicitud **POST** se utiliza para enviar datos al servidor, típicamente para crear o actualizar recursos. A diferencia de una solicitud **GET**, que solo recupera datos, una solicitud **POST** envía datos en el cuerpo de la solicitud. La **Fetch API** facilita la realización de solicitudes `POST` de manera sencilla.

## Sintaxis Básica

```js
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  // Tipo de contenido, en este caso JSON
  },
  body: JSON.stringify({  // Los datos que se envían al servidor
    key1: 'value1',
    key2: 'value2'
  })
})
  .then(response => response.json())  // Convertimos la respuesta a JSON
  .then(data => {
    console.log('Datos enviados correctamente:', data);
  })
  .catch(error => {
    console.error('Error en la solicitud POST:', error);
  });
  ```
## Ejemplo de Solicitud POST
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  // Indicamos que el contenido será JSON
  },
  body: JSON.stringify({
    title: 'Nuevo Post',
    body: 'Este es el contenido del post',
    userId: 1
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();  // Convertimos la respuesta a JSON
  })
  .then(data => {
    console.log('Datos enviados:', data);  // Datos de la respuesta del servidor
  })
  .catch(error => {
    console.error('Error en la solicitud POST:', error);
  });
  ```
#### En este ejemplo:

Se envía una solicitud POST a la API https://jsonplaceholder.typicode.com/posts.
Se pasan los datos en el cuerpo de la solicitud utilizando JSON.stringify(), en formato JSON.
Si la solicitud es exitosa, la respuesta del servidor se imprime en la consola.
Si hay algún error (por ejemplo, red o problemas de validación), se maneja en el bloque .catch().
Consideraciones Importantes
Content-Type: En la mayoría de los casos, cuando envías datos en formato JSON, debes establecer el encabezado Content-Type a 'application/json'. Esto informa al servidor que los datos se están enviando en formato JSON.

Cuerpo de la solicitud: El cuerpo de la solicitud (body) debe ser una cadena JSON, por lo que es necesario usar JSON.stringify() para convertir los datos de JavaScript en una cadena JSON antes de enviarlos.

Manejo de errores: Al igual que con las solicitudes GET, si el servidor responde con un código de error (como 404 o 500), fetch() no rechazará automáticamente la promesa. Por lo tanto, siempre es recomendable verificar la respuesta con response.ok.

La Fetch API facilita la creación de solicitudes POST para enviar datos al servidor, lo que te permite interactuar con servicios web y APIs para crear o modificar recursos.