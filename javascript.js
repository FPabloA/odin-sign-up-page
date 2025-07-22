const passwrdField = document.querySelector("#password");
const confirmpasswrdField = document.querySelector("#password_confirm");

function validatePass () {
    console.log(passwrdField.value);
    console.log(confirmpasswrdField.value);
    if (passwrdField.value != confirmpasswrdField.value) {
        console.log("is this in")
        passwrdField.setAttribute('aria-invalid', "true");;
        confirmpasswrdField.setAttribute("isvalid", "true");
    }
}