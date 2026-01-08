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
                <img src="media/${epoqueData.image}" alt="Pas encore définie">
            </figure>

            <h2>Les années ${epoqueData.epoque}</h2>

            <button type="button" class="open-modal">
                En savoir plus
            </button>
            </article>
            <dialog class="epoque-modal">
                <h3>Les caractéristiques des années ${epoqueData.epoque}</h3>
                <ul>
                    <li>Date de début: ${epoqueData.dateDebut}</li>
                    <li>Date de fin: ${epoqueData.dateFin}</li>
                    <li>Genre: ${epoqueData.genre}</li>
                </ul>
                <h4>Artistes principaux:</h4>
                <ul>
                    ${listeArtistesHTML}
                </ul>
                <button type="button" class="close-modal">fermer</button>
                </dialog>
`;

// 3. Ajout de la card au conteneur
epoqueContainer.innerHTML += article;
}

// gestion des modales
const openModalButtons = document.querySelectorAll(".open-modal");
const closeModalButtons = document.querySelectorAll(".close-modal");

openModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const modal = document.querySelectorAll(".epoque-modal")[index];
        modal.showModal();
    });
});

closeModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const modal = document.querySelectorAll(".epoque-modal")[index];
        modal.close();
    });
});