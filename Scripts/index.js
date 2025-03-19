/**
 * Script JS pour le CV qui gère l'interaction avec le bouton d'impression
 */

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner le bouton d'impression
    const printButton = document.querySelector('.print-button');
    
    // Ajouter un écouteur d'événement pour le clic sur le bouton d'impression
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Journaliser que le script est chargé
    console.log('Script CV chargé avec succès');

});