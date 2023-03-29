const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')
const iconsName = document.querySelectorAll('nav ul li p')

const filter = document.querySelector('.filter')
const filterOptionsGroup = document.querySelector('.filter-options')
const filterOptions = document.querySelectorAll('.options')
const boxes = document.querySelectorAll('.box')

const textInput = document.querySelector('#text')
const cards = document.querySelectorAll('.card')
const clearInputImg = document.querySelector('.clear-input')

const addCard = document.querySelector('#addCard')
const showBtn = document.querySelector('.show-add-card')
const closeBtn = document.querySelector('.close-add-card')

const addTagBtn = document.querySelector('.add-tag-btn')
const addNewCardBtn = document.querySelector('.add-card-btn')

menuToggle.addEventListener('click', activateMenuExpanded)
function activateMenuExpanded() {
    menuSection.classList.toggle('expanded')

    iconsName.forEach((iconName) => {
        if(menuSection.classList.contains('expanded')) {
            iconName.style.display = 'initial'
        } else {
            iconName.style.display = 'none'
        }
    })
}

let isVisible = false

filter.addEventListener('click', showOptions)
function showOptions() {
    if(isVisible) {
        filterOptionsGroup.style.display = 'none'
        isVisible = false
    } else {
        filterOptionsGroup.style.display = 'initial'
        isVisible = true
    }
}

function filterBoxes(index) {
    boxes.forEach((box, i) => {
        if(i === index) {
            box.style.display = 'initial'
        } else {
            box.style.display = 'none'
        }
    })
}

filterOptions.forEach((option, i) => {
    option.addEventListener('click', () => {
        filterBoxes(i)
        filterOptionsGroup.style.display = 'none'
        isVisible = false
    })
})

document.addEventListener('click', (event) => {
    const isClickInsideFilter = filter.contains(event.target)
    const isClickInsideFilterOptions = filterOptionsGroup.contains(event.target)
    if (!isClickInsideFilter && !isClickInsideFilterOptions) {
      filterOptionsGroup.style.display = 'none'
      isVisible = false
    }
})

textInput.addEventListener('input', filterBytitle)
function filterBytitle() {
    cards.forEach((card) => {
        let titleCard = card.querySelector('h3')
        titleCard = titleCard.textContent.toLowerCase()
        const filterTextInput = textInput.value.toLowerCase()

        if(!titleCard.includes(filterTextInput)) {
            card.style.display = 'none'
        } else {
            card.style.display = 'flex'
        }
    })

    if(textInput.value.length >= 1) {
        clearInputImg.style.display = 'initial'
    } else {
        clearInputImg.style.display = 'none'
    }
}

clearInputImg.addEventListener('click', clearInput)
function clearInput() {
    textInput.value = ''
    textInput.focus()
    clearInputImg.style.display = 'none'

    cards.forEach((card) => {
        card.style.display = 'flex'
    })
}


let cardBeingDragged = null

for(let card of cards) {
    card.addEventListener("dragstart", () => {
        cardBeingDragged = card
    })

    card.addEventListener("dragend", () => {
        cardBeingDragged = null
    })
}

for(let box of boxes) {
    box.addEventListener("dragover", (event) => {
        event.preventDefault()
    })

    box.addEventListener("drop", (event) => {
        event.preventDefault()
        box.querySelector(".cards").appendChild(cardBeingDragged)
    })
}

showBtn.addEventListener('click', showAddCardDiv)
function showAddCardDiv() {
    addCard.style.display = 'initial'
}

closeBtn.addEventListener('click', closeAddCardDiv)
function closeAddCardDiv() {
    addCard.style.display = 'none'
}


const cardsOfBoxToDo = document.querySelector('.box.to-do .cards')

let cardData = {
    name: '',
    description: '',
    tags: [],
}

addTagBtn.addEventListener('click', addTag)
function addTag() {
    const tagInput = document.querySelector('#add-tag-input')
    const tag = tagInput.value

    alert(`Tag '${tag}' foi adicionada com sucesso!`)
    cardData.tags.push(tag)
    tagInput.value = ''
}

addNewCardBtn.addEventListener('click', addNewCard)
function addNewCard() {
    const cardName = document.querySelector('#card-name').value
    const cardDescription = document.querySelector('#description-card').value

    if(cardName !== '' && cardDescription !== '') {
        cardData.name = cardName
        cardData.description = cardDescription

        const newCard = document.createElement('div')
        newCard.innerHTML = `
        <div class="card" draggable="true">
            <h3 class="card-title">${cardData.name}</h3>
            <p class="card-parag">
                ${cardData.description}
            </p>
            <div class="tag-group">
                ${cardData.tags.map(tag => `<div class="tag">${tag}</div>`).join('')}
            </div>
        </div>
    `

        const cardsOfBoxToDo = document.querySelector('.box.to-do .cards')
        cardsOfBoxToDo.appendChild(newCard)

        cardData = {
            name: '',
            description: '',
            tags: [],
        }
        
        addCard.style.display = 'none'

    } else {
        alert('Por favor, insira as informações necessárias!')
    }
}
  
  
  
  
  
  