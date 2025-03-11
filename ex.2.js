/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
 OBJETIVO: crie um array com 10 numeros aleatorios. Escreva uma função que calcule a soma de 
 todos os elemntos do array e retorne o resultado.
 ---------------------------------------------------------------------------------------------
 */ 

   
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
    let soma  =  0;
      for(let i=0; i<numeros.length; i++){
        soma  += numeros[i];
      }
        console.log(soma);
        console.log(numeros);

      
 
    
     
     