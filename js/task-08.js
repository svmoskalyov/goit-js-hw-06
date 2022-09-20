const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    mail,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}

// --- variant 2
// function onFormSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   const formData = {
//     email: email.value,
//     password: password.value,
//   };

//   console.log(formData);
//   event.currentTarget.reset();
// }
