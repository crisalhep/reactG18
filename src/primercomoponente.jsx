
//primer paso para definir un componente es el nombre
//el nombre siempre se inicia con mayuscula
//el componente es una funcion
//todas las funciones trabajan anonima o declarativa o las flechas
//no se puede tener 2 contenedores padres... solo uno
//useState

import { useState } from 'react';
import {usesState} from 'react';

import './App.css';
const PrimerComponente = ()=>{
    //todo lo que esta en esta en el return esta renderizado
    //esta tambien es llamado hook
cons[count,setCount ] =useState(0)

//son dos funciones
const sumar =()=> setCount(count + 1);
const restar =()=> setCount(count - 1);

    return(
        <div>
            <h1 className="title">este es el componente</h1>
            {/*vamos a crear dos botones para sumar y para restar*/}
            <button onClick={sumar}>SUMAR</button>
            <button onClick={restar}>RESTAR</button>
        </div>
    )
}


export default PrimerComponente;