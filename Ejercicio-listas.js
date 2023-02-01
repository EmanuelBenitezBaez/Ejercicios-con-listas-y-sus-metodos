/*Crea un archivo JS que contenga las siguientes líneas.*/


//- Una variable que contenga la lista de la compra (mínimo 5 elementos).

const listaCompras=["Harina","Leche","Verduras","Carne","Huevos"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol".
listaCompras.splice(6,1,"Aceite de Girasol");
console.log(listaCompras);

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol".
listaCompras.splice(5,1);
console.log(listaCompras);

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha).
const pelisFavoritas=[
{titulo:"Avengers",director:"Anthony Russo",fecha:2018},
{titulo:"Volver al Futuro",director:"Robert Zemeckis",fecha:1985},
{titulo:"Busqueda Implacable",director:"Pierre Morel",fecha:2018}
]

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter).

const pelisPosteriores= pelisFavoritas.filter(valor=> valor.fecha>2010)
console.log(pelisPosteriores);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map).


const directores= pelisFavoritas.map(valor=> valor.director);
console.log(directores);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map).


const titulos= pelisFavoritas.map(valor=> valor.titulo);
console.log(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat).

const concatenados= directores.concat(titulos);
console.log(concatenados);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación).

const concatDirectoresAndTitulos= [...directores,...titulos];
console.log(concatDirectoresAndTitulos);