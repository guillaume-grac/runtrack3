<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>job03</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
<header>
    <div>
        <nav class ="orange lighten-3">
            <div class="nav-wrapper">
                <ul class="hide-on-med-and-down  left">
                    <li ><a href="index.php" class="black-text">Accueil</a></li>
                    <li><a href="index.php" class="black-text">Inscription</a></li>
                    <li><a href="index.php" class="black-text">Connexion</a></li>
                    <li>
                        <div class="center row">
                            <div class="col s12" >
                                <div class="row">
                                    <div class="input-field col s6 s12 black-text">
                                        <i class="green-text material-icons prefix">search</i>
                                        <input type="text" class="blue-text">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
<main style="margin-top: 10%; margin-bottom: 5%;">
    <section class="container">
        <form method="post">
            <section>
                <label>Civilité</label>
                <input type="radio" name="civilite" value="Mr" id="Mr" checked="checked"/>
                <label for="Mr">Mr</label>
                <input type="radio" name="civilite" value="Mme" id="Mme"/>
                <label for="Mme">Mme</label>
            </section><br>
            <section>
                <label>Nom:</label><br>
                <input type="text" name="nom" id="nom"/><br><br>
                <label>Prénom:</label><br>
                <input type="text" name="prenom" id="prénom"/><br><br>
                <label>Adresse:</label><br>
                <input type="text" name="adresse" id="adresse" /><br><br>
                <label>Mail:</label><br>
                <input type="email" name="mail" id="mail" /><br><br>
                <label>Mdp:</label><br>
                <input type="password" name="password" id="password" /><br><br>
                <label>Confirmez Mdp:</label><br>
                <input type="password" name="Cpassword" id="Cpassword" /><br><br>
                <section>
                    <p>Vos passions :</p>
                    <input type="checkbox" id="informatique" name="informatique" >
                    <label for="informatique">Informatique</label>
                    <input type="checkbox" id="voyages" name="voyages" >
                    <label for="voyages">Voyages</label>
                    <input type="checkbox" id="sport" name="sport" >
                    <label for="sport">Sport</label>
                    <input type="checkbox" id="lecture" name="lecture" >
                    <label for="lecture">Lecture</label>
                </section>
            </section><br>
            <input type="submit" value="Envoyer le formulaire">
        </form>
    </section>
</main>
<footer class="page-footer orange lighten-3">
    <div class="container ">
        <div class="row">
            <div class="col l6 s12">
                <p class="grey-text text-lighten-4">Le footer se trouve en bas de page ...</p>
            </div>
            <div class="col l4 offset-l2 s12">
                <ul>
                    <li ><a href="index.php" class="black-text">Accueil</a></li>
                    <li><a href="index.php" class="black-text">Inscription</a></li>
                    <li><a href="index.php" class="black-text">Connexion</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright orange darken-3">
        <div class="container ">
            © 2021 La Plateforme_
        </div>
    </div>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>