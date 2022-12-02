const menuBtn = document.querySelector('#menuBtn');
const menu = document.querySelector('.menu ul');
const menuItems = document.querySelectorAll('.menu ul li a');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
// eslint-disable-next-line no-plusplus
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', () => {
    menu.btn.classList.remove('active');
    menu.classList.remove('active');
  });
}
// eslint-disable-next-line no-unused-vars
function markMenuItem(menuItem) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }
  menuItem.classList.add('active');
}
