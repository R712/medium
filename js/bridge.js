const btnChooseCoin = document.querySelector('#btn-choose-coin');
const modalChooseCoin = document.querySelector('#modal-choose-coin');
const btnConnectWallet = document.querySelector('#btn-connect-wallet');
const modalConnectWallet = document.querySelector('#modal-connect-wallet');
const modalWalletDone = document.querySelector('#modal-wallet-done');
const btnModalClose = document.querySelectorAll('.btn-clear');
const modals = document.querySelectorAll('.modal');
const modalOverlay = document.querySelectorAll('.modal-overlay');

btnChooseCoin.addEventListener('click', () => {
    modalChooseCoin.classList.toggle('modal-show');
});

btnConnectWallet.addEventListener('click', () => {
    modalConnectWallet.classList.toggle('modal-show');
});

btnModalClose.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.modal-show').classList.remove('modal-show');
    });
});

modalOverlay.forEach(a => {
    a.addEventListener('click', () => {
        document.querySelector('.modal-show').classList.remove('modal-show');
    });
});

document.querySelector('#btn-wallet-done').addEventListener('click', () => {
    modalConnectWallet.classList.toggle('modal-show');
    modalWalletDone.classList.toggle('modal-show');
});


let bgThemeVal;

const bgRadios = document.querySelectorAll('input[name=bg]');
const bgBody = document.querySelector('body');
bgRadios.forEach(radio => {
    radio.addEventListener('click', function (el) {
        bgThemeVal = radio.value;
        bgBody.removeAttribute('class');
        bgBody.classList.add(bgThemeVal);
    });
});