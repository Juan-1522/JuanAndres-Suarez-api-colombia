const URL_DEPARTAMENTOS = "https://api-colombia.com/api/v1/Department";
const URL_REGIONES = "https://api-colombia.com/api/v1/Region";

const cargando = document.getElementById("cargando");
const error = document.getElementById("error");
const resumen = document.getElementById("resumen");
const cuadricula = document.getElementById("cuadricula");

Promise.all([fetch(URL_DEPARTAMENTOS), fetch(URL_REGIONES)])
  .then(function (respuestas) {
    respuestas.forEach(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
    });
    return Promise.all(respuestas.map(function (r) { return r.json(); }));
  })
  .then(function (datos) {
    const departamentos = datos[0];
    const regiones = datos[1];

    const mapaRegiones = {};
    regiones.forEach(function (r) { mapaRegiones[r.id] = r.name; });

    cargando.classList.add("oculto");
    mostrarResumen(departamentos);
    mostrarDepartamentos(departamentos, mapaRegiones);
  })
  .catch(function (err) {
    cargando.classList.add("oculto");
    error.textContent = "No se pudieron cargar los departamentos: " + err.message;
    error.classList.remove("oculto");
  });

function mostrarResumen(departamentos) {
  const strong = document.createElement("strong");
  strong.textContent = departamentos.length + " departamentos en total";
  resumen.appendChild(strong);
  resumen.classList.remove("oculto");
}

function mostrarDepartamentos(departamentos, mapaRegiones) {
  departamentos.forEach(function (d) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const cuerpo = document.createElement("div");
    cuerpo.className = "tarjeta-cuerpo";

    const titulo = document.createElement("h3");
    titulo.textContent = d.name;
    cuerpo.appendChild(titulo);

    const insignia = document.createElement("span");
    insignia.className = "insignia";
    insignia.textContent = mapaRegiones[d.regionId] || "Sin región";
    cuerpo.appendChild(insignia);

    const datos = document.createElement("div");
    datos.className = "datos";

    const pob = document.createElement("span");
    const pobB = document.createElement("b");
    pobB.textContent = formato(d.population);
    pob.appendChild(pobB);
    pob.appendChild(document.createTextNode("habitantes"));
    datos.appendChild(pob);

    const sup = document.createElement("span");
    const supB = document.createElement("b");
    supB.textContent = formato(d.surface) + " km²";
    sup.appendChild(supB);
    sup.appendChild(document.createTextNode("superficie"));
    datos.appendChild(sup);

    cuerpo.appendChild(datos);

    const desc = document.createElement("p");
    desc.className = "descripcion";
    desc.textContent = d.description;
    cuerpo.appendChild(desc);

    tarjeta.appendChild(cuerpo);
    cuadricula.appendChild(tarjeta);
  });
}

function formato(n) {
  return Number(n || 0).toLocaleString("es-CO");
}