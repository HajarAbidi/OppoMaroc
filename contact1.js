document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;

    // Vérification simple des champs
    if (nom && email && sujet && message) {
        alert('Merci, ' + nom + '! Votre message a bien été envoyé.');
        document.getElementById('contact-form').reset(); // Réinitialise le formulaire
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
