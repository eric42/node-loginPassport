 $(document).ready(function(){
    
    $(function(){
      $("#foto").change(function(){
        $(".fotoAlterar").html(regexReplace($(this).val()));
      });
    });

    $('.deleteFoto').on('click',function(){
      if(confirm('Deseja deletar a foto do perfil?')){
        document.getElementById('profile_pic').src = "/images/profile/images.png";
      }
      return false
    });

    function regexReplace(nomeArquivo){
      return nomeArquivo.replace("C:\\fakepath\\","");
    }
});