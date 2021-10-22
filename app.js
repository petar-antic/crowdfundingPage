const body = document.querySelector('body');
const linearBkgd = document.querySelector('.linearBkgd');

const toggle = document.querySelector('.toggle');
const navMenu = document.querySelector('.navMenu');

const backThisProject = document.querySelector('.back');
const bookmark = document.querySelector('.bookmark');
const bookmarkBox = document.querySelector('.bookmarkBox');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalItem = document.querySelectorAll('.modalItem');
const checkboxBtn = document.querySelectorAll('input[type=radio]');
const closeBtn = document.querySelector('.closeModal');
const continueBtn = document.querySelectorAll('.continue');
const support = document.querySelector('.support');

toggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  linearBkgd.classList.toggle('hidden');
  toggle.classList.toggle('active');
  navMenu.classList.toggle('hidden');
  body.classList.toggle('overflowHidden');
}

bookmarkBox.addEventListener('click', function () {
  bookmarkBox.classList.toggle('bookmarked');
  bookmark.classList.toggle('bookmarked');
});

body.addEventListener('click', (e) => {
  selectReward(e.target.classList.value);
});

backThisProject.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', closeModal);

function selectReward(value) {
  switch (value) {
    case 'selectBtn1 button':
      toggleModal();
      checkboxBtn[1].checked = true;
      modalItem[1].classList.add('selected');
      break;
    case 'selectBtn2 button':
      toggleModal();
      checkboxBtn[2].checked = true;
      modalItem[2].classList.add('selected');
      break;
  }
}
function toggleModal() {
  if (!support.classList.contains('hidden')) {
    support.classList.toggle('hidden');
  }
  overlay.classList.toggle('hidden');
  modal.classList.toggle('hidden');
  body.classList.toggle('overflowHidden');
}

function closeModal() {
  checkboxBtn.forEach((element, i) => {
    if (element.checked) {
      element.checked = false;
      modalItem[i].classList.remove('selected');
    }
    support.classList.add('hidden');
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    body.classList.toggle('overflowHidden');
  });
}
function addCheckbox() {
  checkboxBtn.forEach((element, i) => {
    if (element.checked) {
      modalItem[i].classList.add('selected');
    } else {
      modalItem[i].classList.remove('selected');
    }
  });
}

function supportWindow() {
  modal.classList.add('hidden');
  support.classList.remove('hidden');
}
