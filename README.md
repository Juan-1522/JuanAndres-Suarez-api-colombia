# Mini Portal de Colombia con API

**Estudiante:** Juan Andrés Suarez

## Descripción

Mini portal web que consume la API pública [api-colombia.com](https://api-colombia.com/)
y muestra la información dinámicamente en el DOM con JavaScript.

De las 5 opciones de la actividad se desarrollaron **2**, en páginas separadas
conectadas mediante hipervínculos:

1. **Sabores de Colombia** (`sabores.html`) — opción 5. Consume `/api/v1/TypicalDish`
   y muestra nombre, descripción, departamento e imagen de cada plato.
   *Extra:* cuenta el total de platos (68).
2. **Explorador de Departamentos** (`departamentos.html`) — opción 1. Consume
   `/api/v1/Department` y muestra nombre, región, población, superficie y descripción.
   *Extra:* cuenta los departamentos por región.

Ambas páginas muestran un mensaje de carga y manejan los errores con `catch`.

## Tecnologías usadas

- HTML5
- CSS3 (hoja de estilos separada, sin frameworks)
- JavaScript vanilla (`fetch`, promesas, manipulación del DOM con `createElement`)
- API pública `https://api-colombia.com/`

## Instrucciones de uso

1. Clona o descarga el repositorio.
2. Abre `index.html` en tu navegador (se requiere internet para consumir la API).
3. Usa los enlaces de la barra de navegación para ir a **Sabores** o **Departamentos**.
4. Los datos se cargan solos con `fetch`; verás el mensaje de carga y luego las tarjetas.

> También puedes servirlo con cualquier servidor estático o publicarlo en GitHub Pages;
> al ser HTML/CSS/JS puro, no necesita compilación ni dependencias.

## Capturas

| Portada | Sabores | Departamentos |
|---|---|---|
| ![Portada](capturas/index.png) | ![Sabores](capturas/sabores.png) | ![Departamentos](capturas/departamentos.png) |

## Nombre del estudiante

Juan Andrés Suarez