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

//index.html
<script type="module" src="js/script.js"></script>

//scroll-initScrollSuave.js:
export default function initScrollSuave(){
    //código aqui dentro
}

//script.js:
import initScrollSuave from './modules/scroll-suave.js'
initScrollSuave();
//ou
import * as initScrollSuave from '.modules/scroll-suave.js'
initScrollSuave();

//É possível exportar qualquer coisa
//configuracao.js
export function initScrollSuave() {}
export const ano = 2000
export const obj = {nome: 'ford'}
export const str = 'frase'
export class Carro {}
//script.js
import * as conf from './configuracao.js'
conf.str
conf.obj
conf.ano

//Variaveis criadas dentro de um modulo ficam apenas no escopo dele


//Se colocar 'use strict' no topo de um arquivo, ele entra no modo restrito

