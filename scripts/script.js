const apiUrl = 'https://cdn.taux.live/api/latest.json';

console.log(apiUrl);

// Récupération des données de l'API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const rates = data.rates;
    const currencySelects = document.querySelectorAll('.currency-select'); // Utiliser une classe pour sélectionner les deux
    currencySelects.forEach(select => {
      // Parcourir chaque taux de change
      for (const [currency, rate] of Object.entries(rates)) {
        // Créer un élément option pour chaque devise
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = `${currency} - ${rate}`;
        // Ajouter l'option au select courant
        select.appendChild(option);
      }
    });
  })
  .catch(error => console.error('Erreur lors de la récupération des devises:', error));


  