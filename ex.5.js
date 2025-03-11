/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
 OBJETIVO: Escrva uma função que receba um array de numeros e retorne o menos numero presente
 no array.
 ---------------------------------------------------------------------------------------------
 */ 

    
    let numeros = [1, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    
    function menorNumero(numeros){
        let menor = numeros[0];
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] < menor){
                menor = numeros[i];
            }
              else{
                 menor = menor;
              }
        }
          return menor;
        
    }
         console.log(menorNumero(numeros));
         console.log(numeros);

      