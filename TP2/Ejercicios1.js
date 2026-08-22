//1
const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  //10
  _añoDePublicacion: 1967,

  get añoDePublicacion() {
    return this._añoDePublicacion;
  },
  set añoDePublicacion(nuevoAño) {
    this._añoDePublicacion = nuevoAño;
  },

  //3
  descripción: function() {
    return `El libro '${this.titulo}' fue escrito por ${this.autor}.`;
  }
};

console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año de publicación:", libro.añoDePublicacion);

const infoLibro = libro.descripción();
console.log(infoLibro);

//2
const estudiante = {
  nombre: "Laura",
  edad: 25,
  direccion: {
    calle: "Av. Los Álamos 123",
    ciudad: "Concepción del Uruguay",
    pais: "Argentina"
  }
};

console.log(`Dirección completa: ${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);

//4
const producto = {
  nombre: "Monitor 4K",
  precio: 350.50,
  disponible: true
};

for (let propiedad in producto) {
  console.log(`${propiedad}: ${producto[propiedad]}`);
}

//5
producto.precio = 530.75;
console.log(producto);

//6
function tienePropiedad(objeto, propiedad) {
  return propiedad in objeto;
}

console.log(tienePropiedad(producto, "nombre")); // true
console.log(tienePropiedad(producto, "color")); // false

//7
console.log("producto antes de eliminar", producto);
delete producto.disponible;
console.log("producto después de eliminar", producto);

//8
const persona1 = {
  nombre: "Carlos",
  edad: 28
};

const persona2 = {
  profesion: "Desarrollador",
  ciudad: "Bogotá"
};

const personaCombinada = Object.assign({}, persona1, persona2);

console.log(personaCombinada);

//9

const copiaEstudiante = JSON.parse(JSON.stringify(estudiante));

copiaEstudiante.nombre = "María";
copiaEstudiante.direccion.ciudad = "Buenos Aires"; 

console.log("Original");
console.log("Nombre:", estudiante.nombre);
console.log("Ciudad:", estudiante.direccion.ciudad); 

console.log("\nCopia");
console.log("Nombre:", copiaEstudiante.nombre);
console.log("Ciudad:", copiaEstudiante.direccion.ciudad);

//parte del 10
libro.añoDePublicacion = 1900;
console.log("Año de publicación actualizado:", libro.añoDePublicacion);