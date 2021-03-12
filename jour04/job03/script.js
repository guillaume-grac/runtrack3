$('#button').click(function (){

    $.ajax({
        url: 'pokemon.json',
        type: 'GET',
        dataType: 'JSON',

        success:function (data){

            var idPok = document.getElementById("id").value;
            var nomPok = document.getElementById("nom").value;
            var typePok = document.getElementById("type").value;


            if (idPok || nomPok || typePok) {

                for (var i = 0; i < data.length; i++) {

                    var row = $('<p> Nom : ' + data[i].name.french + '<br> Type : ' + data[i].type + '<br>Attaque : ' + data[i].base.Attack + '</p>');

                    if (idPok) {
                        if ($('#id').val() == data[i].id) {
                            $('#demo').append(row);
                        }
                    }

                    if (nomPok) {
                            if ($('#nom').val() == data[i].name.french) {
                                $('#demo').append(row);
                            }
                    }

                    if (typePok) {
                            if ($('#type').val() == data[i].type) {
                                $('#demo').append(row);
                            }
                    }
                }
            }
        }
    });
});