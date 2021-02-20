const cards = document.getElementById('cards')

const getCountries = async (URl='') => {
  const url = URl || 'https://restcountries.eu/rest/v2/all'
  try {
    const res = await fetch(url)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const paintAllCountries = async () => {
  const data = await getCountries()
  const fragment = document.createDocumentFragment()
  for (const countries of data) {
    console.log(countries)
    //elements
    const card = document.createElement('article')
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
    const cardInfoPCa= document.createElement('div')
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
}
paintAllCountries()

