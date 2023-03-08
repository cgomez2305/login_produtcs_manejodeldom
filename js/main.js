const user=document.getElementById("usuario")
const pass=document.getElementById("pass")
const btn=document.getElementById("boton")
const mostrar=document.getElementById("view")

let personas=[
    {
    nombre:"carlos",
    user:"carlos123",
    pass:"1234"
    },
    {
    nombre:"pedro",
    user:"pedrito",
    pass:"123" 
    },
    {
    nombre:"raul",
    user:"rauls",
    pass:"raul123"
    },
    {
    nombre:"pepito",
    user:"pepito123",
    pass:"123456"
    }

]
let contador=0;
let contando=0;
let posicion=0;

function validador(){
    for(i=0;i<=personas.length;i++){
        if(personas[i].user===user.value){
            posicion=i;
            if(personas[posicion].pass===pass.value){
                alert('bienvenido')
                location.href="/html/menu.htmlmenu.html"
            }else{
                alert('contraseña incorrecta')
                contador++;
            }
        }if(contador===3){
            alert('usuario bloqueado')
            break
        }
    }
}

mostrar.addEventListener('click',ojito)
function ojito(){
    pass.type="text"
    contando++;
    if (contando>1){
        pass.type="password"
        contando=0;
    }
}