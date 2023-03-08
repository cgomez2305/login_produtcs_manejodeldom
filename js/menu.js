
const foto_carrusel=document.getElementById('foto_carrusel')
const products=document.querySelector('.container-productos-all')
const modal=document.getElementById('modal')
const popup=document.getElementById('tarjeta')
const cerrar=document.querySelector('.cerrar')
const fotos=[
    '../carrusel/foto1.jpg',
    '../carrusel/foto2.jpg',
    '../carrusel/foto3.jpg',
    '../carrusel/foto4.jpg'
]
let indice=0
function rotar(){
    if(indice<fotos.length){
        foto_carrusel.src=fotos[indice]
        indice++
    }else{
        indice=0;
    }
}
let cont=0;
setInterval(rotar,3000)
let elementos=[];
const url="https://fakestoreapi.com/products"
async function productos(){
    const respuesta=await fetch(url)
    const datos=await respuesta.json()
    elementos=Array.from(datos)
    console.log(datos)
    datos.forEach(producto=> {
        products.innerHTML+=
        `
        <div class="container-productos-all-tarjeta">
                        <h3>${producto.title}</h3>
                        <img src="${producto.image}" alt="">
                        <p>${producto.description}</p>
                        <h4>${producto.price}</h4>
                        <button value=${cont++} class="comprar">Comprar Ahora</button>
                    </div>
    `
    });
}
let contando=0;
cerrar.addEventListener('click',(evento)=>{
        modal.style.display='none'
})

addEventListener('click',(eventuando)=>{
    if(eventuando.target.className=='comprar'){
        console.log(elementos)
        modal.style.display='flex'
        popup.innerHTML=
        `
        <div class="container-productos-all-tarjeta-modal">
                    <h3>${elementos[eventuando.target.value].title}</h3>
                    <img src="${elementos[eventuando.target.value].image}" alt="">
                    <p>${elementos[eventuando.target.value].description}</p>
                    <h4>${elementos[eventuando.target.value].price}</h4>
                    <button class="buyNow" value=${eventuando.target.value}>Comprar Ahora</button>
        </div>
        `  
    }
})
productos()
let exportar=0;
let importar=0;
let precioo=0;
addEventListener('click',(llamado)=>{
    if(llamado.target.className=='buyNow'){
        console.log(elementos[llamado.target.value].title)
        exportar=elementos[llamado.target.value].title
        precioo=elementos[llamado.target.value].price
        console.log(exportar)
        localStorage.setItem('precio',precioo)
        localStorage.setItem('prenda',exportar) 
        location.href=('../html/finalizada.html')
        
    }
})
