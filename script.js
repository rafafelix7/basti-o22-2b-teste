document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });
});
document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    });

});
const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })
   const alternaContraste = document.getElementById('alterna-contraste')
   alternaContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
color: var(--alto-contraste-texto);
}
function comecaCronometro(){
    setInterval(atualizaCronometro,1000);
}console.log(Math.ceil(4.2));  // Saída: 5
console.log(Math.ceil(9.8));  // Saída: 10
console.log(Math.floor(7.9));  // Saída: 7
console.log(Math.floor(2.1));  // Saída: 2
console.log(Math.round(3.4));  // Saída: 3
console.log(Math.round(5.7));  // Saída: 6
