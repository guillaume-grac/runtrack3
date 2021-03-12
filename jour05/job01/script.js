/* AFFICHAGE DU FORMULAIRE D'INSCRIPTION */
$.ajax({
    url: "inscription.php",
    type: "POST",
    dataType: "html",

    success:function (data){

        $('#realreturn').hide();
        $('#inscription').click(function (){

            $('#displayForm').append(data);
            $('#link').hide();
            $('#realreturn').show().click(() =>{

                $('#link').show();
                $('#displayForm').empty();
                $('#realreturn').hide();
            });
        });
    }
});

/* AFFICHAGE DU FORMULAIRE DE CONNEXION */
$.ajax({
    url: "connexion.php",
    type: "POST",
    dataType: "html",

    success:function (data){

        $('#realreturn').hide();
        $('#connexion').click(function (){

            $('#displayForm').append(data);
            $('#link').hide();
            $('#realreturn').show().click(() =>{

                $('#link').show();
                $('#displayForm').empty();
                $('#realreturn').hide();
            });
        });
    }
});