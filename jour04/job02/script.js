
// Au lieu de tout mettre dans un fichier .json, j'ai préferer tout mettre ici.
//On aurait pu le faire en reprenant le job01 mais flemme :).

//Ici j'ai donc mon Json.

var myJSON = '{"name": "La Plateforme_", "address": "8 rue dhozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}';


function jsonValueKey(myJSON, city){

    //Je transforme mon Json en objet JS.
    var myNewJSON = JSON.parse(myJSON);

    return myNewJSON[city];

}

console.log(jsonValueKey(myJSON,"city"));

//document.getElementById("citation").innerHTML += myNewJSON['city'];