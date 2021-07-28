/********JAVASCRIPT FOR CONTACT FORM************/

//Form validation
function validateForm() {
    let x = document.forms["myForm"]["fName"]["lName"]["eMail"].value;
    if (x == "") {
        alert("Some fields are still empty!");
        return false;
    }
}
