<?php

echo ('
<form action="inscription.php" method="post">
    <label for="firstname">Prénom :</label> 
    <input type="text" id="firstname" name="firstname" placeholder="Votre Prénom"><br><br>
    <label for="lastname">Nom :</label>
    <input type="text" id="lastname" name="lastname" placeholder="Votre Nom"><br><br>
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" placeholder="Votre email"><br><br>
    <label for="password">Password :</label>
    <input type="password" id="password" name="password" placeholder="Votre Password"><br><br>
    <label for="confirmPassword">Confirm Password :</label>
    <input type="password" id="confirmPassword" name="confirmPassword" placeholder=" Confirmer votre Password"><br><br>
    <button type="submit" id="register" name="register">Valider</button>
</form><br><br>
<button type="button" id="return">Revenir</button>
');

if (isset($_POST['register'])){

    $prenom = htmlspecialchars(trim($_POST['firstname']));
    $nom = htmlspecialchars(trim($_POST['lastname']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));
    $confirmPassword = htmlspecialchars(trim($_POST['confirmPassword']));

    if (!empty($prenom)){
        if (!empty($nom)){
            if (!empty($email)){
                if (!empty($password)){
                    if ($password === $confirmPassword){
                        try{
                            $pdo = new PDO('mysql:host=localhost; dbname=utilisateurs', 'root', '');
                        }
                        catch (PDOException $e){
                            die("Erreur :" . $e -> getMessage());
                        }

                        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

                        $query = $pdo -> prepare("INSERT INTO utilisateurs(prenom, nom, email, password) VALUES (:prenom, :nom, :email, :password)");
                        $query -> execute([
                            "prenom" => $prenom,
                            "nom" => $nom,
                            "email" => $email,
                            "password" => $hashedPassword
                        ]);
                    } else echo $log = "<p>Mot de passe non identique.</p>";
                } else echo $og = "<p>Renseignez un mot de passe.</p>";
            } else echo $log = "<p>Renseignez votre email.</p>";
        }else echo $log = "<p>Renseignez votre nom.</p>";
    } else echo $log = "<p>Renseignez votre prénom.</p>";
}

?>