const email = document.querySelector('#email');
const ErrorMsg = document.querySelector('.errorMsg');
const contact = document.querySelector('#contacts');
contact.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailValue = email.value;
  if (regex.test(emailValue)) {
    ErrorMsg.innerHTML = 'Invalid! Your email should contain lowerscase letters';
    event.preventDefault();
  }
});

const userName = document.querySelector('#name');
const emailField = document.querySelector('#email');
const messageField = document.querySelector('#message');

contact.addEventListener('input', () => {
  const formData = {
    name: userName.value,
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem('userData', JSON.stringify(formData));
});
const dataStorage = JSON.parse(localStorage.getItem('userData'));
userName.value = dataStorage.name;
emailField.value = dataStorage.email;
messageField.value = dataStorage.message;