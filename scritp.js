const cards = document.getElementById('cards')
const region = document.getElementById('cards')
const filter = document.getElementById('filter')
const ALLcoutries = 'https://restcountries.eu/rest/v2/all'
const search = document.getElementById('search')
const form = document.getElementById('form')
const waiting = document.getElementById('waiting')
const header = document.getElementById('header')
const body = document.getElementById('body')
const imgMoon = document.getElementById('imgMoon')
localStorage.setItem('pais', {})

const getCountries = async (URl) => {
  const url = URl || ALLcoutries
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error.message)
  }
}

const paintAllCountries = async (uri) => {
  const data = await getCountries(uri) || await getCountries()
  const fragment = document.createDocumentFragment()
  for (const countries of data) {
    //elements
    const card = document.createElement('article')
    card.dataset.dark = 'off'
    const cardHeader = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardBody = document.createElement('div')
    const cardName = document.createElement('h2')
    const cardInfo = document.createElement('div')
    const cardInfoPop = document.createElement('div')
    const cardPopulation = document.createElement('p')
    const cardPopulationText = document.createElement('p')
    const cardInfoR = document.createElement('div')
    const cardRegion = document.createElement('p')
    const cardRegionText = document.createElement('p')
    const cardInfoPCa = document.createElement('div')
    const cardCapital = document.createElement('p')
    const cardCapitalText = document.createElement('p')

    //class
    card.classList.add('card')
    cardHeader.classList.add('card__header')
    cardImg.src = countries.flag
    cardImg.classList.add('card__img')
    cardBody.classList.add('card__body')
    cardName.classList.add('card__name')
    cardInfo.classList.add('card__info')
    cardInfoPop.classList.add('card__infoPop')
    cardPopulation.classList.add('card__population')
    cardInfoR.classList.add('card__infoR')
    cardRegion.classList.add('card__region')
    cardInfoPCa.classList.add('card__infoCa')
    cardCapital.classList.add('card__capital')

    //information

    cardName.textContent = countries.name
    cardPopulation.textContent = 'Population'
    cardRegion.textContent = 'Region'
    cardCapital.textContent = 'Capital'
    cardPopulationText.textContent = countries.population
    cardRegionText.textContent = countries.region
    cardCapitalText.textContent = countries.capital

    //Card fomat
    card.appendChild(cardHeader)
    card.appendChild(cardBody)
    cardHeader.appendChild(cardImg)
    cardBody.appendChild(cardName)
    cardBody.appendChild(cardInfo)

    cardInfo.appendChild(cardInfoPop)
    cardInfo.appendChild(cardInfoR)
    cardInfo.appendChild(cardInfoPCa)

    cardInfoPop.appendChild(cardPopulation)
    cardInfoPop.appendChild(cardPopulationText)

    cardInfoR.appendChild(cardRegion)
    cardInfoR.appendChild(cardRegionText)

    cardInfoPCa.appendChild(cardCapital)
    cardInfoPCa.appendChild(cardCapitalText)

    fragment.appendChild(card)
  }
  cards.appendChild(fragment)
  for (const countries of cards.children) {
    countries.addEventListener('click', () => {
      let name = countries.children[1].children[0].textContent
      fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => {
          for (const alpha of data) {
            localStorage.setItem('pais', JSON.stringify(alpha.alpha2Code))
            location.replace('info.html')
          }
        })
    })
  }
}
filter.addEventListener('change', (e) => {
  cards.textContent = ''
  paintAllCountries(`https://restcountries.eu/rest/v2/region/${e.target.value}`)

})

form.addEventListener('submit', (e) => {
  e.preventDefault()
})
search.addEventListener('keyup', (e) => {
  if (search.value.length !=='' && search.value.length>2) {
    cards.textContent = ''
    paintAllCountries(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
  }
  if (search.value.length === 0) {
    cards.textContent = ''
    paintAllCountries(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
  }
})


const darkMode = document.getElementById('darkMode')
darkMode.addEventListener('click', () => {
  const items = document.querySelectorAll('.card')
  header.classList.toggle('darkItem')
  body.classList.toggle('darkMode')
  filter.classList.toggle('darkItem')
  search.classList.toggle('darkItem')
  
  if (imgMoon.dataset.mode === 'off') {
    imgMoon.dataset.mode = 'on'
    imgMoon.src = 'icon-sun.svg'
  } else if (imgMoon.dataset.mode === 'on') {
    imgMoon.dataset.mode = 'off'
    imgMoon.src = 'icon-moon.svg'
  }
  
  items.forEach(item => {
    if (imgMoon.dataset.mode === 'on') {
      item.classList.add('darkItem')
    } else if (imgMoon.dataset.mode === 'off') {
      item.classList.remove('darkItem')
    }
  })
})

window.addEventListener('DOMContentLoaded', paintAllCountries)

