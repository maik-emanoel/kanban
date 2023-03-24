const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')
const iconsName = document.querySelectorAll('nav ul li p')

const filter = document.querySelector('.filter')
const filterOptionsGroup = document.querySelector('.filter-options')
const filterOptions = document.querySelectorAll('.options')

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