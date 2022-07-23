var mailValidation = document.getElementById('mail-validation');
let email = document.getElementById('txtEmail');

email.onkeyup = function () {
    const regexmail = /\S+@\S+\.\S+/;
    if (regexmail.test(email.value)) {
        mailValidation.innerText = 'Seu email � valido';
        mailValidation.style.color = 'lime';

    }
    else {
        mailValidation.innerText = 'Seu email n�o � valido';
        mailValidation.style.color = 'red';
    }
}
