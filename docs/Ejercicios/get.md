# Ejercicios: Realizar solicitudes HTTP GET con Fetch API

## 1. Ejercicio Básico: Obtener todos los posts
**Enunciado:**  
Realiza una solicitud GET para obtener todos los posts del servicio `jsonplaceholder`.

**Código:**
```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    console.log(posts); // Muestra todos los posts
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se realiza una solicitud GET para obtener todos los posts.
Los datos se convierten en JSON y se muestran en la consola.

## 2. Ejercicio Básico: Manejo de errores en GET
**Enunciado:**
Realiza una solicitud GET y maneja los posibles errores que puedan surgir durante la petición.

**Código:**

```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts/1000') // Post no existente
  .then(response => {
    if (!response.ok) {
      throw new Error('Post no encontrado');
    }
    return response.json();
  })
  .then(post => {
    console.log(post);
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se maneja el error en caso de que el recurso no exista (post con ID 1000).
Si la respuesta no es válida, se lanza un error que es capturado en .catch().

## 3. Ejercicio Intermedio: Obtener y mostrar un post con un ID dinámico
**Enunciado:**
Crea una función que reciba un ID de post y realice una solicitud GET para obtener y mostrar ese post.

**Código:**

```js
Copiar código
function obtenerPost(id) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => console.log(post))
    .catch(error => console.error('Error:', error));
}

obtenerPost(5); // Muestra el post con ID 5
```
**Explicación:**

Se crea una función obtenerPost() que acepta un ID.
La URL de la solicitud GET usa el ID como parámetro para obtener el post correspondiente.

## 4. Ejercicio Intermedio: Obtener datos y mostrar solo ciertos campos
**Enunciado:**
Realiza una solicitud GET para obtener los posts y luego muestra solo el título y el cuerpo de cada post.

**Código:**

```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      console.log(`Título: ${post.title}, Cuerpo: ${post.body}`);
    });
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se obtiene la lista de posts.
Se itera sobre los posts y se extraen solo el título y el cuerpo.

## 5. Ejercicio Avanzado: Uso de parámetros en la URL
**Enunciado:**
Realiza una solicitud GET a la API de jsonplaceholder y pasa parámetros en la URL para filtrar los resultados (por ejemplo, filtrar los posts por el ID del usuario).

**Código:**

```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se utiliza la consulta de parámetros en la URL (?userId=1) para filtrar los posts por el ID de usuario.

## 6. Ejercicio Avanzado: Manejo de múltiples GET requests
**Enunciado:**
Realiza dos solicitudes GET en paralelo utilizando Promise.all() para obtener tanto los posts como los comentarios de un post.

**Código:**

```js
Copiar código
const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json());

const commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json());

Promise.all([postsPromise, commentsPromise])
  .then(([posts, comments]) => {
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se hacen dos solicitudes GET simultáneas utilizando Promise.all().
Se resuelven ambas promesas antes de mostrar los resultados.

## 7. Ejercicio Avanzado: Paginar resultados de GET requests
**Enunciado:**
Realiza una solicitud GET para obtener los posts y luego muestra solo los primeros 5 resultados.

**Código:**

```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const primerosCinco = posts.slice(0, 5);
    console.log(primerosCinco);
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Después de obtener todos los posts, se usa .slice(0, 5) para mostrar solo los primeros 5 resultados.

## 8. Ejercicio Avanzado: GET request con headers personalizados
**Enunciado:**
Realiza una solicitud GET y añade encabezados personalizados en la solicitud para simular un acceso autenticado.

**Código:**

```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token_de_acceso'
  }
})
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se añaden encabezados personalizados usando la opción headers en la solicitud GET.
El encabezado Authorization simula un acceso autenticado.