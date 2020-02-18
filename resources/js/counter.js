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

    return wordCount;      

}

function handleChar(text) {
   return text.length;     
}

function init() {
    document
      .querySelector('textarea')
      .addEventListener("input", event => {
        const text = event.target.value.trim();
        
        // get word count and char count and render them
        renderText(wordDOM, handleWord(text));
        renderText(charDOM, handleChar(text));       

    });
}

init();