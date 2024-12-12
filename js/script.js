const pages = document.querySelectorAll('.page');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        let currentPage = 0; // Index de la page actuelle

        // Fonction pour mettre à jour l'état des pages et des boutons
        function updateBook() {
            pages.forEach((page, index) => {
                if (index < currentPage) {
                    page.classList.add('turned');
                    page.style.zIndex = pages.length - index; // Garder les pages précédentes empilées
                } else if (index === currentPage) {
                    page.classList.remove('turned');
                    page.style.zIndex = pages.length; // La page actuelle est devant
                    page.style.visibility = "visible";
                } else {
                    page.classList.remove('turned');
                    page.style.zIndex = pages.length - index;
                    page.style.visibility = "visible";
                }
            });

            // Gérer l'état des boutons
            prevButton.disabled = currentPage === 0;
            nextButton.disabled = currentPage === pages.length - 1;
        }

        // Événements pour les boutons
        prevButton.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                updateBook();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentPage < pages.length - 1) {
                currentPage++;
                updateBook();
            }
        });

        // Initialisation
        updateBook();
        // Initialiser EmailJS avec votre User ID
        (function () {
          emailjs.init({publicKey:"hRpjoLnJtKJV8-D9M"}); // Remplacez par votre User ID
        })();
        
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault(); // Empêche le formulaire de recharger la page
        
            // Récupère les données du formulaire
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
        
            // Préparer les paramètres pour EmailJS
            // On récupère les valeurs des input dans un objet
            // Adaptez à vos propres champs de texte
            const templateParams = {
                name: name,
                email: email,
                message: message,
            };
        
            // Envoyer l'email via EmailJS
            emailjs.send("service_n0ptqlr", "template_rey08o7", templateParams).then(
                function (response) {
                    alert("Message envoyé avec succès !");
                },
                function (error) {
                    alert("Erreur lors de l'envoi du message : " + error.text);
                },
            );
        
            // Réinitialise le formulaire après l'envoi
            document.getElementById("contactForm").reset();
        });
    