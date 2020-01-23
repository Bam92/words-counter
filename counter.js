const t = document.querySelector('textarea');
const charDOM = document.querySelector('#charNum')
const wordDOM = document.querySelector('#wordNum')
let chars, words = 0

t.addEventListener('input', event => {
const text = t.value.trim()
    
    charDOM.innerText = text.length
    wordDOM.innerText = text.split(" ").length

    
})
