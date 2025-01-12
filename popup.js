const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');
const passwordField = document.getElementById('password');
const lengthField = document.getElementById('length');
const includeLower = document.getElementById('includeLower');
const includeUpper = document.getElementById('includeUpper');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

function generatePassword() {
    const length = parseInt(lengthField.value);
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:",.<>?/';

    let charPool = '';
    if (includeLower.checked) charPool += lower;
    if (includeUpper.checked) charPool += upper;
    if (includeNumbers.checked) charPool += numbers;
    if (includeSymbols.checked) charPool += symbols;

    if (charPool === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    passwordField.value = password;
}

function copyPassword() {
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
