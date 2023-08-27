import {useState}  from 'react';
import utileriasLogica from './utileriasLogica';
import utileriasRandom from './utileriasRandom';

const useLogica = () => {
    const [opcion, setOpcion] = useState('');
    const [opcionrandom, setOpcionRandom] = useState('');
    const { concatenaOpcion } = utileriasLogica();
    const { getRandomNumero } = utileriasRandom();
    
    
    function opcionPiedra() {
        var nuevaopcionrandom= getRandomNumero();
        setOpcionRandom(nuevaopcionrandom);
        var nuevoOpcion = concatenaOpcion(1, nuevaopcionrandom);
        setOpcion(nuevoOpcion);
    }
    function opcionPapel() {
        var  nuevaopcionrandom= getRandomNumero();
         setOpcionRandom(nuevaopcionrandom);
        var nuevoOpcion1 = concatenaOpcion(2, nuevaopcionrandom);
        setOpcion(nuevoOpcion1);
    }
    function opcionTijera() {
        var nuevaopcionrandom = getRandomNumero();
        setOpcionRandom(nuevaopcionrandom);
        var nuevoOpcion2 = concatenaOpcion(3, nuevaopcionrandom);
        setOpcion(nuevoOpcion2);
    }

    

    return { opcion, setOpcion, opcionPiedra,opcionPapel, opcionTijera}
}

export default useLogica;