const generateBtn = document.getElementById('generateBtn');
const randomCountryElem = document.getElementById('randomCountry')
const newFlag = document.getElementById('countryFlag')
const countryCurrency = document.getElementById('countryCurrency')
const nameCapital = document.getElementById('capitals')
const nameContinent = document.getElementById('continent')
const population = document.getElementById('population')


fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    generateBtn.addEventListener('click', () => {
        const generateRandom = Math.floor(Math.random() * data.length)
        const randomCountry = data[generateRandom]
        const flag = randomCountry.flags.svg
        const currencies = Object.values(randomCountry.currencies).map(currency => currency.name).join(', ');
        const nameOfCapital = randomCountry.capital;
        const randomContinent = randomCountry.region;
        const randomPopulation = randomCountry.population;


    randomCountryElem.textContent = randomCountry.name.common;
    newFlag.setAttribute('src', flag);

    countryCurrency.innerHTML = `<p><strong>Currency:</strong> ${currencies}</p>`
    nameCapital.innerHTML = `<p> <strong>Capital:</strong> ${nameOfCapital}</p>`
    nameContinent.innerHTML = `<p><strong>Location:</strong> ${randomContinent}</p>`
    population.innerHTML = `<p>Population: ${randomPopulation}</p>`
    console.log(randomCountry)
              
    })
          
})




        
        
    
        




   


.catch(error => console.error(error));






