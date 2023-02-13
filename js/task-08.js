const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    console.log(event.currentTarget);

    if (email.value === '' || password.value === '') {
        alert('Please fill all fields!');
    };    

    if (email.value !== '' && password.value !== '') {

        const formData = {};
        formData.email = email.value;
        formData.password = password.value;
        console.log(formData);

        event.currentTarget.reset();
    }
};

