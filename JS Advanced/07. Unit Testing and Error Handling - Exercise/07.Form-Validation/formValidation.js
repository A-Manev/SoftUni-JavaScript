function validate() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const email = document.getElementById('email');
    const company = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const validField = document.getElementById('valid');

    company.addEventListener('change', () => {
        companyInfo.style.display = company.checked ? 'block' : 'none';
    });

    document.getElementById('submit').addEventListener('click', onClick);

    let valid;

    function onClick(ev) {
        valid = true;

        ev.preventDefault();

        checkValidity(username, /^[A-Za-z0-9]{3,20}$/);
        checkValidity(password, /^\w{5,15}$/);
        checkValidity(confirmPassword, /^\w{5,15}$/);
        checkValidity(email, /@(\w)*\./);

        if (confirmPassword.value !== password.value) {
            confirmPassword.style.borderColor = 'red';
            password.style.borderColor = 'red';
            valid = false;
        }

        if (company.checked) {
            if (1000 > Number(companyNumber.value) || Number(companyNumber.value) > 9999) {
                companyNumber.style.borderColor = 'red';
                valid = false;
            } else {
                companyNumber.style.borderColor = ''
            }
        }

        if (valid) {
            validField.style.display = 'block';
        } else {
            validField.style.display = 'none';
        }
    }

    function checkValidity(element, regExp) {
        if (!regExp.test(element.value)) {
            element.style.borderColor = 'red';
            valid = false;
        } else {
            element.style.borderColor = '';
        }
    }
}