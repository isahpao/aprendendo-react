import React from 'react'


const Botao = ({label})=> {
     function darAlerta() {
    alert("A label desse botão é: " + label); 

    }
    return (
        <button onClick={darAlerta}>
            {label}

        </button>
)
 
}  ;



export default Botao