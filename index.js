
    function alertas(){
        if(document.querySelector(".af_actual").value>=25&&document.querySelector(".af_actual").value<30){
            document.querySelector(".alerta_naranja").classList.add("mostrar_alerta")
            document.querySelector(".tri_1").style.opacity=1;
            document.querySelector(".tri_1").style.color="rgb(255, 165, 0)";
            setTimeout((f)=>{
                document.querySelector(".alerta_naranja").classList.remove("mostrar_alerta")
            },2000)
        }
        if(document.querySelector(".af_actual").value==30){
            document.querySelector(".alerta_roja").classList.add("mostrar_alerta")
            document.querySelector(".tri_1").style.opacity=1;
            document.querySelector(".tri_1").style.color="rgb(255, 81, 81)";
            setTimeout((f)=>{
                document.querySelector(".alerta_roja").classList.remove("mostrar_alerta")
        
            },2000)
        }
        if(document.querySelector(".af_actual").value>30){
            document.querySelector(".alerta_mas_roja").classList.add("mostrar_alerta")
            document.querySelector(".tri_1").style.opacity=1;
            document.querySelector(".tri_1").style.color="rgb(255, 0, 0)";
            setTimeout((f)=>{
                document.querySelector(".alerta_mas_roja").classList.remove("mostrar_alerta")
        
            },2000)
        }
    
    }
    function eliminarAlerta(){
        if(document.querySelector(".af_actual").value<25){
           document.querySelector(".tri_1").style.opacity=0;
           document.querySelector(".tri_1").style.color="rgb(0, 0, 0)";
       }
        if(document.querySelector(".af_actual").value>=25&&document.querySelector(".af_actual").value<30){
           document.querySelector(".tri_1").style.opacity=1;
           document.querySelector(".tri_1").style.color="rgb(255, 165, 0)";
       }
    }
    
alertas()

