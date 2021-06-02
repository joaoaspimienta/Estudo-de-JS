/*Dataset*/
//como adicionar data em elemento html
<div data-cor="azul" data-width="500">sla mermao</div>

//selecionando o data pelo js
const div = document.querySelector('[data-cor]')
//selecionando o data pelo js ex 2
    div = document.querySelector('[data-cor="azul"]')

//é possível adicionar novas propriedades em dataset
div.dataset.height = 1000;

//e deletar
delete div.dataset.height;

 
//Adicionando em cada div uma classe com o mesmo nome que o valor de data

<section>
    <div data-anima="left">Div 1</div>
    <div data-anima="right">Div 2</div>
</section>

const divs = document.querySelectorAll('[data-anima]')

divs.forEach((div) => {
    div.classList.add(div.dataset.anima)
})


/*Modulos*/

//Exportar e importar modulos

//Adicione type="module" na tag script do html
<script type="module" src="js/script.js"></script>

//Use export na frente da função que deseja exportar
export default function scrollSuave(){
  //...
}

//Use import nome from arquivo.js para importar
import scrollSuave from './scroll-suave.js'
scrollSuave();

//ou para importar tudo
import * as initScrollSuave from '.modules/scroll-suave.js'
initScrollSuave();

//Como exportar mais de um ao mesmo tempo
//Exporta normal, nao coloca default no export

//Como importar mais de um ao mesmo tempo
import { scrollSuave, scrollAnimacao } from './scroll.js'
scrollSuave()
scrollAnimacao()


//É possível exportar qualquer coisa
//configuracao.js
export function initScrollSuave() {}
export const ano = 2000
export const obj = {nome: 'ford'}
export const str = 'frase'
export class Carro {}

//Importar tudo de uma pagina
//script.js
import * as teste from './teste.js'
teste.str
teste.obj
teste.ano

//Variaveis criadas dentro de um modulo ficam apenas no escopo dele

//Se colocar 'use strict' no topo de um arquivo, ele entra no modo restrito

//Troque a posição para fixed, absolute ou relative para alterar o posicionamento de elementos na pagina

//box-sizing: border-box; ajuda a manter margens em volta dos objetos quando eles estouram o container

//Quer mudar a posição de uma imagem/botao dentro de um container? Coloque a posição do container como relative e do elemento que quer mover como absolute


/*Novo event listener*/
//Executa um codigo ao passar o mouse por cima ao inves de com um clique
item.addEventListener('mouseover', onMouseOver)

function onMouseOver(event) {
    console.log(event)
}


//Como usar um item de fora do escopo da sua função 
//(e tambem mostra que voce pode usar um objeto no lugar de uma função se ele tiver o handleEvent como um dos metodos dele)

function onMouseOver(event) {
    const nome = 'EMIYA'
    
    onMouseLeave.nome = nome;
    this.addEventListener('mouseleave', onMouseLeave)
}

const onMouseLeave = {
    handleEvent(){
     alert(this.nome);
    }
}

//...remove o event listener
this.element.removeEventListener('mouseleave', onMouseLeave)

//Como criar uma dropdown list
//coloque um ul/li dentro de outro li
//coloque position relative no container e position absolute no ul da lista de itens a "cair"


//Como prevenir comportamento padrão
const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach(menu => {
    menu.addEventListener('click', handleClick)
})

function handleClick(event) {
    event.preventDefault()
}

//Duas maneiras diferentes de associar dois tipos de eventListeners ao mesmo item
dropdownMenus.forEach(menu => {
    menu.addEventListener('click', handleClick)
    menu.addEventListener('touchstart', handleClick)
})

dropdownMenus.forEach(menu => {
    ['click', 'touchstart'].forEach(eventoRolou => {
    menu.addEventListener(eventoRolou, handleClick)
    })
})


//Como fazer uma animação tanto com hover quanto com classList.add (css e js)
[data-dropdown]:hover .dropdown-menu,
[data-dropdown].active .dropdown-menu {
    display: block;
    animation: show-up .3s forwards;
}

//Como selecionar o html:
const html = document.documentElement

//Html = document.documentElement;

//Como colocar tempo para rodar um codigo
function imprimeTempo(tempo){
    console.log(tempo)
}
setTimeout(imprimeTempo, 10000, '10 segundos')

//setTimeout com mais de um argumento
function imprimeTempo(tempo, dia){
    console.log(`já se passaram ${tempo} segundos no dia ${dia}`)
}
setTimeout(imprimeTempo, 10000, '10 segundos', 15)


//setTimeout com função anonima

setTimeout(function(){
    console.log('fodas')
}, 5000)

//ou
setTimeout(() => {
    console.log('fodas')
}, 5000)


//setInterval

function pintaQuadrado(classe){
    const sla = document.querySelector('.sla')
    sla.classList.toggle(classe)
  }
  
  setInterval(pintaQuadrado, 2000, 'azul')

  //Diz pro google que o conteudo do botão hamburguer aí tá oculto ((apenas para acessibilidade))
  aria-expanded="false"

  //Diz qual ID o objeto que contem essa "classe" está controlando (apenas para acessibilidade)
  aria-controls='menu'


  //position: static por algum motivo ao inves de ficar por cima dos itens desceu eles quando os itens com position static apareceram na lista (estavam escondidos antes), pesquisar como position static funciona, mas aparentemente ele salta os outros itens e nao fica por cima deles


  //Ao usar setTimeOut, o que voce passou dentro dele só ocorrerá após o final da fase de bubbling (mesmo colocando o tempo do setTimeOut em 0), isso pode evitar certos glitches


  //Como animar um elemento de "before"
  .js [data-menu="button"]::before {
    margin-right: 4px;
    content: '';
    display: inline-block;
    height: 2px;
    width: 12px;
    background: #fff;
    box-shadow: 0 4px #fff, 0 -4px #fff;
    transition: transform .3s;
}

    .js [data-menu="button"].active::before {
        transform: rotate(90deg);
}

//Como obter datas
const data = new Date()

const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

//Como pegar o dia de hoje
const dataAgora = new Date()
const diaAgora = dataAgora.getDay()


//Verificar quantos dias pro natal
const agora = new Date();
const futuro = new Date('Dec 24 2021 23:59')

function transformarDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000)
}

const diasAgora = transformarDias(agora.getTime())
const diasFuturo = transformarDias(futuro.getTime())


//Como retornar numeros de um dataset separados e como numeros mesmo
<li data-semana="1,2,3,4,5" data-horario="8,18">Seg à Sexta das 8 às 18</li>
const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
