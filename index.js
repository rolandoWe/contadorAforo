

let entrada=0

function Entrada(){
entrada++

document.querySelector(".af_actual").value=entrada
}
// let SAlida=0enta
function Salida(){
      entrada--
      if(entrada<=0){
        entrada=0
    }
    document.querySelector(".af_actual").value=entrada

}
let sali=0
function sumarSalida(){
    sali++

    document.querySelector(".total_sali").value=sali 


}
function maes(){
    if(document.querySelector(".total_ing").value===document.querySelector(".total_sali").value){
        document.querySelector(".salida").style.display="none"
    }
    else{
        document.querySelector(".salida").style.display="block"
    
    }
}
// sumarSalida()





function total(){
document.querySelector(".total_ing").value=entrada+sali

}

document.querySelector(".entrada").addEventListener("click",()=>{
    Entrada()
    total()
    maes()
    // sumar()
})
document.querySelector(".salida").addEventListener("click",()=>{

    Salida()
    sumarSalida()
    maes()

    // restar()
})