/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
 OBJETIVO: Dado um array de numeros, escreva uma função que calcule a soma de todos os elemen-
 tos do array e retorne o resultado.
 ---------------------------------------------------------------------------------------------
 */ 
 

    let numeros = [10,10,10,10,10,10,10,10,10,10];
    let soma= 0;
      for(let i=0; i<numeros.length; i++){
            soma+= numeros[i];
      }
        console.log(soma);