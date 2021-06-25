const homeNavbarButtons = document.querySelectorAll('#home-selector');

function eraseActives(arr) {
  arr.forEach(i => {
    i.classList.remove('active');
  });
}

homeNavbarButtons.forEach(button => {
  button.addEventListener('click', () => {
    eraseActives(homeNavbarButtons);
    button.classList.toggle('active');
  });
});
