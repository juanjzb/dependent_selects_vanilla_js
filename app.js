const country = document.getElementById('country')
const city = document.getElementById('city')

const countries = ['Nicaragua', 'USA', 'España']
const Nicaragua = ['Esteli', 'Leon', 'Matagalpa']
const USA = ['Texas', 'Florida']
const España = ['Bilbao', 'Madrid', 'Barcelona']

function fillCities (country) {
  city.innerHTML = ''
  if (country == 'Nicaragua') {
    Nicaragua.forEach(element => {
      city.innerHTML += `<option value="${element}">${element}</option>`
    })
  } else if (country == 'USA') {
    USA.forEach(element => {
      city.innerHTML += `<option value="${element}">${element}</option>`
    })
  } else {
    España.forEach(element => {
      city.innerHTML += `<option value="${element}">${element}</option>`
    })
  }
}

country.addEventListener('change', () => {
  fillCities(country.value)
})

function fillCountries (countries) {
  country.innerHTML = ''
  countries.forEach(element => {
    country.innerHTML += `<option value="${element}">${element}</option>`
  })
}

fillCountries(countries)
fillCities(countries[0])
