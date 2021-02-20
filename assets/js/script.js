const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault();
        }
        item.classList.toggle('active');
        modal.classList.toggle('active');
        close.classList.toggle('active');
        console.log(close);
        // document.body.classList.add('modal-open');
        document.body.style.overflow = 'hidden';
      })
    })

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        close.classList.remove('active');
        trigger.forEach(item => {
          item.classList.remove('active');
        })
        // document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
      }
    })
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = "block";
      document.body.style.overflow = 'hidden';
    }, time);
  }

  bindModal('.btn__menu', '.modal__menu', '.menu__close');
  bindModal('.btn__login', '.modal__login', '.menu__close');
  // bindModal('.phone_link', '.popup', '.popup .popup_close');
  // showModalByTime('.popup', 5000);
};

const login = () => {
  function buttonTabs(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);
  }


  buttonTabs('.btn__menu', '.modal__menu', '.menu__close');
  bindModal('.btn__login', '.modal__login', '.menu__close');
};

window.addEventListener('DOMContentLoaded', () => {
  modals();
  login();
})