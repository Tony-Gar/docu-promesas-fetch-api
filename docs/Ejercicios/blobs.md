# Ejercicios: Obtener Blobs de archivos o datos binarios con Fetch API

## 1. Ejercicio Básico: Obtener una imagen como Blob
**Enunciado:**  
Usa la Fetch API para obtener una imagen desde una URL y convertirla en un Blob.

**Código:**
```js
fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(blob => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
  })
  .catch(error => console.error('Error:', error));
  ```
**Explicación:**

Se usa response.blob() para convertir la respuesta en un Blob.
Luego se crea una URL con URL.createObjectURL(blob) y se inserta la imagen en el DOM.
## 2. Ejercicio Básico: Descargar un archivo de texto como Blob
**Enunciado:**
Usa Fetch para descargar un archivo de texto y mostrar su contenido en la consola.

**Código:**
```js
Copiar código
fetch('https://www.w3.org/TR/PNG/iso_8859-1.txt')
  .then(response => response.blob())
  .then(blob => blob.text())
  .then(text => console.log(text))
  .catch(error => console.error('Error:', error));
 ```
**Explicación:**

Se usa blob.text() para leer el contenido del Blob como texto y mostrarlo en la consola.

## 3. Ejercicio Intermedio: Descargar y mostrar un archivo PDF
**Enunciado:**
Usa Fetch para descargar un archivo PDF y abrirlo en una nueva pestaña.

**Código:**
```js
Copiar código
fetch('https://www.pdf995.com/samples/pdf.pdf')
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  })
  .catch(error => console.error('Error:', error));
 ```
**Explicación:**

Se obtiene un Blob del archivo PDF y se usa URL.createObjectURL(blob) para crear un enlace que se abre en una nueva pestaña.

## 4. Ejercicio Intermedio: Mostrar una imagen descargada como Blob
**Enunciado:**
Descarga una imagen con Fetch y muéstrala en la página web.

**Código:**
```js
Copiar código
fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(blob => {
    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(blob);
    document.body.appendChild(imageElement);
  })
  .catch(error => console.error('Error:', error));
 ```
**Explicación:**

Se descarga la imagen como Blob y luego se utiliza URL.createObjectURL() para convertirlo en una URL que se muestra como una imagen en el DOM.

## 5. Ejercicio Avanzado: Descargar un archivo CSV y mostrarlo en la consola
**Enunciado:**
Descarga un archivo CSV y muestra su contenido en la consola.

**Código:**
```js
Copiar código
fetch('https://people.sc.fsu.edu/~jburkardt/data/csv/addresses.csv')
  .then(response => response.blob())
  .then(blob => blob.text())
  .then(csv => console.log(csv))
  .catch(error => console.error('Error:', error));
 ```
**Explicación:**

Se descarga el archivo CSV como un Blob, luego se convierte en texto y se muestra en la consola.

## 6. Ejercicio Avanzado: Descargar un archivo y mostrarlo como Blob en el navegador
**Enunciado:**
Usa Fetch para descargar un archivo y mostrarlo en una nueva ventana como Blob.

**Código:**
```js
Copiar código
fetch('https://www.pdf995.com/samples/pdf.pdf')
  .then(response => response.blob())
  .then(blob => {
    const objectURL = URL.createObjectURL(blob);
    const iframe = document.createElement('iframe');
    iframe.src = objectURL;
    document.body.appendChild(iframe);
  })
  .catch(error => console.error('Error:', error));
 ```
**Explicación:**

Se utiliza URL.createObjectURL() para convertir el Blob en una URL que se muestra en un iframe en el DOM.

## 7. Ejercicio Avanzado: Descargar un archivo y guardarlo localmente
**Enunciado:**
Usa Fetch para descargar un archivo y ofrecerlo como descarga utilizando la API de Blobs.

**Código:**
```js
Copiar código
fetch('https://www.w3.org/TR/PNG/iso_8859-1.txt')
  .then(response => response.blob())
  .then(blob => {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'archivo.txt';
    link.click();
  })
  .catch(error => console.error('Error:', error));
 ```
**Explicación:**

Se descarga un archivo como Blob y luego se usa un enlace con el atributo download para iniciar la descarga del archivo.

## 8. Ejercicio Avanzado: Descargar un archivo de audio y reproducirlo en el navegador
**Enunciado:**
Descarga un archivo de audio como Blob y reprodúcelo en el navegador.

**Código:**
```js
Copiar código
fetch('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
  .then(response => response.blob())
  .then(blob => {
    const audioURL = URL.createObjectURL(blob);
    const audio = new Audio(audioURL);
    audio.play();
  })
  .catch(error => console.error('Error:', error));
 ```
**Explicación:**

Se descarga el archivo de audio como Blob y se crea un objeto Audio para reproducirlo en el navegador.