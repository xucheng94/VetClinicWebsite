// JavaScript source code

function validate_Form() {
    var fName = document.forms["validation_Form"]["fName"].value;
    var lName = document.forms["validation_Form"]["lName"].value;
    var email = document.forms["validation_Form"]["email"].value;
    var phone = document.forms["validation_Form"]["phone"].value;
    var address = document.forms["validation_Form"]["address"].value;

    if (fName == "") {
        alert("please input your First name ");
        return false;
    }
    if (lName == "") {
        alert("please input your Last name");
        return false;
    }
    if (email == "") {
        alert("please input your Email");
        return false;
    }
    if (phone == "") {
        alert("please input your address phone number");
        return false;
    }
    if (address == "") {
        alert("please input your address")
        return false;
    }
}
