//exercicio com useState

import { useState } from "react"

function Counter (){
    const [counter, setCounter]=useState(0);

const handleDecrease = () => {
    setCounter(counter+1)

    console.log('decrementar')
}

const handleIncrease = () => {
    setCounter(counter-1)
    
    console.log('decrementar')
}

    return (
        <div>
           <button onClick={handleIncrease}>Incrementa</button> 
            <button onClick={handleDecrease}>Decrementa</button>
            <h1>Valor contado : {counter}</h1>
        </div>
      );
}

export default Counter;