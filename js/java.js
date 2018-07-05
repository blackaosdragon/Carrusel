var carr = document.getElementById("imagen");
var contar = 0;
console.log(contar);
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
        reasignar();
        eleccion();
        console.log(contar);
        
    }else{
        contar--;
        reasignar();
        eleccion();
        console.log(contar);        
        
    }

}
function reasignar(){
    if (contar<=-1){
        contar=5;
    }else if (contar>=6){
        contar=0;
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
        case 3:
            carr.src="src/azir.jpg";
            break;
        case 4:
            carr.src="src/shy.jpg";
            break;
        case 5:
            carr.src="src/amumu.jpg";
            break;
    }
}



