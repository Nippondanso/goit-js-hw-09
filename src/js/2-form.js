let loginForm = document.querySelector('.login-form');
let formData = { email: "", message: "" };

if (localStorage.getItem('feedback-form-state')) {
    let parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    loginForm.elements.email.value = parsedData.email;
    loginForm.elements.message.value = parsedData.message;
    formData.email = parsedData.email;
    parsedData.message = parsedData.message;
}

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginInput = e.target.elements['email'];
    const messageInput = e.target.elements['message'];

    if (loginInput.value.trim().length === 0 || passwordInput.value.trim().length === 0) {
        alert('Fill please all fields');
        return;
    }

    formData = {
        email: loginInput.value.trim(),
        password: messageInput.value.trim()
    };

    console.log(formData);
    e.target.reset();
});

loginForm.addEventListener('input', e => {

    formData[e.target.name] = e.target.value.trim();
    console.log(formData);


    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})