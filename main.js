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