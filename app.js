/**
 * @author Juan Jose Zeledon Benavides <zb.juanjose@gmail.com>
 */

const main = document.getElementById('country')
const dependent = document.getElementById('city')
const file = './information.json'

/**
 * Fill Select Function.
 * @summary This function is used to fill dependent html select elements with information stored in a json file using vanilla js.
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

main.addEventListener('change', () => {
  fetch(file)
    .then(response => response.json())
    .then(data => {
      const dependentItems = data[main.value]
      fillSelect(dependent, dependentItems)
    })
})

fetch(file)
  .then(response => response.json())
  .then(data => {
    mainItems = Object.keys(data)
    fillSelect(main, mainItems)
    fillSelect(dependent, data[mainItems[0]])
  })
