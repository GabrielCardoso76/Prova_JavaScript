function validarTexto(){
    console.log("dda");
    let caractere = document.getElementById('textoInput');

    if((caractere instanceof HTMLInputElement)){
        let tecla = caractere.value;
    //console.log(tecla.length);  
    let texto = tecla.length;
    console.log(typeof(tecla.length));  
   

    if (texto > 70) {
      throw new Error(
        'O texto deve haver no máximo 70 caracteres.'
       
      );

    }if(texto<1){
        throw new Error(
            'O texto deve haver no mínimo 1 caractere.'
        );
    }
    } 
}

document.addEventListener('DOMContentLoaded', validarTexto);