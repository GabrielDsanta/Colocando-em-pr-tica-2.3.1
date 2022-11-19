

const ChangeDisplayButton = document.querySelector('#ChangeDisplay')
const ChangeDisplayToGridBtn = document.querySelector('#ChangeDisplayToGrid')
const Form = document.querySelector('form')

ChangeDisplayButton.addEventListener('click', (e) => {
    e.preventDefault()
    Form.style.flexDirection = 'column'
})

ChangeDisplayToGridBtn.addEventListener('click', (e) => {
    e.preventDefault()

    Form.style.display = 'grid'
    Form.style.gridTemplateColumns = '15.625rem 15.625rem 15.625rem'
    Form.style.gridTemplateRows = '3rem 3rem 3rem'
    Form.style.alignContent = 'end'
    Form.style.gap = '1.563rem;'
})