$('#button').click(function (){

    $.ajax({
        url: 'user.php',
        dataType: 'json',
        type: 'GET'

    }).done(function (data){

        data.forEach(value =>{

            $("#tBody").append('<tr>')

            for (const property in value) {

                $("#tBody").append('<td>' + value[property] + '</td>')
            }

            $("#tBody").append('</tr>')
        })
    })
})