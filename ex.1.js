/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
 OBJETIVO: crie uma função que receba um array de notas e retorne a media das notas.
 ---------------------------------------------------------------------------------------------
 */ 

 let notas = [5, 6, 7, 8, 9]
    
 function calcularMedia(notas){
    let soma = 0 
   notas.forEach(nota => {
       soma += nota 
       
   });
      
       let media = soma / notas.legth
       return media
   }
         if(media>=7){
           console.log("Aprovado")
           
     }   else{
         console.log("Reprovado")
   }
      
     console.log(calcularMedia(notas));
     console.log(notas);
     
