const projectname = document.querySelector('.projectname');
const workSections = document.querySelector('.project-section');
const modal = document.querySelector('.modal-example');
const modalImg = document.querySelector('.modal-img');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year');

const projects = [
  {
    name: 'Tonic',
    imageLink: 'assets/work1.svg',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    company: 'Canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Multi-post stories',
    imageLink: 'assets/work2.svg',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back End Dev',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Facebook 360',
    imageLink: 'assets/work3.svg',
    technologies: ['html', 'Ruby on rails', 'css'],
    role: 'Full Stack Dev',
    description:
      'Exploring the future of media in Facebook`s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Uber Navigation',
    imageLink: 'assets/work4.svg',
    technologies: ['html', 'Ruby on rails', 'css'],
    role: 'Lead developer',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

workSections.innerHTML = '';
for (let i = 0; i < projects.length; i += 1) {
  let languages = '';
  projects[i].technologies.forEach((language) => {
    languages += `
      <li><a href='' class='skill' title='${language}' >${language}</a></li>
    `;
  });
  workSections.innerHTML += `
    <article class="work" id="work-img-1">
      <img class="work-img-1" src='${projects[i].imageLink}' alt="Nature Project" />
      <div class="item1">
        <h2 class="work-title">${projects[i].name}</h2>
        <p class="work-info">
          <span id="work-media">${projects[i].company}</span>
          <img class="dot-img" src="assets/dot.svg" alt="." />
          <span id="work-tech">${projects[i].role}</span>
          <img class="dot-img" src="assets/dot.svg" alt="." />
          <span id="work-year">${projects[i].year}</span>
        </p>
        <p class="work-desc">
          ${projects[i].description}
        </p>
        <ul class="work-pill">${languages}</ul>
        <button type='button' class='work-button project-modal-${i}'>See Project</button>
      </div>
    </article>
  `;
}

for (let i = 0; i < projects.length; i += 1) {
  document
    .querySelector(`.project-modal-${i}`)
    .addEventListener('click', () => {
      projectname.innerHTML = projects[i].name;
      modalImg.src = projects[i].imageLink;
      company.innerHTML = projects[i].company;
      role.innerHTML = projects[i].role;
      year.innerHTML = projects[i].year;

      document.querySelector('.project-section').classList.add('blur');
      document.querySelector('.heads').classList.add('blur');
      document.querySelector('#info').classList.add('blur');
      document.querySelector('#abouts').classList.add('blur');
      document.querySelector('.contact').classList.add('blur');
      modal.classList.add('show');
    });
}
document.querySelector('.closeModal').addEventListener('click', () => {
  modal.style.display = 'none';
  window.location.reload();
  document.querySelector('.container').classList.remove('blur');
  document.querySelector('.showcase').classList.remove('blur');
});

const email = document.querySelector('#useremail');
const validationAlert = document.querySelector('.alert');
const contactForm = document.querySelector('.contact-me');
contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    validationAlert.innerHTML = 'Your email address should not contain uppercase letters';
    event.preventDefault();
  }
});

const nameField = document.querySelector('#username');
const emailAddressField = document.querySelector('#useremail');
const messageField = document.querySelector('#usermessage');

contactForm.addEventListener('input', () => {
  const userData = {
    name: nameField.value,
    email: emailAddressField.value,
    message: messageField.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
});
const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
nameField.value = userDataFromLocalStorage.name;
emailAddressField.value = userDataFromLocalStorage.email;
messageField.value = userDataFromLocalStorage.message;
