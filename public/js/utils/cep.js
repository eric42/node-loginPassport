
  $("#cep").blur(function() {

    if ($(this).val().replace(/\D/g, '') != "") {

      let validacep = /^[0-9]{8}$/;

      if(validacep.test($(this).val().replace(/\D/g, ''))) {

        $.getJSON("https://viacep.com.br/ws/"+ $(this).val().replace(/\D/g, '') +"/json/?callback=?", function(dados) {
          if (!("erro" in dados)) {

            $("#endereco").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#uf").val(dados.uf);
          } else {

            limpa_formulario_cep();
            alert("CEP não encontrado.");
          }
        });
      } else {

        limpa_formulario_cep();
        alert("Formato de CEP inválido.");
      }
    } else {

      limpa_formulario_cep();
    }
  });


  function limpa_formulario_cep(){

    $("#endereco").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
  }