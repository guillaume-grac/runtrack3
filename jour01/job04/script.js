bissextile();


function bissextile(annee)
{
    return isBissextile(annee) ? 366 : 365;
}

function isBissextile(annee)
{
    return annee % 400 === 0 || (annee % 100 !== 0 && annee % 4 === 0);
}

console.log(bissextile(2024));