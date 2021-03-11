/*
let melange = document.getElementById("melangees");

$('#button').click(function() {
        for (let i = melange.children.length; i >= 0; i--) {
                melange.appendChild(melange.children[Math.random() * i | 0]);
        }
});

//Récupération image1

/*let secondDiv1 = document.getElementById('secondDiv1');
let div1 = document.getElementById('div1');
let temp = document.getElementById('div1').innerHTML;

div1.innerHTML = secondDiv1.innerHTML;
secondDiv1.innerHTML = temp

//Déplacement image

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
}); */

$('#button').click(function (){

        var parent = $("#melangees");
        var divs = parent.children();

        while (divs.length) {
                parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
})

function allowDrop(ev) {

        ev.preventDefault(); // prevent default permet de remettre a leur place les drag qui n'ont pas été droppé
        console.log("ALLOWDROP");
}

function drag(ev) {

        ev.dataTransfer.setData("text", ev.target.id);
        console.log("DRAG START");
} //DataTransfer contient les données glissées au cours d'une opération de glisser-déposer.

function drop(ev) {

        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));  //target se réfère à l'élément cliqué

        var parent = $("#rangees");
        var child = parent.children();
        var solution = ['image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6'];
        console.log(child[0].id);

        for (i = 0; child[i] && child[i].id === solution[i]; i++); //
        console.log(i);

        if (child.length === 6 && i === 6) {
                console.log('gagn"');
        }
        else if (child.length === 6 && i !== 6)
                console.log("error");
}