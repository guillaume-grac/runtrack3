<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Job03</title>
</head>
<body>
    <form method="post">
        <label for="id">ID</label>
        <input name="id" id="id" type="text">
        <label for="nom">NOM</label>
        <input name="nom" id="nom" type="text">
        <label for="type">TYPE</label>
        <select id="type" name="type">
            <option>Selectionnez le type</option>
            <option value="Grass">Grass</option>
            <option value="Poison">Poison</option>
            <option value="Fire">Fire</option>
            <option value="Flying">Flying</option>
            <option value="Water">Water</option>
            <option value="Bug">Bug</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electric</option>
            <option value="Ground">Ground</option>
            <option value="Fairy">Fairy</option>
            <option value="Fighting">Fighting</option>
            <option value="Psychic">Psychic</option>
            <option value="Rock">Rock</option>
            <option value="Steel">Steel</option>
            <option value="Ice">Ice</option>
            <option value="Ghost">Ghost</option>
            <option value="Dragon">Dragon</option>
        </select>
        <input id="button" type="button" value="Filtrer">
    </form>
    <section id="demo"></section>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type='text/javascript' src='script.js'></script>
</body>
</html>