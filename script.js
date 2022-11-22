

const options = document.querySelector('select')
const PhoneSection = document.querySelectorAll('.PhoneSection')

options.addEventListener('change', () => {
    const PhoneCards = document.querySelectorAll('.PhoneItem')
    const CardHide = document.querySelectorAll('.Hide')
    const PhoneCard = document.createElement("div")
    PhoneCard.classList.add('PhoneItem')

    const PhoneImage = document.createElement("img")
    PhoneImage.src = 'https://media.istockphoto.com/photos/frameless-smartphone-with-white-screen-isolated-on-white-background-picture-id1014068816?k=20&m=1014068816&s=170667a&w=0&h=hcSiADb75qVIfTNQMHoQIWZx4J02eASuZoHB9KeVpW4='
    PhoneImage.width = '254'
    PhoneImage.height = '380'
    PhoneCard.appendChild(PhoneImage)

    const PhoneHiddenPrice = document.createElement('h2')
    PhoneHiddenPrice.textContent = 'R$2.800'
    PhoneCard.appendChild(PhoneHiddenPrice)

    if(options.selectedIndex == 0){
        for(let index = 0; index <= PhoneSection.length + 3; index++) {
            console.log(index)
            PhoneCards[index].classList.remove('PhoneItem')
            PhoneCards[index].classList.add('Hide')
        }
    }

    if(options.selectedIndex == 1){
        for (let index = 0; index < PhoneSection.length; index++) {
            PhoneSection[index].appendChild(PhoneCard.cloneNode(true)) 
        }
    }

    if(options.selectedIndex == PhoneSection.length){
        for (let index = 0; index < 2; index++) {
            PhoneSection[index].appendChild(PhoneCard.cloneNode(true)) 
            PhoneSection[index].appendChild(PhoneCard.cloneNode(true)) 
            PhoneSection[index].appendChild(PhoneCard.cloneNode(true)) 
        }
    }
    
})