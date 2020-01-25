const charDOM = document.querySelector('#charNum');
const wordDOM = document.querySelector('#wordNum');

function renderText(domElt, text) {
    domElt.innerText = text;
}

function handleWord(text) {
    const textArr = text.split(" ");
    let wordCount = 0;

    for(word of textArr) {
        if(/[a-zA-Z0-9]/.test(word)) {
            wordCount += 1;
        }
    }

    renderText(wordDOM, wordCount);      

}

function handleChar(text) {
    renderText(charDOM, text.length);
    
}

function init() {
    document
      .querySelector('textarea')
      .addEventListener("input", event => {
        const text = event.target.value.trim();

        handleChar(text);
        handleWord(text);

    });
}

init();