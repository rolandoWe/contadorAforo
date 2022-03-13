

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
        document.querySelector(".btn_sal").classList.remove("mostrar_btn")
    }
    else{
        document.querySelector(".btn_sal").classList.add("mostrar_btn")
    
    }
}
function alertas(){
    if(document.querySelector(".af_actual").value>=25&&document.querySelector(".af_actual").value<30){
        document.querySelector(".alerta_naranja").classList.add("mostrar_alerta")
        document.querySelector(".tri_1").style.opacity=1;
        document.querySelector(".tri_1").style.color="rgb(255, 165, 0)";
        // document.querySelector(".aforo").style.color="rgb(255, 165, 0)";
        setTimeout((f)=>{
            document.querySelector(".alerta_naranja").classList.remove("mostrar_alerta")
        },2000)
    }
    if(document.querySelector(".af_actual").value==30){
        document.querySelector(".alerta_roja").classList.add("mostrar_alerta")
        document.querySelector(".tri_1").style.opacity=1;
        document.querySelector(".tri_1").style.color="rgb(255, 81, 81)";
        // document.querySelector(".aforo").style.color="rgb(255, 81, 81)";
        setTimeout((f)=>{
            document.querySelector(".alerta_roja").classList.remove("mostrar_alerta")
    
        },2000)
    }
    if(document.querySelector(".af_actual").value>30){
        document.querySelector(".alerta_mas_roja").classList.add("mostrar_alerta")
        document.querySelector(".tri_1").style.opacity=1;
        document.querySelector(".tri_1").style.color="rgb(255, 0, 0)";
        // document.querySelector(".aforo").style.color="rgb(255, 0, 0)";
        setTimeout((f)=>{
            document.querySelector(".alerta_mas_roja").classList.remove("mostrar_alerta")
    
        },2000)
    }

}
function eliminarAlerta(){
    if(document.querySelector(".af_actual").value<25){
       document.querySelector(".tri_1").style.opacity=0;
       document.querySelector(".tri_1").style.color="rgb(0, 0, 0)";
    //    document.querySelector(".aforo").style.color="rgb(0, 0, 0)";
   }
    if(document.querySelector(".af_actual").value>=25&&document.querySelector(".af_actual").value<30){
       document.querySelector(".tri_1").style.opacity=1;
       document.querySelector(".tri_1").style.color="rgb(255, 165, 0)";
    //    document.querySelector(".aforo").style.color="rgb(255, 165, 0)";
   }
}


function total(){
document.querySelector(".total_ing").value=entrada+sali
}
document.querySelector(".entrada").addEventListener("click",()=>{
    Entrada()
    total()
    maes()
    alertas()
})
document.querySelector(".btn_sal").addEventListener("click",()=>{
    Salida()
    sumarSalida()
    maes()
    eliminarAlerta()
})