let backing = document.querySelector('.backing');

let showLoginButton = document.querySelector('.nav-list__item-login');
let hideLoginButton = document.querySelector('.close-login');
let modalLoginWindow = document.querySelector('.login');

// Show and Hide login modal window
showLoginButton.addEventListener('click', function() {
  modalLoginWindow.classList.add('modal-show')
  backing.classList.add('modal-show')
});

hideLoginButton.addEventListener('click', function() {
  modalLoginWindow.classList.remove('modal-show')
  backing.classList.remove('modal-show')
});

// Hide login modal window by ESC press
window.addEventListener('keydown', function( evt ) {
  if (evt.keyCode == 27 && modalLoginWindow.classList.contains('modal-show')) {
    evt.preventDefault()

    modalLoginWindow.classList.remove('modal-show')
    backing.classList.remove('modal-show')
  }
});

let showMapButton = document.querySelector('.map-button');
let hideMapButton = document.querySelector('.close-map');
let modalMapWindow = document.querySelector('.modal-map');

// Show and Hide map modal window
showMapButton.addEventListener('click', function() {
  backing.classList.add('modal-show')
  modalMapWindow.classList.add('modal-show')
});

hideMapButton.addEventListener('click', function() {
  modalMapWindow.classList.remove('modal-show')
  backing.classList.remove('modal-show')
});

// Hide map modal window by ESC press
window.addEventListener('keydown', function( evt ) {
  if (evt.keyCode == 27 && modalMapWindow.classList.contains('modal-show')) {
    evt.preventDefault()

    modalMapWindow.classList.remove('modal-show')
    backing.classList.remove('modal-show')
  }
});