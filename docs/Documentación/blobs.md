---
sidebar_position: 9
---
# Fetch de Blobs: Obtener Archivos o Datos Binarios con Fetch API

## Concepto

Un **Blob** (Binary Large Object) es un objeto que representa datos binarios crudos. Con la **Fetch API**, puedes obtener blobs de archivos o datos binarios desde un servidor. Esta es una técnica común para descargar imágenes, videos, o cualquier tipo de archivo binario. El método `fetch()` puede recuperar estos datos y luego manejarlos adecuadamente.

## Sintaxis Básica

```js
fetch(url)
  .then(response => response.blob())  // Convertimos la respuesta a un Blob
  .then(blob => {
    // Manejo del Blob (por ejemplo, mostrarlo en una imagen o guardarlo)
  })
  .catch(error => {
    console.error('Error al obtener el blob:', error);
  });
  ```
## Ejemplo para Descargar una Imagen
Supongamos que quieres descargar una imagen desde una URL y mostrarla en la página:

```js
fetch('https://example.com/image.png')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();  // Convertimos la respuesta a un Blob
  })
  .then(blob => {
    const imageUrl = URL.createObjectURL(blob);  // Creamos una URL para el Blob
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.appendChild(img);  // Añadimos la imagen al documento
  })
  .catch(error => {
    console.error('Error al obtener la imagen:', error);
  });
  ```
**En este ejemplo:**

Se realiza una solicitud GET a una URL que devuelve una imagen en formato binario.
La respuesta se convierte en un Blob con response.blob().
Luego, se crea una URL temporal para el blob usando URL.createObjectURL() y se muestra la imagen en el documento HTML.
Ejemplo para Descargar un Archivo
También puedes descargar archivos binarios, como archivos PDF o videos, y permitir que el usuario los descargue:

```js

fetch('https://example.com/file.pdf')
  .then(response => response.blob())  // Convertimos la respuesta a un Blob
  .then(blob => {
    const downloadLink = document.createElement('a');
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = 'archivo.pdf';  // Nombre del archivo a descargar
    document.body.appendChild(downloadLink);
    downloadLink.click();  // Simulamos un clic para iniciar la descarga
    document.body.removeChild(downloadLink);  // Eliminamos el enlace del DOM
  })
  .catch(error => {
    console.error('Error al obtener el archivo:', error);
  });
  ```
**En este ejemplo:**

Se realiza una solicitud GET para obtener un archivo PDF.
El archivo se convierte en un Blob y se crea una URL temporal para el Blob.
Se simula un clic en un enlace de descarga para iniciar la descarga del archivo.

#### Consideraciones Importantes

Blob vs. Response: El método response.blob() convierte la respuesta de una solicitud en un objeto Blob. Es útil cuando el servidor responde con datos binarios (como una imagen, video o archivo).

URL.createObjectURL(): Este método se utiliza para crear una URL temporal que representa el Blob, lo que permite usarlo en atributos de HTML, como el src de una imagen o el href de un enlace de descarga.

Manejo de errores: Siempre es recomendable comprobar si la respuesta de la solicitud es válida (usando response.ok) antes de procesar el Blob, para evitar errores al manejar datos no esperados.

La Fetch API facilita la descarga y manejo de archivos binarios y datos en formato Blob, lo que te permite interactuar con recursos como imágenes, videos y otros archivos de manera eficiente.