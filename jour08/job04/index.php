<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>job04</title>
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
                <label><i class="small material-icons">supervisor_account </i></label>
                <input class="with-gap" name="civilite" type="radio" checked/>
                <span>Monsieur</span>
                <input class="with-gap" name="civilite" type="radio"/>
                <span>Madame</span>
            </section><br>
            <section>
                <div class="input-field col s6 s12 black-text">
                    <label><i class="small material-icons">person</i></label><br>
                    <input type="text" name="nom" id="nom" placeholder="Votre Nom"/><br><br>
                </div>
                <div class="input-field col s6 s12 black-text">
                    <label><i class="small material-icons">person_outline</i></label><br>
                    <input type="text" name="prenom" id="prénom" placeholder="Votre prénom"/><br><br>
                </div>
                <div class="input-field col s6 s12 black-text">
                    <label><i class="small material-icons">place</i></label><br>
                    <input type="text" name="adresse" id="adresse" placeholder="Votre adresse" /><br><br>
                </div>
                <div class="input-field col s6 s12 black-text">
                    <label><i class="small material-icons">mail</i></label><br>
                    <input type="email" name="mail" id="mail" placeholder="Votre mail"/><br><br>
                </div>
                <div class="input-field col s6 s12 black-text">
                    <label><i class="small material-icons">lock</i></label><br>
                    <input type="password" name="password" id="password" placeholder="Votre Mdp" /><br><br>
                </div>
                <div class="input-field col s6 s12 black-text">
                    <label><i class="small material-icons">lock_outline</i></label><br>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirmez Mdp" /><br><br>
                </div>
                <section>
                    <p>Vos passions :</p>
                    <label>
                        <input type="checkbox" id="informatique" name="informatique" />
                        <span>Informatique</span>
                    </label><br>
                    <label>
                        <input type="checkbox" id="sport" name="sport" />
                        <span>Sport</span>
                    </label><br>
                    <label>
                        <input type="checkbox" id="voyage" name="voyage" />
                        <span>Voyage</span>
                    </label><br>
                    <label>
                        <input type="checkbox" id="lecture" name="lecture" />
                        <span>Lecture</span>
                    </label>
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