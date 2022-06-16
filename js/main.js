let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let openModal = document.querySelector('.header__btn');
let closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.add('visible');
    modal.classList.add('visible');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    overlay.classList.remove('visible');
    modal.classList.remove('visible');
});

document.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('visible');
        modal.classList.remove('visible');
    }
});

let signInBtn = document.querySelector('.modal__sign-in');

signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let inputValue = document.querySelector('.modal__input').value.trim();
    let logInText = document.querySelector('[data-value="input"]');
    if (inputValue === '') {
        logInText.innerHTML = "Log in";
        overlay.classList.remove('visible');
        modal.classList.remove('visible');
    } else {
        logInText.innerHTML = inputValue;
        overlay.classList.remove('visible');
        modal.classList.remove('visible');
    }
});



