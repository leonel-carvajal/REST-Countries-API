//console.log(JSON.parse(sessionStorage.getItem('pais')))
const info = document.getElementById('info')

const getInfoCountry = () => {
  let country = JSON.parse(sessionStorage.getItem('pais'))
  const fragment = document.createDocumentFragment()
  for (const countries of country) {

    const info = document.createElement('article')
    const infoHeader = document.createElement('div')
    const infoImg = document.createElement('img')
    infoImg.src = countries.flag
    const br = document.createElement('br')
    const br2 = document.createElement('br')
    const br3= document.createElement('br')
    const br4 = document.createElement('br')
    const br5 = document.createElement('br')
    const br6 = document.createElement('br')
    const br7 = document.createElement('br')
    const infoTitle = document.createElement('h2')

    const infoBody = document.createElement('div')

    const infoGeneral = document.createElement('div')
    const infoNative = document.createElement('span')
    const infoNativeText = document.createElement('span')
    const infoPopulation = document.createElement('span')
    const infoPopultionText = document.createElement('span')
    const infoRegion = document.createElement('span')
    const infoRegionText = document.createElement('span')
    const infoSubRegion = document.createElement('span')
    const infoSubRegionText = document.createElement('span')
    const infoCapital = document.createElement('span')
    const infoCapitalText = document.createElement('span')

    const infoEconomy = document.createElement('div')
    const infoLevel = document.createElement('span')
    const infoLevelText = document.createElement('span')
    const infoCurrency = document.createElement('span')
    const infoCurrencyText = document.createElement('span')
    const infoLang = document.createElement('span')
    const infoLangText = document.createElement('span')

    const infoBorders = document.createElement('div')
    const bordersTitle = document.createElement('h2')

    //class
    infoHeader.classList.add('info__header')
    infoImg.classList.add('info__img')
    infoTitle.classList.add('info__title')
    infoBody.classList.add('info__body')
    infoGeneral.classList.add('info__general')
    infoNative.classList.add('info__native')
    infoPopulation.classList.add('info__population')
    infoRegion.classList.add('info__region')
    infoSubRegion.classList.add('info__subregion')
    infoCapital.classList.add('info__capital')
    infoEconomy.classList.add('info__economy')
    infoLevel.classList.add('info__level')
    infoCurrency.classList.add('info__currency')
    infoLang.classList.add('info__lang')
    infoBorders.classList.add('info__borders')
    bordersTitle.classList.add('borders__title')

    //Information
    infoTitle.textContent = countries.name
    infoNative.textContent = 'Native Name: '
    infoNativeText.textContent = countries.nativeName
    infoNativeText.append(br)
    infoPopulation.textContent = 'Population: '
    infoPopultionText.textContent = countries.population
    infoPopultionText.append(br2)
    infoRegion.textContent = 'Region: '
    infoRegionText.textContent = countries.region
    infoRegionText.append(br3)
    infoSubRegion.textContent = 'SubRegion: '
    infoSubRegionText.textContent = countries.subregion
    infoSubRegionText.append(br4)
    infoCapital.textContent = 'Capital: '
    infoCapitalText.textContent = countries.capital
    infoLevel.textContent = 'Top Level Domain'
    infoLevelText.textContent = countries.alpha2Code
    infoLevelText.append(br5)
    infoCurrency.textContent = 'Currencies'
    infoCurrencyText.textContent = countries.currencies[0].name
    infoCurrencyText.append(br6)
    infoLang.textContent = 'Languages'
    infoLangText.textContent = countries.languages[0].name
    //Card fomat
    info.appendChild(infoHeader)
    info.appendChild(infoBody)
    info.appendChild(infoBorders)
  
    infoHeader.appendChild(infoImg)
    infoHeader.appendChild(infoTitle)

    infoBody.appendChild(infoGeneral)
    infoGeneral.appendChild(infoNative)
    infoGeneral.appendChild(infoNativeText)
    infoGeneral.appendChild(infoPopulation)
    infoGeneral.appendChild(infoPopultionText)
    infoGeneral.appendChild(infoRegion)
    infoGeneral.appendChild(infoRegionText)
    infoGeneral.appendChild(infoSubRegion)
    infoGeneral.appendChild(infoSubRegionText)
    infoGeneral.appendChild(infoCapital)
    infoGeneral.appendChild(infoCapitalText)

    infoBody.appendChild(infoEconomy)
    infoEconomy.appendChild(infoLevel)
    infoEconomy.appendChild(infoLevelText)
    infoEconomy.appendChild(infoCurrency)
    infoEconomy.appendChild(infoCurrencyText)
    infoEconomy.appendChild(infoLang)
    infoEconomy.appendChild(infoLangText)
    infoBorders.appendChild(bordersTitle)

    fragment.appendChild(info)
  }
  info.appendChild(fragment)
}

window.addEventListener('DOMContentLoaded',getInfoCountry)