//1
async function obtenerUsuarios() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await respuesta.json();
    return usuarios;
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error);
    return [];
  }
}

obtenerUsuarios();

//2
async function imprimirNombresDeUsuarios() {
  const listaUsuarios = await obtenerUsuarios();
  const nombres = listaUsuarios.map(usuario => usuario.name);
  console.log("Lista de nombres:", nombres);
}

imprimirNombresDeUsuarios();

//3
const usuarioDefinido = {
  usuario: "admin",
  contraseña: "password123"
};

function autenticarUsuario(credenciales) {
  if (credenciales.usuario === usuarioDefinido.usuario && 
      credenciales.contraseña === usuarioDefinido.contraseña) {
    return true;
  }
  return false;
}

// Autenticación exitosa
const credencialesCorrectas = {
  usuario: "admin",
  contraseña: "password123"
};
console.log("Prueba 1:", autenticarUsuario(credencialesCorrectas)); // Imprime: true

//  Contraseña incorrecta
const credencialesIncorrectas = {
  usuario: "admin",
  contraseña: "1234"
};
console.log("Prueba 2:", autenticarUsuario(credencialesIncorrectas)); // Imprime: false

//4
function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
        return {
            nombre  : usuario.name,
            email  : usuario.email,
        }
    });
}


//5
function validarFormulario(datosFormulario) {
  const { nombre, email, password } = datosFormulario;

  if (
    nombre && nombre.trim() !== "" &&
    email && email.trim() !== "" &&
    password && password.trim() !== ""
  ) {
    return true;  // Todos los campos son válidos
  }
  return false; // Algún campo es inválido
}

// --- Pruebas de la función ---

// Prueba 1: Formulario correcto
const formCorrecto = {
  nombre: "Carlitos Perez",
  email: "carlos@mail.com",
  password: "miContraseña"
};
console.log("Prueba Correcta:", validarFormulario(formCorrecto)); // Imprime: true

// Prueba 2: Falla porque la contraseña está vacía
const formVacio = {
  nombre: "Ana Gomez",
  email: "ana@mail.com",
  password: "" // Campo vacío
};
console.log("Prueba Vacía:", validarFormulario(formVacio)); // Imprime: false

// Prueba 3: Falla porque faltan datos y hay puros espacios
const formEspacios = {
  nombre: "   ", // Solo espacios
  email: "usuario@mail.com"
  // Falta la propiedad password por completo
};
console.log("Prueba Espacios:", validarFormulario(formEspacios)); // Imprime: false

//6
function obtenerPagina(datos, numeroPagina) {
  const elementosPorPagina = 5;

  // se calcula en qué índice empieza la página que queremos
  const indiceInicio = (numeroPagina - 1) * elementosPorPagina;

  // se calcula en qué índice termina
  const indiceFin = indiceInicio + elementosPorPagina;

  return datos.slice(indiceInicio, indiceFin);
}

const todosLosDatos = [
  "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", 
  "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", 
  "Item 11", "Item 12"
];

// Prueba: Obtener la primera página (elementos del 1 al 5)
console.log("Página 1:", obtenerPagina(todosLosDatos, 1)); 
// Imprime: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]

// Prueba: Obtener la segunda página (elementos del 6 al 10)
console.log("Página 2:", obtenerPagina(todosLosDatos, 2)); 
// Imprime: ["Item 6", "Item 7", "Item 8", "Item 9", "Item 10"]

// Prueba: Obtener la tercera página (solo quedan los elementos 11 y 12)
console.log("Página 3:", obtenerPagina(todosLosDatos, 3)); 
// Imprime: ["Item 11", "Item 12"]

//7

async function enviarDatos(data) {
  try {
    const opciones = {
      method: 'POST',
      body: JSON.stringify(data), 
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    };

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts', opciones);
    const respuestaJSON = await respuesta.json();
    console.log("Respuesta de la API:", respuestaJSON);

  } catch (error) {
    console.error("Hubo un error al enviar los datos:", error);
  }
}

const nuevoPost = {
  title: 'Aguante boca',
  body: 'Nahitan Nandez viene a boca??',
  userId: 1,
};

enviarDatos(nuevoPost);

//8

function buscarUsuarioPorEmail(usuarios, emailBuscado) {
  return usuarios.find(usuario => usuario.email === emailBuscado);
}

const listaDeUsuarios = [
  { id: 1, nombre: "Carlos", email: "carlos@mail.com" },
  { id: 2, nombre: "Laura", email: "laura@mail.com" },
  { id: 3, nombre: "Ana", email: "ana@mail.com" }
];

// Prueba 1: Buscamos un email que SÍ existe
const usuarioEncontrado = buscarUsuarioPorEmail(listaDeUsuarios, "laura@mail.com");
console.log("Usuario encontrado:", usuarioEncontrado); 

// Prueba 2: Buscamos un email que NO existe
const usuarioNoEncontrado = buscarUsuarioPorEmail(listaDeUsuarios, "pedro@mail.com");
console.log("Usuario no encontrado:", usuarioNoEncontrado); 
// Imprime: undefined

//9

function generarToken(usuario) {
  const header = { alg: "HS256", typ: "JWT" };
  const headerCodificado = btoa(JSON.stringify(header));
  const payloadCodificado = btoa(JSON.stringify(usuario));
  const firmaSimulada = btoa("Leandro_Paredes_2026");

  return `${headerCodificado}.${payloadCodificado}.${firmaSimulada}`;
}

const usuarioEjemplo = {
  id: 101,
  nombre: "Laura",
  email: "laura@mail.com"
};

const miToken = generarToken(usuarioEjemplo);

console.log("Token generado:");
console.log(miToken); 

//10

function actualizarUsuario(usuario, cambios) {
  return Object.assign({}, usuario, cambios);
}

const usuarioOriginal = {
  id: 1,
  nombre: "Carlos",
  email: "carlos@mail.com",
  rol: "lector",
  activo: true
};

const nuevosDatos = {
  email: "carlos_nuevo@mail.com",
  rol: "editor"
};

const usuarioActualizado = actualizarUsuario(usuarioOriginal, nuevosDatos);

console.log("--- Usuario Original ---");
console.log(usuarioOriginal); 

console.log("\n--- Usuario Actualizado ---");
console.log(usuarioActualizado);