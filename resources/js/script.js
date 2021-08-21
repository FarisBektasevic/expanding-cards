// const panels = document.querySelectorAll('.panel')

// panels.forEach( (panel) => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses(panel)
//         panel.classList.add('active')
//     })
    
// })

// function removeActiveClasses (panel) {
//     panels.forEach( (panel) => {
//         panel.classList.remove('active')
//     })
// }

const panels = document.querySelectorAll('.panel')

panels.forEach( (panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panel)
        panel.classList.add('active')
    })
})

function removeActiveClasses (panel) {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}