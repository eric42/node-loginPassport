$(document).ready(function(){


  let countContatos = $("#listaContatosTamanho").val();
  let countInteresses = $("#listaInteressesTamanho").val();
  let countCursos = $("#listaCursosTamanho").val();
  let countIdioma = $("#listaIdiomaTamanho").val();
  let countExperiencias = $("#listaExperienciasTamanho").val();
  $('.deleteButton').on('click',function(){
    var id = $(this).data('id');
    var url = '/usuario/'+id;
      if(confirm('Deseja deletar o usuario '+$(this).data('nome')+' ?')){
        $.ajax({url: url,type: 'DELETE',
          sucess: function(result){
            console.log('Deletando usuario '+$(this).data('nome'));
          },error: function(err){
            console.log(err);
          }
        }).done(function(){
            window.location.href='/logout';
        });
      }
  });


  $('.removeCurriculo').on('click',function(){
    if(confirm('Deseja deletar o curriculo?')){
      document.getElementById('a_'+$(this).data('id')).innerHTML = "Sem Arquivo";
      document.getElementById('a_'+$(this).data('id')).href = "#";
      document.getElementById($(this).data('id')).value = "Sem Arquivo";
    }
  });

  $('.removeCertificado').on('click','button',function(){
    if(confirm('Deseja remover o certicado?')){
      document.getElementById('certificado_'+$(this).data('id')).remove();
    }
    return false;
  });


  $('.addContato').on('click',function(){
    
    if(isNaN(countContatos)){
      countContatos = 0;
    }

    countContatos++;

    let divContatos = document.getElementById("divContatos");
    divContatos.innerHTML = divContatos.innerHTML +
    '<div id="divContatos'+countContatos+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><hr><div class="form-row"> \
     <div class="col-lg-4 col-xl-4 col-sm-12 col-md-4 mb-3"> \
      <label for="listaContatos['+countContatos+'][tipoTelefone]">Tipo</label> \
      <input type="text" name="listaContatos['+countContatos+'][tipoTelefone]" id="listaContatos['+countContatos+'][tipoTelefone]" list="tipos" class="form-control" autocomplete="off" required> \
      <datalist id="tipos"> \
        <option>Celular</option><option>Residencial</option><option>Empresarial</option> \
      </datalist> \
     </div> \
     <div class="col-lg-6 col-xl-6 col-sm-6 col-md-6 mb-3"> \
      <label for="listaContatos['+countContatos+'][telefone]">Numero</label> \
      <input type="text" name="listaContatos['+countContatos+'][telefone]" id="listaContatos['+countContatos+'][telefone]" class="telefone form-control" required > \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeContato" data-id="'+countContatos+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
    </div></div><hr/>';
  });


  $('#divContatos').on('click','button',function(){
    if(confirm('Deseja remover o contato?')){
      document.getElementById('divContatos'+$(this).data('id')).remove();
    }
    return false;
  });


  $('.addAreasInteresses').on('click',function(){
    
    if(isNaN(countInteresses)){
      countInteresses = 0;
    }

    countInteresses++;

    let divInteresses = document.getElementById("divInteresses");
    divInteresses.innerHTML = divInteresses.innerHTML +
    '<div id="divInteresses'+countInteresses+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><div class="form-row"> \
      <div class="col-lg-10 col-xl-10 col-sm-10 col-md-10 mb-3"> \
        <input type="text" name="listaInteresse['+countInteresses+']" id="listaInteresse['+countInteresses+']" class="form-control" required> \
      </div> \
      <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
        <button class="btn btn-danger fa fa-times removeInteresse" data-id="'+countInteresses+'" type="button"></button> \
      </div> \
    </div>';
  });

  $('#divAreaInteresses').on('click','button',function(){
    if(confirm('Deseja remover o contato?')){
      document.getElementById('divContatos'+$(this).data('id')).remove();
    }
    return false;
  });

  $('.addCursos').on('click',function(){
    
    if(isNaN(countCursos)){
      countCursos = 0;
    }

    countCursos++;

    let divCursos = document.getElementById("divCursos");
    divCursos.innerHTML = divCursos.innerHTML +
    '<div id="divCursos'+countCursos+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><hr><div class="form-row"> \
     <div class="col-lg-10 col-xl-10 col-sm-10 col-md-10 mb-3"> \
      <label for="listaCursos['+countCursos+'][titulo]">Titulo</label> \
      <input type="text" name="listaCursos['+countCursos+'][titulo]" id="listaCursos['+countCursos+'][titulo]" class="form-control" required > \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeCurso" data-id="'+countCursos+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
     <div class="col-lg-4 col-xl-4 col-sm-4 col-md-4 mb-3"> \
      <label for="listaCursos['+countCursos+'][data_conclusao]">Data Conclusao</label> \
      <input type="text" name="listaCursos['+countCursos+'][data_conclusao]" id="listaCursos['+countContatos+'][data_conclusao]" placeholder="MM/AAAA" class="data-mes-ano form-control" required > \
     </div> \
     <div class="col-lg-8 col-xl-8 col-sm-8 col-md-8 mb-3"> \
      <label for="listaCursos['+countCursos+'][instituicao]">Instituição</label> \
      <input type="text" name="listaCursos['+countCursos+'][instituicao]" id="listaCursos['+countCursos+'][instituicao]" class="form-control" required > \
     </div> \
    </div></div><hr/>';
  });

  $('#divCursos').on('click','button',function(){
    if(confirm('Deseja remover o curso?')){
      document.getElementById('divCursos'+$(this).data('id')).remove();
    }
    return false;
  });

  $('.addIdiomas').on('click',function(){
    
    if(isNaN(countIdioma)){
      countIdioma = 0;
    }

    countIdioma++;

    let divIdiomas = document.getElementById("divIdiomas");
    divIdiomas.innerHTML = divIdiomas.innerHTML +
    '<div id="divIdiomas'+countIdioma+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><div class="form-row"> \
     <div class="col-lg-5 col-xl-5 col-sm-12 col-md-5 mb-3"> \
      <label for="listaCursos['+countIdioma+'][idioma]">Idioma</label> \
      <input type="text" name="listaContatos['+countIdioma+'][idioma]" id="listaContatos['+countIdioma+'][idioma]" class="form-control" required > \
     </div> \
     <div class="col-lg-5 col-xl-5 col-sm-12 col-md-5 mb-3"> \
      <label for="listaContatos['+countIdioma+'][nivel]">Nivel</label> \
      <input type="text" name="listaContatos['+countIdioma+'][nivel]" id="listaContatos['+countIdioma+'][nivel]" list="niveis" class="form-control" autocomplete="off" required> \
      <datalist id="niveis"> \
        <option>Fluente</option><option>Intermediário</option><option>Basico</option> \
      </datalist> \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeIdioma" data-id="'+countIdioma+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
    </div></div><hr/>';
  });

  $('#divIdiomas').on('click','button',function(){
    if(confirm('Deseja remover o idioma?')){
      document.getElementById('divIdiomas'+$(this).data('id')).remove();
    }
    return false;
  });

  $('.addExperiencias').on('click',function(){
    
    if(isNaN(countExperiencias)){
      countExperiencias = 0;
    }

    countExperiencias++;

    let divExperiencias = document.getElementById("divExperiencias");
    divExperiencias.innerHTML = divExperiencias.innerHTML +
    '<div id="divExperiencias'+countExperiencias+'" class="col-lg-12 col-xl-12 col-sm-12 col-md-12"><hr><div class="form-row"> \
     <div class="col-lg-10 col-xl-10 col-sm-10 col-md-10 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][empresa]">Empresa</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][empresa]" id="listaExperiencia['+countExperiencias+'][empresa]" class="form-control" required > \
     </div> \
     <div class="col-lg-2 col-xl-2 col-sm-2 col-md-2 mb-3"> \
      <button class="btn btn-danger fa fa-times removeCurso" data-id="'+countExperiencias+'" style="margin-bottom: -70px" type="button"></button> \
     </div> \
     <div class="col-lg-6 col-xl-6 col-sm-12 col-md-6 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][cargo]">Cargo</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][cargo]" id="listaExperiencia['+countExperiencias+'][cargo]" class="form-control" required > \
     </div> \
     <div class="col-lg-3 col-xl-3 col-sm-6 col-md-3 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][data_inicio]">De</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][data_inicio]" id="listaExperiencia['+countExperiencias+'][inicio]" placeholder="MM/AAAA" class="data-mes-ano form-control" required > \
     </div> \
     <div class="col-lg-3 col-xl-3 col-sm-6 col-md-3 mb-3"> \
      <label for="listaExperiencia['+countExperiencias+'][data_fim]">Até</label> \
      <input type="text" name="listaExperiencia['+countExperiencias+'][data_fim]" id="listaExperiencia['+countExperiencias+'][data_fim]" placeholder="MM/AAAA" class="data-mes-ano form-control" required > \
     </div> \
     <div class="col-lg-12 col-xl-12 col-sm-12 col-md-12 mb-3"> \
      <textarea rows="3" name="listaExperiencia['+countExperiencias+'][descricao]" class="form-control" required></textarea> \
     </div> \
    </div></div><hr/>';
  });

  $('#divExperiencias').on('click','button',function(){
    if(confirm('Deseja remover a experiência?')){
      document.getElementById('divExperiencias'+$(this).data('id')).remove();
    }
    return false;
  });

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

});