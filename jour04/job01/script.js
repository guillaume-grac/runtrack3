$('#button').click(function() {

    $.ajax({
        type: "GET",
        url: "expression.txt",
        // message en cas d'erreur :
        error:function(){
            alert( "Error !");
        },
        // affiche le contenu du fichier dans le conteneur dédié :
        success:function(data){
            $('#citation').text(data);
        }
    });
})



