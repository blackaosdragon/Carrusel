var carr = document.getElementById("imagen");
var contar = 0;
function izquierda(){
    bandera = 0;
    //carr.src="src/sejuani.jpg";
    contador();

}
function derecha(){
    bandera = 1;
    contador();
    //carr.src="src/kayn.jpg";
    //document.getElementById("imagen").src="src/kayn.jpg";

}
function contador(){
    if (bandera){
        contar++;
        console.log(contar);
        eleccion();
        
    }else{
        contar--;
        console.log(contar);
        eleccion();
    }

}
function reasignar(){
    if (contar<=-1){
        contar=5;
    }else if (contar>=6){
        contar=0;
    }else{
        console.log("pero que putas paso?!")
    }

}
function eleccion(){
    switch(contar){
        case 0:
            carr.src="src/poppy.jpg";
            break;
        case 1:
            carr.src="src/kayn.jpg";
            break;
        case 2:
            carr.src="src/sejuani.jpg";
            break;
        
    }
}



