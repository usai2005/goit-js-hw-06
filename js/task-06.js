const textInput = document.querySelector('input[data-length]');

const amountOfCharacters = Number(textInput.dataset.length);

textInput.addEventListener('blur', () => {

    if (textInput.classList.contains('valid')) {
        textInput.classList.remove('valid');
    }

    if (textInput.classList.contains('invalid')) {
        textInput.classList.remove('invalid');
    }

    if (textInput.value.length > 0 && textInput.value.length !== amountOfCharacters) {
        
        textInput.classList.add('invalid');

    } else if (textInput.value.length === amountOfCharacters) {
        
        textInput.classList.add('valid');
    }
});
