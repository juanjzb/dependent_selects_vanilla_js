/**
 * @author Juan Jose Zeledon Benavides <zb.juanjose@gmail.com>
 */

const country = document.getElementById('country')
const city = document.getElementById('city')

/**
 * Fill Select Function.
 * @summary This function is used to fill dependent html select elements with information stored in a json file.
 * @param { HTMLSelectElement } select - The id of the select element from the html that we need to fill.
 * @param { Array } items - List of element that we are going to use to fill the select item.
 * @return {undefined} - Function does not return any value.
 */

function fillSelect (select, items) {
  select.innerHTML = ''
  items.forEach(element => {
    const option = new Option(element)
    select.add(option)
  })
  return
}

country.addEventListener('change', () => {
  fetch('./information.json')
    .then(response => response.json())
    .then(data => {
      const cities = data[country.value]
      fillSelect(city, cities)
    })
})

fetch('./information.json')
  .then(response => response.json())
  .then(data => {
    countries = Object.keys(data)
    fillSelect(country, countries)
    fillSelect(city, data[countries[0]])
  })
