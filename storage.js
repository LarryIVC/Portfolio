//Developed by Larry Villegas and Carlos Igreda

const form = document.getElementById('input-form');
const name = document.querySelector('.user_name');

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable('localStorage')) {
  const setFormData = () => {
    const formObject = {
      name: form.user_name.value,
      email: form.email.value,
      message: form.message.value,
    };

    localStorage.setItem('formObject', JSON.stringify(formObject));
  };
  
  form.user_name.addEventListener('change', setFormData);
  form.email.addEventListener('change', setFormData);
  form.message.addEventListener('change', setFormData);

  const isLocalOnline = () => {
    let name = '';
    let email = '';
    let message = '';

    if (JSON.parse(localStorage.getItem('formObject')) === null) {
      name = '';
      email = '';
      message = '';
    } else {
      ({ name, email, message } = JSON.parse(localStorage.getItem('formObject')));
    }

    if (name !== 'empty' || email !== 'empty' || message !== 'empty') {
      form.user_name.value = name;
      form.email.value = email;
      form.message.value = message;
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    isLocalOnline();
  });

}
