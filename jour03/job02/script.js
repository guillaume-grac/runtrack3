
/*$('#button').click(function(){
        $('#1').attr('src', "arc" + Math.floor(Math.random() * 6) + ".png");
        $('#2').attr('src', "arc" + Math.floor(Math.random() * 6) + ".png");
        $('#3').attr('src', "arc" + Math.floor(Math.random() * 6) + ".png");
        $('#4').attr('src', "arc" + Math.floor(Math.random() * 6) + ".png");
        $('#5').attr('src', "arc" + Math.floor(Math.random() * 6) + ".png");
        $('#6').attr('src', "arc" + Math.floor(Math.random() * 6) + ".png");*/

let melange = document.getElementById("melangees");

$('#button').click(function() {
        for (let i = melange.children.length; i >= 0; i--) {
                melange.appendChild(melange.children[Math.random() * i | 0]);
        }
});

/* Récupération image1 */

/*let secondDiv1 = document.getElementById('secondDiv1');
let div1 = document.getElementById('div1');
let temp = document.getElementById('div1').innerHTML;

div1.innerHTML = secondDiv1.innerHTML;
secondDiv1.innerHTML = temp*/

/* Déplacement image */

$('#div1').click(function ()
{
        let div1 = document.getElementById('div1');
        let secondDiv1 = document.getElementById('secondDiv1');
        let temp = document.getElementById('secondDiv1').innerHTML;

        secondDiv1.innerHTML = div1.innerHTML;
        div1.innerHTML = temp;
});

$('#div2').click(function ()
{
        let div2 = document.getElementById('div2');
        let secondDiv2 = document.getElementById('secondDiv2');
        let temp = document.getElementById('secondDiv2').innerHTML;

        secondDiv2.innerHTML = div2.innerHTML;
        div2.innerHTML = temp;
});

$('#div3').click(function ()
{
        let div3 = document.getElementById('div3');
        let secondDiv3 = document.getElementById('secondDiv3');
        let temp = document.getElementById('secondDiv3').innerHTML;

        secondDiv3.innerHTML = div3.innerHTML;
        div3.innerHTML = temp;
});

$('#div4').click(function ()
{
        let div4 = document.getElementById('div4');
        let secondDiv4 = document.getElementById('secondDiv4');
        let temp = document.getElementById('secondDiv4').innerHTML;

        secondDiv4.innerHTML = div4.innerHTML;
        div4.innerHTML = temp;
});

$('#div5').click(function ()
{
        let div5 = document.getElementById('div5');
        let secondDiv5 = document.getElementById('secondDiv5');
        let temp = document.getElementById('secondDiv5').innerHTML;

        secondDiv5.innerHTML = div5.innerHTML;
        div5.innerHTML = temp;
});

$('#div6').click(function ()
{
        let div6 = document.getElementById('div6');
        let secondDiv6 = document.getElementById('secondDiv6');
        let temp = document.getElementById('secondDiv6').innerHTML;

        secondDiv6.innerHTML = div6.innerHTML;
        div6.innerHTML = temp;
});