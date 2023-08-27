import utileriasRandom from './utileriasRandom';
const utileriasLogica = () => {

    function concatenaOpcion(opcion, randomOpcion) {
    
        var opciontxt;
        var randomOpciontxt;
        
        if(opcion == 1 && randomOpcion == 2){
            opciontxt = "Perdiste tu rival eligio: Papel";
        }else if(opcion == 1 && randomOpcion == 1){
            opciontxt = "Empataste tu rival eligio: Piedra";
        }else if(opcion == 1 && randomOpcion == 3){
            opciontxt = "Ganaste tu rival eligio: Tijera";
        }else if(opcion == 2 && randomOpcion == 2){
            opciontxt = "empataste tu rival eligio: Papel";
        }else if(opcion == 2 && randomOpcion == 3){
            opciontxt = "Perdiste tu rival eligio: Tijera";
        }else if(opcion == 2 && randomOpcion == 1){
            opciontxt = "Ganaste tu rival eligio: Papel";
        }else if(opcion == 3 && randomOpcion == 2){
            opciontxt = "ganaste tu rival eligio: papel";
        }else if(opcion == 3 && randomOpcion == 3){
            opciontxt = "Empataste tu rival eligio: Tijera";
        }else if(opcion == 3 && randomOpcion == 1){
            opciontxt = "Perdiste tu rival eligio: Piedra";
        }
        
        return opciontxt;
    }

    return { concatenaOpcion }
}

export default utileriasLogica;