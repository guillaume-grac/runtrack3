//Créez une balise button ayant comme id “button”. Lorsque l’on clique
// dessus, un <article> contenant le texte suivant est ajouté au contenu de la
// page : “L'important n'est pas la chute, mais l'atterrissage.”. Si on clique à
// nouveau sur ce bouton, l’article disparaît. L’apparition / Disparition doivent
// être gérées dans une fonction nommée “showhide()”.

function showHide(){

    let button = document.getElementById("button");

    button.onclick = function showAndHide(){

        let citation = document.getElementById("citation");

        //Pour afficher l'article :

        if (citation.style.display === "none"){

            citation.style.display = "block";
        }

        //Pour masquer l'article :

        else{

            citation.style.display = "none";
        }
    }
}