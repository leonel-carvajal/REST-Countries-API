const info = document.getElementById('info')
let code = JSON.parse(localStorage.getItem('pais'))
const mode = JSON.parse(localStorage.getItem('dark'))
const waiting = document.getElementById('waiting')
const dark = document.getElementById('darkMode')
const Moon = document.getElementById('imgMoon')

const getInfoCountry = () => { 
  waiting.classList.add('waiting--on')
  fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
    .then(res => res.json()
      .then(data => {
        waiting.classList.remove('waiting--on')
        // const card = document.createElement('article')
        // card.classList.add('article')
        const infoHeader = document.createElement('div')
        const infoImg = document.createElement('img')
        infoImg.src = data.flag
        const br = document.createElement('br')
        const br2 = document.createElement('br')
        const br3 = document.createElement('br')
        const br4 = document.createElement('br')
        const br5 = document.createElement('br')
        const br6 = document.createElement('br')

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
        infoTitle.textContent = data.name
        infoNative.textContent = 'Native Name: '
        infoNativeText.textContent = data.nativeName
        infoNativeText.append(br)
        infoPopulation.textContent = 'Population: '
        infoPopultionText.textContent = data.population
        infoPopultionText.append(br2)
        infoRegion.textContent = 'Region: '
        infoRegionText.textContent = data.region
        infoRegionText.append(br3)
        infoSubRegion.textContent = 'SubRegion: '
        infoSubRegionText.textContent = data.subregion
        infoSubRegionText.append(br4)
        infoCapital.textContent = 'Capital: '
        infoCapitalText.textContent = data.capital
        infoLevel.textContent = 'Top Level Domain'
        infoLevelText.textContent = data.alpha2Code
        infoLevelText.append(br5)
        infoCurrency.textContent = 'Currencies'
        infoCurrencyText.textContent = data.currencies[0].name
        infoCurrencyText.append(br6)
        bordersTitle.textContent = 'Borders data: '
        infoLang.textContent = 'Languages'
        for (const lang of data.languages) {
          infoLangText.textContent += lang.name + ' '
        }
        for (const borders of data.borders) {
          const linkBorder = document.createElement('a')
          linkBorder.classList.add('info__front')
          linkBorder.textContent = borders
          bordersTitle.insertAdjacentElement('beforeend', linkBorder)
        }
        if (data.borders.length<=0) {
          const inf = document.createElement('p')
          inf.textContent = 'DATA NOT AVAILABLE'
          bordersTitle.insertAdjacentElement('beforeend', inf)
        }
        //Card fomat
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
        info.appendChild(infoHeader)
        info.appendChild(infoBody)
        info.appendChild(infoBorders)

        if (mode==='on') {
          //console.log('ON')
          darkMode()
        } else if (mode === 'off') {
          console.log('OFF')
        }
        const links = document.querySelectorAll('.info__front')
        links.forEach(link => {
          link.addEventListener('click', (e) => {
            localStorage.setItem('pais', JSON.stringify(e.target.textContent))
            location.reload()
          })
        })

    }))
} 
const darkMode = () => {
  const header = document.querySelector('.header')

    //console.log('ON')
    document.body.classList.toggle('darkMode')
    header.classList.toggle('darkItem')
    document.querySelector('.back').classList.toggle('darkItem')
    document.querySelector('.info__title').classList.toggle('darkMode')
    document.querySelector('.info__body').classList.toggle('darkItem')
    document.querySelector('.info__native').classList.toggle('darkItem')
    document.querySelector('.info__population').classList.toggle('darkItem')
    document.querySelector('.info__region').classList.toggle('darkItem')
    document.querySelector('.info__subregion').classList.toggle('darkItem')
    document.querySelector('.info__capital').classList.toggle('darkItem')
    document.querySelector('.info__level').classList.toggle('darkItem')
    document.querySelector('.info__currency').classList.toggle('darkItem')
    document.querySelector('.info__lang').classList.toggle('darkItem')
    document.querySelector('.info__borders').classList.toggle('darkItem')
    document.querySelector('.borders__title').classList.toggle('darkItem')
    for (const infoLink of document.querySelectorAll('.info__front')) {
      infoLink.classList.toggle('darkItem')
  }
  if (imgMoon.dataset.mode === 'off') {
    imgMoon.dataset.mode = 'on'
    imgMoon.src = 'icon-sun.svg'
  } else if (imgMoon.dataset.mode === 'on') {
    imgMoon.dataset.mode = 'off'
    imgMoon.src = 'icon-moon.svg'
  }
  if (imgMoon.dataset.mode === 'on') {
    localStorage.setItem('dark',JSON.stringify('on'))
  } else if(imgMoon.dataset.mode==='off') {
    localStorage.setItem('dark', JSON.stringify('off'))
  }
}
dark.addEventListener('click', () => {
  darkMode()
})
window.addEventListener('DOMContentLoaded',getInfoCountry)

