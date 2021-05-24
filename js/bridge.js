const btnChooseCoin = document.querySelector('#btn-choose-coin');
const modalChooseCoin = document.querySelector('#modal-choose-coin');
const btnModalClose = document.querySelector('.btn-clear');
const modals = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');

btnChooseCoin.addEventListener('click', () => {
    modalChooseCoin.classList.toggle('active');
});

btnModalClose.addEventListener('click', () => {
    modals.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
    modals.classList.remove('active');
});