---
sidebar_position: 4
---
# Ejercicios sobre Fetch API

## 1. Ejercicio Básico: Realizar una solicitud HTTP GET
**Enunciado:**  
Realiza una solicitud HTTP GET a un endpoint de ejemplo y muestra el resultado en la consola.

**Código:**
```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output: Muestra los datos del post 1
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**
El método fetch() hace una solicitud HTTP GET a la URL proporcionada. Luego, se convierte la respuesta en formato JSON usando response.json(), y se muestra en la consola.

## 2. Ejercicio Básico: Realizar una solicitud POST
**Enunciado:** 
Envía datos a un servidor utilizando una solicitud HTTP POST con fetch().

**Código:**
```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Nuevo Post',
    body: 'Este es el cuerpo del nuevo post',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output: Muestra el post creado
  })
  .catch(error => console.error('Error:', error));
```
**Explicación:**
Se hace una solicitud POST enviando un objeto JSON en el cuerpo de la solicitud (body). Se especifica el tipo de contenido en los headers como 'application/json'.

## 3. Ejercicio Intermedio: Manejo de errores con Fetch
**Enunciado:** 
Realiza una solicitud a un endpoint inválido y maneja los errores con catch().

**Código:**
```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error); // Output: Error en la solicitud
  });
  ```
**Explicación:**
Se verifica si la respuesta de la solicitud es correcta mediante response.ok. Si no es así, se lanza un error que es capturado en el bloque catch().

## 4. Ejercicio Intermedio: Solicitud con parámetros en la URL
**Enunciado:**
Realiza una solicitud GET pasando parámetros en la URL y muestra los resultados en la consola.

**Código:**
```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output: Muestra los posts del usuario con ID 1
  })
  .catch(error => console.error('Error:', error));
  ```
  **Explicación:**

Los parámetros en la URL se añaden directamente después de ?. En este caso, se solicita solo los posts del usuario con userId=1.

## 5. Ejercicio Avanzado: Fetch con autenticación (Authorization Header)
**Enunciado:** 
Realiza una solicitud GET a un endpoint que requiera un header de autenticación.

**Código:**
```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts', {
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output: Muestra los posts con autenticación
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**
El header de autorización (Authorization) se añade en la solicitud con un token de autenticación para acceder a los recursos protegidos.

## 6. Ejercicio Avanzado: Fetch con múltiples solicitudes en paralelo
**Enunciado:** 
Realiza varias solicitudes GET en paralelo utilizando Promise.all() y muestra los resultados.

**Código:**
```js
Copiar código
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()),
  fetch('https://jsonplaceholder.typicode.com/posts/2').then(response => response.json()),
  fetch('https://jsonplaceholder.typicode.com/posts/3').then(response => response.json())
])
  .then(data => {
    console.log(data); // Output: Muestra los 3 posts
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**
Con Promise.all(), se ejecutan varias promesas en paralelo. Cada solicitud se resuelve por separado, y el resultado es un array con los resultados de cada solicitud.

## 7. Ejercicio Intermedio: Fetch con Blobs
**Enunciado:** 
Descarga un archivo binario usando fetch() y maneja los datos como un blob.

**Código:**
```js
Copiar código
fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img); // Muestra la imagen descargada
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**
El método response.blob() convierte la respuesta en un blob. Después se crea un objeto URL para mostrar la imagen en el navegador.

## 8. Ejercicio Avanzado: Fetch con múltiples tipos de respuestas
**Enunciado:** 
Haz una solicitud GET a un endpoint que devuelva tanto JSON como texto, dependiendo de la URL, y maneja ambos tipos de respuesta.

**Código:**
```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (response.headers.get('content-type').includes('application/json')) {
      return response.json();
    } else {
      return response.text();
    }
  })
  .then(data => {
    console.log(data); // Output: Muestra el post en formato JSON
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**
El método response.headers.get('content-type') se usa para verificar el tipo de respuesta. Si es JSON, se maneja con response.json(), de lo contrario, se maneja como texto con response.text().