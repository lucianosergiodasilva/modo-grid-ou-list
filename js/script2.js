const container = document.querySelector('.container')
const header = document.querySelector('.container > header')
const span = document.querySelector('.container > header > span')

header.addEventListener('click', () => {
    
    // Alterna o layout entre GRID e LIST
    container.classList.toggle('grid')
    container.classList.toggle('list')

    // Alterna o ícone do header entre GRID e LIST
    if (container.classList.contains('grid')) {
        span.setAttribute('class', 'mdi mdi-view-list')
    }
    else {
        span.setAttribute('class', 'mdi mdi-view-grid')
    }
})