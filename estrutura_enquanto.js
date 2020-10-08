function acaoBotao(){
    var nome, idade, limite, contador;

limite = prompt("Digite o numero de vezes que vai ser verificado a idade: ")
contador = 0;
while(contador < limite){
    nome = prompt("Digite o nome da pessoa: ")
    idade = prompt("Qual a sua idade do " + nome)
    if (idade > 18)
        document.getElementById("paragrafo").innerText = nome +" voce e maior de idade"
        
    else
        document.getElementById("paragrafo").innerText = nome +" voce e menor de idade"
      contador++
    
}
}