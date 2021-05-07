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