const epoquesData = JSON.parse(epoques);//récupération des données JSON

// dynamisation du contenu de la section
const epoqueContainer = document.getElementById("epoques");// 1. Récupération du conteneur
for (let i = 0; i < epoquesData.length; i++) {
    const epoqueData = epoquesData[i];
    let article = "";

    // Boucle de la liste des options
let listeArtistesHTML = "";
for (let j = 0; j < epoqueData.listeArtistes.length; j++) {
    listeArtistesHTML += `<li>${epoqueData.listeArtistes[j]}</li>`;
}

// 2. Création de la card
article = `
<article class="epoque">
            <figure>
                <img src="${epoqueData.image}" alt="Pas encore définie">
            </figure>

            <h2>${epoqueData.titre}</h2>

            <button class="open-modal">
                En savoir plus
            </button>
            
            <dialog class="epoque-modal">
                <h3>Les caractéristiques des ${epoqueData.titre}</h3>
                <ul>
                    <li>Titre: ${epoqueData.titre}</li>
                    <li>Période: ${epoqueData.periode}</li>
                    <li>Genre: ${epoqueData.genre}</li>
                    <li>Resume: ${epoqueData.resume}</li>
                </ul>
                <button class="close-modal">fermer</button>
                </dialog>
                </article>
`;

// 3. Ajout de la card au conteneur
epoqueContainer.innerHTML += article;
}

// ouvrir et fermer une modale (boite de dialogue)
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
  const article = button.closest(".epoque"); // remonte dans les parents jusqu'à l'article de class hotel
  const dialog = article.querySelector(".epoque-modal"); // sélectionne la modale dans l'article
  const closeButton = dialog.querySelector(".close-modal"); // sélectionne le bouton de fermeture dans la modale

  button.addEventListener("click", () => dialog.showModal());

  closeButton.addEventListener("click", () => dialog.close());

});