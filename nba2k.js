const container = document.getElementById('container');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

switchToRegister.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('active');
});

switchToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('active');
});
