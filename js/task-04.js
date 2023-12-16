const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleForm);

const obj = {};
function handleForm(event) {
    event.preventDefault();
    const eml = loginForm.elements.email.value;
    const psw = loginForm.elements.password.value;
	if (eml === "" || psw === "") {
        alert('All form fields must be filled in');
    }
    obj.email = eml.trim();
    obj.password = psw.trim();
    console.log(obj);
    loginForm.reset();
};