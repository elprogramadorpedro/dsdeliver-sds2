//criando props para pasar mensagens com ts
//exemplo pequeno de uma props e um useEffect


import { useEffect } from "react";

type Props = {
    message : String;
}




function Hello({message}:Props){

 useEffect(() => {
   console.log('componente iniciou');  
}, []);

    return(
       <h1>hello {message}!</h1>             //vamos a concatenar esee hello para criar contenido dinamico
    )
}

export default Hello