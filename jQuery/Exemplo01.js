$(function () {

    //var nome='';
    $nome = '';

    // $('#cep').on('blur', function () {
    //     buscarCEP();
    // });

    // Através do evt vai permitir pegar o id do enter, evt=evento
    $('#cep').on("keypress", function (evt) {
        if (evt.keyCode == 13) {
            buscarCEP();
        }
    })

    function buscarCEP() {
        // document.getElementById("cep").value
        $cep = $('#cep').val().replace('-','');

        if($cep.length !=8){
            alert('Tamanho do cep inválido');
            $('#cep').focus();
            return;
        }
        // Para criar o Ajax
        $.ajax({
            url: 'https://viacep.com.br/ws/' + $cep + '/json/',
            method: 'get',
            success: function (data) {
                $localidade = data.localidade;
                $logradouro = data.logradouro;
                $unidadeFederativa = data.uf;

                // Vai pegar o id, e atribuir o valor a variavel chamada localidade e logradouro
                //# é pra pegar o id.
                $('#localidade').val($localidade);
                $('#logradouro').val($logradouro);
                $('#unidade-federativa').val($unidadeFederativa);
                $('#numero').focus();
            },
            error: function (err) {
                alert('CEP inválido');
                $("#cep").focus()
            }
        })
    }


});