<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Job02</title>
</head>
<body style="">
    <section>
            <div id='melangees' style='height:45vh; width:100vh; border:1px solid black;'>
                <img src="arc1.png" id='image_1' draggable="true" ondragstart="drag(event)">
                <img src="arc2.png" id='image_2' draggable="true" ondragstart="drag(event)">
                <img src="arc3.png" id='image_3' draggable="true" ondragstart="drag(event)">
                <img src="arc4.png" id='image_4' draggable="true" ondragstart="drag(event)">
                <img src="arc5.png" id='image_5' draggable="true" ondragstart="drag(event)">
                <img src="arc6.png" id='image_6' draggable="true" ondragstart="drag(event)">
            </div>
            <div id='rangees' style='height:45vh; width:100vh; border:1px solid black;' ondrop="drop(event)" ondragover="allowDrop(event)">

            </div>
        <button id='button' type='submit'>mélanger</button>
    </section>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type='text/javascript' src='script.js'></script>
</body>
</html>