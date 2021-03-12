/* BOUTON REVENIR */
/*$.ajax({
    url: "index.php",
    type: "POST",
    dataType: "html",

    success:function (data){

        $('#return').click(function (){

        })
    }
})*/

/* AFFICHAGE DU FORMULAIRE D'INSCRIPTION */
$.ajax({
    url: "inscription.php",
    type: "POST",
    dataType: "html",

    success:function (data){

        $('#inscription').click(function () {

            $('#displayForm').append(data);
            $('#link').empty();
        });
    }
});

/* AFFICHAGE DU FORMULAIRE DE CONNEXION */
$.ajax({
    url: "connexion.php",
    type: "POST",
    dataType: "html",

    success:function (data){

        $('#connexion').click(function () {

            $('#displayForm').append(data);
            $('#link').empty();
        });
    }
})