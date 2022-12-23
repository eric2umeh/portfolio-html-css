const email = document.querySelector('#email');
const ErrorMsg = document.querySelector('.errorMsg');
const contact = document.querySelector('#contacts');
contact.addEventListener('submit', (event) => {
    // Badru here ....
    const emailValue = email.value;
  if (regex.test(emailValue)) {
    ErrorMsg.innerHTML = 'Invalid! Your email should contain lowerscase letters';
    event.preventDefault();
  }
});