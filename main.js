const selectElement = (element) => {
    return document.querySelector(element)
} 

// variables
let menuToggler = selectElement('.menu-toggle')
let body = selectElement('body')

menuToggler.addEventListener("click", () => {
    body.classList.toggle('open')
})