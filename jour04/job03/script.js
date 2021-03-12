$('#button').click(function (){

    var idPokemon = document.getElementById('#id');
    var nomPokemon = document.getElementById('#nom');
    var type = document.getElementById('#type');

    $.ajax({
        url: 'pokemon.json',
        type: 'GET',
        dataType: 'JSON',

        success:function (data){

            /*for (var i = 0; i !== data.length; i++){


                //console.log(data[i])
                //console.log(data[i].name)

                if (idPokemon === data[i]){

                    console.log("coucou")

                }
                console.log(data[i].type)
            }*/

            if (document.getElementById("id").value) {
                for (var i = 0; i < data.length; i++) {
                    var row = $('<tr><td>' + data[i].name.french + '</td><td>' + data[i].type + '</td><td>' + data[i].base.Attack + '</td></tr>');
                    if ($('#id').val() == data[i].id) {
                        $('#demo').append("<tr><th>Nom du Pokemon</th><th>Type de Pokemon</th><th>Attack</th></tr>");
                        $('#demo').append(row);
                    }
                }
            }
        }
    });
});