$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#botao__cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco__imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}">`).appendTo(novoItem);  
        $(`<div class="overley__link__imagem">
        <a href="${enderecoNovaImagem}" title="Ver imagem tamanho real" target="_blank">
            Ver imagem tamanho real
        </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereco__imagem').val('')
    });
});