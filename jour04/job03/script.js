$('#button').click(function ()
{
    let idPokemon = document.getElementById('#id');
    let namePokemon = document.getElementById('#name');
    let type = document.getElementById('#selectType');

    $.ajax({
        url: 'pokemon.json',
        type: 'GET',
        dataType: 'text',

        success:function (data)
        {
            console.log(data)
        }
    });
});