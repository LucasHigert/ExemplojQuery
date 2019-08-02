$(function () {

    //var nome='';
    $nome = '';

    //Para criar o ajax
    $.ajax({
        url: 'https://viacep.com.br/ws/89110446/json/',
        method: 'get',
        success: function (data) {
            $localidade=data.localidade;
            $logradouro=data.logradouro;

            // Vai pegar o id, e atribuir o valor a variavel chamada localidade e logradouro
            //# é pra pegar o id.
            $("#localidade").val($localidade);
            $("#logradouro").val($logradouro);
         },
        error: function (err) { }
    })
});