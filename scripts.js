document.addEventListener("DOMContentLoaded", function() {
    const frBtn = document.getElementById("fr-btn");  // Sélecteur pour le bouton français
    const enBtn = document.getElementById("en-btn");  // Sélecteur pour le bouton anglais

    // Fonction pour changer la langue
    function switchLanguage(language) {
        document.querySelectorAll("[data-fr]").forEach(element => {
            element.textContent = element.getAttribute(`data-${language}`);  // Mise à jour du texte
        });
    }

    // Écouteur pour le bouton français
    frBtn.addEventListener("click", function(event) {
        event.preventDefault();
        switchLanguage("fr");
    });

    // Écouteur pour le bouton anglais
    enBtn.addEventListener("click", function(event) {
        event.preventDefault();
        switchLanguage("en");
    });

    // Charge par défaut la page en français
    switchLanguage("fr");
});
