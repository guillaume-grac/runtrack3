//Créez un button ayant comme id “button”. Créez un article ayant comme id
// “compteur” et contenant “0”. Ce contenu doit évoluer proportionnellement
// au nombre d'événements click reçu par le bouton. Vous ne devez pas
// utiliser “onclick()” dans votre html. La fonction permettant d’effectuer la
// modification doit s'appeler “addone()”.

function addone(){

    let button = document.getElementById("button");
    let nb = 0;

    button.onclick = function oneMore(){

        nb = nb + 1;

        document.getElementById("compteur").innerHTML = nb;
    }
}