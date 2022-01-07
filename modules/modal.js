function modal() {
const modalTrigger = document.querySelector('.modal__trigger');
const modal = document.querySelector('.modal');

function openModal() {
  modal.classList.add('show');
  modal.classList.remove('hide');     
  document.body.style.overflow = 'hidden';
}

modalTrigger.addEventListener('click', openModal);

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

modal.addEventListener('click', (e) => {    
  // закрытие модального окна на зону вокруг него
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});
}

module.exports = modal;