<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Job02</title>
</head>
<body style="">
    <section style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div id='melangees' style="border: 2px solid black;width: 820px; height: 400px;">
                <img src="arc0.png" id='image_1' draggable="true" ondragstart="drag(event)">
                <img src="arc1.png" id='image_2' draggable="true" ondragstart="drag(event)">
                <img src="arc2.png" id='image_3' draggable="true" ondragstart="drag(event)">
                <img src="arc3.png" id='image_4' draggable="true" ondragstart="drag(event)">
                <img src="arc4.png" id='image_5' draggable="true" ondragstart="drag(event)">
                <img src="arc5.png" id='image_6' draggable="true" ondragstart="drag(event)">
            </div><br>
            <button id='button' type='submit'>mélanger</button><br>
            <div style="border: 2px solid black;width: 820px; height: 400px;" id='rangees' ondrop="drop(event)" ondragover="allowDrop(event)">

            </div>
    </section>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type='text/javascript' src='script.js'></script>
</body>
</html>