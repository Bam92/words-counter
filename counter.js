const t = document.querySelector('textarea');
const charDOM = document.querySelector('#charNum')
let chars, words = 0

t.addEventListener('input', event => {
const text = t.value
    
    charDOM.innerText = text.length
    
})