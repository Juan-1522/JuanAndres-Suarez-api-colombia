const URL_PLATOS = "https://api-colombia.com/api/v1/TypicalDish";

const RESPALDO = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="240">' +
  '<rect width="100%" height="100%" fill="#e4e0d6"/>' +
  '<text x="50%" y="50%" font-family="Arial" font-size="18" fill="#5b6472" ' +
  'text-anchor="middle" dominant-baseline="middle">Imagen no disponible</text></svg>'
);

const cargando = document.getElementById("cargando");
const error = document.getElementById("error");
const resumen = document.getElementById("resumen");
const cuadricula = document.getElementById("cuadricula");

fetch(URL_PLATOS)
  .then(function (respuesta) {
    if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
    return respuesta.json();
  })
  .then(function (platos) {
    cargando.classList.add("oculto");
    mostrarResumen(platos);
    mostrarPlatos(platos);
  })
  .catch(function (err) {
    cargando.classList.add("oculto");
    error.textContent = "No se pudieron cargar los platos: " + err.message;
    error.classList.remove("oculto");
  });

function mostrarResumen(platos) {
  const strong = document.createElement("strong");
  strong.textContent = platos.length + " platos típicos registrados";
  resumen.appendChild(strong);
  resumen.classList.remove("oculto");
}

function mostrarPlatos(platos) {
  platos.forEach(function (plato) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const img = document.createElement("img");
    img.src = plato.imageUrl;
    img.alt = "Foto de " + plato.name;
    img.loading = "lazy";
    img.onerror = function () { img.onerror = null; img.src = RESPALDO; };
    tarjeta.appendChild(img);

    const cuerpo = document.createElement("div");
    cuerpo.className = "tarjeta-cuerpo";

    const titulo = document.createElement("h3");
    titulo.textContent = plato.name;
    cuerpo.appendChild(titulo);

    const insignia = document.createElement("span");
    insignia.className = "insignia";
    insignia.textContent = plato.department ? plato.department.name : "Colombia";
    cuerpo.appendChild(insignia);

    const desc = document.createElement("p");
    desc.className = "descripcion";
    desc.textContent = plato.description;
    cuerpo.appendChild(desc);

    tarjeta.appendChild(cuerpo);
    cuadricula.appendChild(tarjeta);
  });
}