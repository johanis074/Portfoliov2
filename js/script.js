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