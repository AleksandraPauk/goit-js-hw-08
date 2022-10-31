import Throttle from 'lodash.throttle';

const formRef = document.querySelector('form');
const emailRef = document.querySelector('input');
const textRef = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', Throttle(addInfo, 500));
formRef.addEventListener('submit', toSubmit);

function addInfo() {
  const info = {
    email: emailRef.value,
    message: textRef.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

function toSubmit(event) {
  event.preventDefault();

  const currentInfo = {
    email: emailRef.value,
    message: textRef.value,
  };
console.log(currentInfo);
    
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function afterReset() {
  const savesInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savesInfo) {
    emailRef.value = savesInfo.email;
    textRef.value = savesInfo.message;
  }
}

afterReset();
