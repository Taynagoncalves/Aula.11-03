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
           
       let media = soma / notas.length
         
        if(notas = 0 && notas.length <= 9){
            console.log("O Aluno está Aprovado. ")
     
        }
          else{
           console.log("O Aluno está Reprovado")
          }
         

    }
        
         
          
    