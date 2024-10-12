---
sidebar_position: 6
---
# Ejercicios: Realizar solicitudes HTTP POST con Fetch API

## 1. Ejercicio Básico: Realizar una solicitud POST con datos JSON
**Enunciado:**  
Realiza una solicitud POST para enviar un nuevo post a la API de `jsonplaceholder`.

**Código:**
```js
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
  .then(post => console.log('Post creado:', post))
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se envían datos en formato JSON con el método POST.
Los datos del nuevo post se pasan en el cuerpo de la solicitud usando JSON.stringify().

## 2. Ejercicio Básico: Enviar datos con formato de formulario
**Enunciado:**
Realiza una solicitud POST para enviar datos utilizando el formato de formulario (form-data).

**Código:**

```js
Copiar código
const formData = new FormData();
formData.append('title', 'Nuevo Post');
formData.append('body', 'Este es el cuerpo del nuevo post');
formData.append('userId', 1);

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: formData
})
  .then(response => response.json())
  .then(post => console.log('Post creado:', post))
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se usa FormData para enviar los datos como si fueran enviados desde un formulario.
El body de la solicitud contiene los datos del post.

## 3. Ejercicio Intermedio: Enviar un objeto JavaScript como datos POST
**Enunciado:**
Envía un objeto JavaScript en formato JSON a la API utilizando una solicitud POST.

**Código:**

 ```js
Copiar código
const postData = {
  title: 'Objeto JavaScript',
  body: 'Enviamos un objeto en formato JSON',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(post => console.log('Post creado:', post))
  .catch(error => console.error('Error:', error));
   ```
**Explicación:**

Se convierte un objeto JavaScript en JSON con JSON.stringify() y se envía en el cuerpo de la solicitud POST.

## 4. Ejercicio Intermedio: Manejo de respuesta del servidor
**Enunciado:**
Realiza una solicitud POST y maneja correctamente la respuesta para mostrar un mensaje si el post fue creado exitosamente.

**Código:**

 ```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Verificación de post',
    body: 'Verificando si se creó correctamente',
    userId: 1
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la creación del post');
    }
    return response.json();
  })
  .then(post => console.log('Post creado:', post))
  .catch(error => console.error('Error:', error));
   ```
**Explicación:**

Se verifica si la respuesta es exitosa con response.ok antes de procesarla.
Si hay un error, se lanza una excepción.

## 5. Ejercicio Avanzado: Enviar datos con autenticación (Token Bearer)
**Enunciado:**
Realiza una solicitud POST enviando un token de autenticación en los encabezados.

**Código:**

 ```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer tu_token_aqui'
  },
  body: JSON.stringify({
    title: 'Post con autenticación',
    body: 'Enviamos un post autenticado',
    userId: 1
  })
})
  .then(response => response.json())
  .then(post => console.log('Post creado:', post))
  .catch(error => console.error('Error:', error));
   ```
**Explicación:**

Se incluye un encabezado de autorización (Authorization) con el tipo de token Bearer.
El token permite enviar la solicitud como si fuera un usuario autenticado.

## 6. Ejercicio Avanzado: Verificar datos antes de enviar
**Enunciado:**
Antes de enviar los datos de un post en una solicitud POST, verifica que los campos necesarios (título y cuerpo) no estén vacíos.

**Código:**

 ```js
Copiar código
const titulo = 'Post validado';
const cuerpo = 'Este post tiene los campos validados';

if (titulo && cuerpo) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: titulo,
      body: cuerpo,
      userId: 1
    })
  })
    .then(response => response.json())
    .then(post => console.log('Post creado:', post))
    .catch(error => console.error('Error:', error));
} else {
  console.error('El título o el cuerpo del post están vacíos');
}
 ```
**Explicación:**

Se valida que el título y el cuerpo del post no estén vacíos antes de realizar la solicitud POST.
Si alguno está vacío, se muestra un error en la consola.

## 7. Ejercicio Avanzado: Enviar un archivo junto con los datos del post
**Enunciado:**
Envía un archivo junto con los datos del post utilizando FormData en una solicitud POST.

**Código:**

 ```js
Copiar código
const formData = new FormData();
formData.append('title', 'Post con archivo');
formData.append('body', 'Este post incluye un archivo');
formData.append('userId', 1);
formData.append('file', document.querySelector('input[type="file"]').files[0]);

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: formData
})
  .then(response => response.json())
  .then(post => console.log('Post creado:', post))
  .catch(error => console.error('Error:', error));
   ```
 **Explicación:**

Se utiliza FormData para enviar tanto los datos del post como un archivo.
Se incluye un campo file que contiene el archivo seleccionado por el usuario.

## 8. Ejercicio Avanzado: Manejo de errores con respuesta HTTP 400
**Enunciado:**
Realiza una solicitud POST y maneja un posible error 400 (Bad Request), mostrando el mensaje adecuado.

**Código:**

 ```js
Copiar código
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: '',  // Campo vacío que provocará un error
    body: 'Este post tiene un error en el título',
    userId: 1
  })
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(post => console.log('Post creado:', post))
  .catch(error => console.error('Error:', error));
   ```
**Explicación:**

Se envía un post con el título vacío, lo que provoca un error 400 (Bad Request).
Se maneja el error en la promesa y se muestra el código de estado y el mensaje.
sql