const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

textInput.addEventListener('keyup', function () {
  memeText.innerText = textInput.value;
})