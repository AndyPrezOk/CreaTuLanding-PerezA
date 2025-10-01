import { useState } from 'react';

const Ejemplocontador = () => {

    const [contador, setContador] = useState(1);

    //let contador= 1;

    const aumentar = () => {

        // Asi no se actualiza
        //contador = contador =1;

        if (contador < 10) {
            setContador(contador + 1);
            console.log("Clickeamos el boton", contador)
        }

    }

    return (
        <div>
            <p>Contador : {contador} </p>
            <button onClick={aumentar}>+</button>

        </div>
    )
}

export default Ejemplocontador
