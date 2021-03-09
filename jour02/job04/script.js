//Créez un textarea dont l’id est “keylogger”. Chaque fois que l’utilisateur
// tape une lettre sur son clavier (a-z), celle-ci est ajoutée dans le textarea
// (même si le focus en cours n’est pas le textarea). Si c’est le cas, la lettre
// doit être ajoutée deux fois.

    function keylogger(e){

        let keynum;

        if (document.event){

            keynum = e.keyCode;

        }
        else if (e.which){

            keynum = e.which;
        }

        document.getElementById('textarea').textContent += String.fromCharCode(keynum);
    }
document.onkeypress = function (){

    keylogger(e)
};

document.addEventListener("keypress", keylogger, true);