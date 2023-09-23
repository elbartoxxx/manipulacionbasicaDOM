//ARREGLOS
// var frutas = ["manzana", "platano","cereza","fresa"];

// var posicion =frutas.indexOf("cereza");
// console.log(posicion);


//eliminar elemento del inicio
//var borrarfruta = frutas.shift


//agrega elemento al principio
//var nuevalongitud = frutas.unshift("moras");
//console.log(frutas);


//agrega elemento al final array
//var masfrutas= frutas.push("duraznito"); 
//console.log(frutas);

//elimina elemento del array
//var ultimo= frutas.pop("duraznito");
//console.log(frutas.length);
//console.log(frutas[2]);

// var estudiantes = ["Cris","Augusto","Ernesto","Daniel"];

// function saludarestudiantes(estudiante){ 
//     console.log(`Hola, ${estudiante}`);    
// }

// for(var estudiante of estudiantes){
//     saludarestudiantes(estudiante);
// }

// var estudiantes = ["maria", "sergio","Rosa","Daniel"];

// function saludarestudiantes(estudiante){
//     console.log(`Hola, ${estudiante}`);
// }

// while(estudiantes.length>0){
//     console.log(estudiantes);
//     var estudiante=estudiantes.shift();
//     saludarestudiantes(estudiante);
// }

//OBJETOS!!
// var miAuto={
//     marca: "Toyota",
//     modelo: "Corolla",
//     annio: 2095,
//     detalleDelAuto: function(){
//         console.log(`Auto ${this.modelo} ${this.annio}`);
//     }
// };
// miAuto["detalleDelAuto"]();
// console.log(miAuto["marca"])
// miAuto.marca="BMW"
// console.log(miAuto["marca"])

// function auto(marca,modelo,annio){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.annio = annio;
// }

// var autoNuevo=new auto("tesla","Model 3",2027);
// var autoNuevo2=new auto("BMW","Modelo x",2022);
// var autoNuevo3=new auto("Toyoa","Corolla",2022);
// console.log(autoNuevo);
// console.log(autoNuevo2);
// console.log(autoNuevo3);


// function proteina(marca,sabor,tamanio,scoops){
//     this.marca=marca;
//     this.sabor=sabor;
//     this.tamanio=tamanio;
//     this.scoops=scoops;
//     this.detalle = function (){
//         console.log(`Es una proteina marca ${this.marca} de sabor ${this.sabor}, de tamanio ${this.tamanio}kg y te da ${this.scoops} scoops`);
//     }
// }
// var proteina1=new proteina("ON","Chocolate",2,28);
// proteina1.detalle();


// //metodos de recorrido de arrays
// //aqui creamos un array con de objetos
// var articulos = [
//     {nombre: "Bici", costo: 3000},
//     {nombre: "tv",costo: 2500},
//     {nombre: "libro",costo: 100},
//     {nombre:"celular",costo: 1000},
//     {nombre: "laptop",costo:2000},
//     {nombre:"teclado",costo:400},
//     {nombre:"audifonos",costo:1599}
// ];
// //primer metodo llamado filter, valida si algo es verdad o falso
// //no modifica el array original
// //agrega a un nuevo array solo los articulos que cumplieron esta
// var articulosFiltrados= articulos.filter(function(articulo){
//     return articulo.costo<=500
// });
// console.log(articulosFiltrados);

// //segundo metodo es de map
// //genera un nuevo array sin modificar el original
// var nombreArticulos= articulos.map(function(articulo){
//     return articulo.nombre
// })
// console.log(nombreArticulos);

// //tercer metodo es .find()
// //si el articulo existe se revisa, si no nel
// var encuentraArticulo=articulos.find(function(articulo){
//     return articulo.nombre === "laptop"
// });
// console.log(encuentraArticulo);

// //cuarto metodo es .foreach()
// //generla un filtrado y retorna cosas
// //solo retorna ciertos datos
// articulos.forEach(function(articulo){
//     console.log(articulo.nombre);
// });

// //quinto metodo es .some()
// //regresa una validaci[on] de verdadero o falso y genera nuevo array
// // solo genera verdadero o falso
// var articulosbaratos = articulos.some(function(articulo){
//     return articulo.costo<= 700;
// });
// console.log(articulosbaratos);


// var frutas = ["manzana", "platano","cereza","fresa"];

// var posicion =frutas.indexOf("cereza");
// console.log(posicion);


//eliminar elemento del inicio de un arreglo
//var borrarfruta = frutas.shift


//agrega elemento al principio
//var nuevalongitud = frutas.unshift("moras");
//console.log(frutas);


//agrega elemento al final array
//var masfrutas= frutas.push("duraznito"); 
//console.log(frutas);

//elimina elemento FINAL del array
//var ultimo= frutas.pop("duraznito");
//console.log(frutas.length);
//console.log(frutas[2]);

// function nombreCompleto(nombre,apellido,nickName){
//     return "Hola, me llamo" + nombre + ' ' + apellido + " " + "pero prefiero que me llamen" + nickName ;
// }

// console.log(nombreCompleto("Chris", "Barto", "Cris"));


//CONDICIONALES

// const tipoDeSuscripcion = "Basic";

// switch(tipoDeSuscripcion){
//     case "Free":
//         console.log("Solo puedes tomar los cursos gratis");
//         break;
//     case "Basic":"
//         console.log("Puedes tomar casi todos los cursos de plazti");
//         break; 
//     case "Premium":
//         console.log("pUEDES TOMAR TODOS LOS CURSOS")       )
//         break;
//     }

// function(){
//     if (tipoDeSuscripcion=="free"){
//         console.log("SOlo puedes tomar los recursos gratis")
//     } else {}
// }


// CILOS FOR
// for (let i=0;i<5;i++){
//     console.log("El valor de i es " + i);
// }

// function imprimerElementoPorElemento(arr){
//     for (let i=0;i<=arr.length;i++){
//         console.log(arr[i]);
//     }
// }

// imprimerElementoPorElemento(['juanita','Albembi','Maximo']);

const obj = {
    nombre:'Agua',
    edad: 3,
    comidaFavorita: ['Agua de limon','Pizza','Pozole'],
};
// const arr= Object.values(obj)
console.log(Object.values(obj));


function imprimerElementoPorElemento(obj){
    const arr=object.values(obj)
    for (let i=0;i<=arr.length;i++){
        console.log(arr[i]);
    }
}

console.log(imprimerElementoPorElemento(obj));