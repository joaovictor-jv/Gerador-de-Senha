const slider = document.querySelector('#slider');
const sizePassword = document.querySelector('#valueRange');
const button = document.querySelector('.generatorButton');
const password = document.querySelector('.password');
const containerPassword = document.querySelector('#container-password');

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*';
let newPassword = '';

sizePassword.innerHTML = slider.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatedPassword() {

    let pass = '';

    for(var i = 0, n = charset.length; i < slider.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove('hide');
    password.innerHTML = pass;
    newPassword = pass;
    
}

async function copyPassword() {
    navigator.clipboard.writeText(newPassword);
}