const charDOM = document.querySelector('#charNum');
const wordDOM = document.querySelector('#wordNum');

function renderText(domElt, text) {
    domElt.innerText = text;
}


function init() {
    document
      .querySelector('textarea')
      .addEventListener("input", event => {
        const text = event.target.value.trim();

        renderText(charDOM, text.length);
        renderText(wordDOM, text.split(" ").length);      
    });
}

init();