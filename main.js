const menuSection = document.querySelector('.menu-section')
const menuToggle = document.querySelector('.menu-toggle')
const iconsName = document.querySelectorAll('nav ul li p')

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
