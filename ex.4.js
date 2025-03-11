/*Curso de Desenvolviemento de Sistema
Professora - Júlia
SENAI
Estudante: Tayna 
---------------------------------------------------------------------------------------------
 OBJETIVO: Crie uma função que receba um string e retorne um array com as vogais (a, e, i, o, u)
 presentes nela... Por exemplo, para a string "Ola Mundo", o resultado deve ser [o, a u, o ]
 Utilize o metodo .toLowerCase() para deixá-las minúsculas.
 ---------------------------------------------------------------------------------------------
 */ 

    let string = "Ola Mundo";
    let vogais = ["a", "e", "i", "o", "u"];
    let resultado = [];
     
       function encontrarVogais(string){
          let  stringMinuscula = string.tolowerCase();
          let  arrayString = stringMinuscula.string();
              
               for(let i = 0; i < arrayString.leghth; i++){
                  if(vogais.includes(arrayString[i])){
                     resultado.push(arrayString[i]);

                  }
               }
       }
              console.log(resultado);
              console.log(string);
              console.log(vogais);
           
              

