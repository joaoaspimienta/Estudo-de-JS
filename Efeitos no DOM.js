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