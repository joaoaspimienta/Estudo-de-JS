//Conversão de tipos
console.log(Number('9') + 5) //14
console.log(String(5)) //'5'

//Replace
let frase = 'n sei mano'
let fraseTrocada = frase.replace('mano', 'velho')

console.log(fraseTrocada)


//Separa texto em itens de uma array
let frase = "eu gosto de programação!"
let meuArray = frase.split(" ")
console.log(meuArray)

//Converte a string em um array, aí converte de volta pra string e troca as virgulas por espaços
let frase = "eu gosto de programação!"
let meuArray = String(frase.split(" "))
let minhaString = meuArray.replaceAll(',' , ' ')
console.log(minhaString)

//Forma mais resumida
let frase = "eu gosto de programação!"
let meuArray = String(frase.split(" ")).replaceAll(',' , ' ')
console.log(meuArray)

//...
let frase = "eu gosto de programação!"
let meuArray = frase.split(" ").join(" ")
console.log(meuArray)

//Join() une os itens de uma array em uma string(?)


//Array.from() - Cria arrays com conteudo passado
let palavra = "slamermao"
console.log(Array.from(palavra))

arrayRandom.splice(index, quantiaPraSerRemovida) //remove itens do array
let index = arrayRandom.indexOf('palavraRandom') //encontra o index de palavraRandom no array


//Função auto-executavel (ponto e virgula obrigatorio no let)
let number = 1;

(function() {
    console.log('sla')
})()


//Operador ternário
var nome = 'joao'

nome === 'joao' ? console.log('rs') : console.log('nah')


//identifica o tipo do item
console.log(typeof "joao")

