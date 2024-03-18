document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://cdn.taux.live/api/latest.json';
    let rates = {};

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            rates = data.rates;
            document.querySelectorAll('.currency-select').forEach(select => {
                for (const currency in rates) {
                    const option = document.createElement('option');
                    option.value = currency;
                    option.textContent = currency;
                    select.appendChild(option);
                }
            });
        });

    document.querySelectorAll('.currency-select, .input-number').forEach(element => {
        element.addEventListener('input', convertCurrency);
    });

    function convertCurrency() {
        const amount = document.getElementById('amount').value; // Assurez-vous d'ajouter l'ID 'amount' à votre input de montant
        const fromCurrency = document.getElementById('currencySelect1').value;
        const toCurrency = document.getElementById('currencySelect2').value;
        const result = (amount * rates[toCurrency]) / rates[fromCurrency];
        document.getElementById('result').value = result.toFixed(2); // Assurez-vous d'avoir un input avec l'ID 'result' pour afficher le résultat
    }
});
