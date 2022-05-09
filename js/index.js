const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

// firstName.addEventListener('input', () => {
//     validateInputFields(firstName, firstNameError);
// });
// lastName.addEventListener('input', () => {
//     validateInputFields(lastName, lastNameError);
// });
// email.addEventListener('input', () => {
//     validateInputFields(email, emailError);
// });
// password.addEventListener('input', () => {
//     validateInputFields(password, passwordError);
// });
// confirmPassword.addEventListener('input', () => {
//     confirmPsw(password, confirmPassword, confirmPasswordError);
// })

// validates input fields
function validateInputFields(input, inputError) {
    if(!input.validity.valid) {
        input.style.border = '1px solid rgba(255, 0, 0, 0.384)';
        if(input.validity.typeMismatch) {
            inputError.innerText = 'Enter correct E-Mail';
        } else if(input.validity.patternMismatch) {
            inputError.innerText = 'Password too weak';
        } else {
            inputError.innerText = 'Required Field';
        } return false;
    } else {
        input.style.border = '1px solid rgba(0, 0, 0, 0.301)';
        inputError.innerText = '';
        return true;
    }
}
// checks if confirm password equals password
function confirmPsw(psw, confirmPsw, confirmPswError) {
    if(psw.value == confirmPsw.value) {
        confirmPswError.innerText = '';
        return true;
    } else {
        confirmPswError.innerText = 'Password doesn\'t match';
        return false;
    }
}
// submits registration form
function submitForm() {
    const validFirstName = validateInputFields(firstName, firstNameError);
    const validLastName = validateInputFields(lastName, lastNameError);
    const validEmail = validateInputFields(email, emailError);
    const validPassword = validateInputFields(password, passwordError);

    form.addEventListener('submit', (e) => {
        if(validFirstName && validLastName && validEmail && validPassword) {
            e.preventDefault();
            console.log('all gucci');
        } else {
            e.preventDefault();
            validateInputFields(firstName, firstNameError);
            validateInputFields(lastName, lastNameError);
            validateInputFields(email, emailError);
            validateInputFields(password, passwordError);
            confirmPsw(password, confirmPassword, confirmPasswordError);

            firstName.addEventListener('input', () => {
                validateInputFields(firstName, firstNameError);
            });

            lastName.addEventListener('input', () => {
                validateInputFields(lastName, lastNameError);
            });

            email.addEventListener('input', () => {
                validateInputFields(email, emailError);
            });

            password.addEventListener('input', () => {
                validateInputFields(password, passwordError);
            });
            
            confirmPassword.addEventListener('input', () => {
                confirmPsw(password, confirmPassword, confirmPasswordError);
            })
        }
    })
}