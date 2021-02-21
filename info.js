//console.log(JSON.parse(sessionStorage.getItem('pais')))
const info = document.getElementById('info')

const getInfoCountry = () => {
  let country = JSON.parse(sessionStorage.getItem('pais'))
  const fragment = document.createDocumentFragment()
  for (const countries of country) {
    const card = document.createElement('article')
    const cardHeader = document.createElement('div')
    const cardImg = document.createElement('img')

    //class
    card.classList.add('card')
    cardHeader.classList.add('card__header')
    cardImg.src = countries.flag
    cardImg.classList.add('card__img')   
    //information

    //Card fomat
    card.appendChild(cardHeader)
    cardHeader.appendChild(cardImg)
  

    fragment.appendChild(card)
  }
  info.appendChild(fragment)
}
window.addEventListener('DOMContentLoaded',getInfoCountry)