$(document).ready(function(){

    $('#cpf').mask('000.000.000-00');

    $('.telefone').mask('(00) 000000000');

    $('.salario').mask('000.000,00', {reverse:true});

    $('#data_nascimento').mask('00/00/0000');

    $('.data-mes-ano').mask('00/0000');

    $(".reveal").on('click',function() {
    if ($(".pwd").attr('type') === 'password') {
        $(".pwd").attr('type', 'text');
        $(".reveal").html('Esconder');
    } else {
        $(".pwd").attr('type', 'password');
        $(".reveal").html('Mostrar');
    }
});