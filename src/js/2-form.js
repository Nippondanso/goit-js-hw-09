let loginForm = document.querySelector('.login-form');
let formData = { email: "", message: "" };

if (localStorage.getItem('feedback-form-state')) {
    try {
        let parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
        loginForm.elements.email.value = parsedData.email;
        loginForm.elements.message.value = parsedData.message;
        formData.email = parsedData.email;
        parsedData.message = parsedData.message;
    } catch (error) {
        clg('Error parsing JSON:', error);
    }
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginInput = e.target.elements['email'];
    const messageInput = e.target.elements['message'];

    if (loginInput.value.trim().length === 0 || messageInput.value.trim().length === 0) {
        alert('Fill please all fields');
        return;
    }

    showResultData({ loginInput, messageInput });
});

loginForm.addEventListener('input', e => {
    formData[e.target.name] = e.target.value.trim();

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

const showResultData = (data) => {
    formData = {
        email: data.loginInput.value.trim(),
        message: data.messageInput.value.trim()
    };

    console.log(formData);

    clearForm();
};

const clearForm = () => {
    loginForm.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
};
