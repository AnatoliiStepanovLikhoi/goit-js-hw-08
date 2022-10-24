import throttle from 'lodash.throttle';

const refs = {
    formRef: document.querySelector('.feedback-form'),
    textareaRef: document.querySelector('.feedback-form textarea'),
    emailInputRef: document.querySelector('.feedback-form input'),
};

refs.formRef.addEventListener('input', throttle(onDataInput, 700));
refs.formRef.addEventListener('submit', onFormSubmit);

const FORM_DATA_KEY = "feedback-form-state";
// let formData = JSON.parse(localStorage.getItem(FORM_DATA_KEY)) ?? {};
// let formData = {};


function returnFromLocalStorage() {
    let savedData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));

    if (savedData) {
        console.log(savedData);
        refs.textareaRef.value = savedData.message ?? '';
        refs.emailInputRef.value = savedData.email ?? '';
    };

    // console.log(Object.values(formData));
    // if (Object.values(formData).length = 0)
    //  return;
    // console.log(formData);
    // refs.textareaRef.value = formData.message;
    // refs.emailInputRef.value = formData.email;
};

returnFromLocalStorage();

function onDataInput(event) {
    let savedData = localStorage.getItem(FORM_DATA_KEY);
    savedData = savedData ? JSON.parse(savedData) : {};
    savedData[event.target.name] = event.target.value;
    localStorage.setItem(FORM_DATA_KEY, JSON.stringify(savedData));

    // const inputValue = event.target.value;
    // formData[event.target.name] = inputValue;
    // // console.log(formData);
    // localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    // console.log(formData)
    const formData = new FormData(refs.formRef);

    formData.forEach((value, name) => console.log(name, value))
    onFormReset(event);
};

function onFormReset(event) {
    event.target.reset();
    // formData = {};
    localStorage.removeItem(FORM_DATA_KEY);
};

