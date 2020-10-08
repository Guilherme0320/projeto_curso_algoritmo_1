var nome, nota1,  nota2, media;
 nome = prompt("qual o nome do aluno:")
 nota1 = prompt("Digite a nota 01 do aluno")
 nota2 = prompt("Digite a nota 02 do aluno")

 media = (parseInt (nota1)) + (parseInt (nota2)) / 2 ;

 if(media >=50){
 alert("aprovado " + nome);
 }
 else{
     alert("Reprovado " + nome);
 }