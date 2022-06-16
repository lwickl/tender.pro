const usdRate = {};
const elementUSD = document.querySelector('[data-value="USD"]');

getCurrencies();

async function getCurrencies() {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();

    usdRate.USD = data.Valute.USD;

    elementUSD.textContent = usdRate.USD.Value.toFixed(2);
}
