 

 let btn_sal=document.querySelector(".btn_sal")
 let btn_ent=document.querySelector(".btn_ent")
 let contenedor=document.querySelector(".contenedor")
 let reset=document.querySelector(".reset")

 let contarEnt=0
 let contarSal=0

 function entra(){
     contarEnt++   
 }
 function sale(){
     contarSal++   
 }
 function guardarDB(){
    localStorage.setItem("aforo",contarEnt)
    localStorage.setItem("contarSal",contarSal)
 }
 function operarContador(){
   document.querySelector(".total_ing").value=entrada+sali
 }

 function pintarHtml(){
    let conta=JSON.parse(localStorage.getItem("aforo"))
    document.querySelector(".total_ing").value=conta

    if(conta!=null&&contarSal!=null){
       contarEnt=conta;
    }
 }
 function sumarSalida(){
   let conta=JSON.parse(localStorage.getItem("contarSal"))
   document.querySelector(".total_sali").value=conta
   if(conta!=null){
      contarSal=conta
   }
 }
 function operar(){

   let contaF=JSON.parse(localStorage.getItem("aforo"))
   let conta=JSON.parse(localStorage.getItem("contarSal"))

   document.querySelector(".af_actual").value=contaF-conta
 }
 function maes(){
   if(document.querySelector(".total_ing").value===document.querySelector(".total_sali").value){
       document.querySelector(".btn_sal").classList.remove("mostrar_btn")
   }
   else{
       document.querySelector(".btn_sal").classList.add("mostrar_btn")
   
   }
}
function resetear(){
   localStorage.removeItem("aforo")
   localStorage.removeItem("contarSal")

   pintarHtml()
   sumarSalida()
   operar()
   maes()

   window.location.reload()
}

 contenedor.addEventListener("click",function(f){
    if(f.target.className=="btn_ent"){
      entra()
      guardarDB()
      pintarHtml() 
      operar() 
      maes()
      alertas()
    }
    if(f.target.className=="btn_sal mostrar_btn"){
      sale()
      guardarDB()
      sumarSalida() 
      operar()
      maes()
      eliminarAlerta()
    }
 })
 reset.addEventListener("click",function(){
resetear()
 })

pintarHtml()
sumarSalida()
operar()
maes()