let hola=localStorage.getItem('prenda')
let precio=localStorage.getItem('precio')
const titulo=document.getElementById('titulo')
const precioo=document.getElementById('precio')
titulo.innerHTML=hola
precioo.innerHTML=`  ${precio} $`  
