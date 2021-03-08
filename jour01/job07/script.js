function jourTravaille (date) {

    let jourFeries = [
        '2020-01-01',
        '2020-04-13',
        '2020-05-01',
        '2020-05-08',
        '2020-05-21',
        '2020-06-01',
        '2020-07-14',
        '2020-09-15',
        '2020-11-01',
        '2020-11-11',
        '2020-12-25'];
    let dateType = new Date(date);
    console.log("DATE = " + date);

    //définition du jour
    let jour = new Intl.DateTimeFormat('fr',{ weekday: 'long'}).format(dateType);
    console.log("JOUR DE LA SEMAINE = " + jour);

    //définition du n° du jour dans le mois
    let numeroday = new Intl.DateTimeFormat('fr',{ day: 'numeric'}).format(dateType);
    console.log("Numero du jour dans le mois = " + numeroday);

    //definition du mois
    let mois = new Intl.DateTimeFormat('fr',{ month: 'long'}).format(dateType);
    console.log("Le mois = " + mois);

    //définition année
    let annee = new Intl.DateTimeFormat('fr',{ year: 'numeric'}).format(dateType);
    console.log("annee = " + annee);



    if (jourFeries.includes(date)) {
        console.log("Le " + jour + " " + numeroday + " " + mois + " " + annee + " est un jour férié")
    }
    else if(jour === "samedi" || jour === "dimanche") {
        console.log("Non, le " + jour + " " + numeroday + " " + mois + " " + annee + " est un weekend")
    }
    else if(!jourFeries.includes(date)) {
        console.log("Oui, le " + jour + " " + numeroday + " " + mois + " " + annee + " est un jour travaillé")
    }
}
console.log(jourTravaille('2020-12-28'));