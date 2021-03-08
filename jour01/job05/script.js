
function afficherjourssemaines(){

    let jourssemaines = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

    semaineLength = jourssemaines.length;

    for (i = 0; i < semaineLength; i++){

        document.write(jourssemaines[i], '<br />');
    }
}
