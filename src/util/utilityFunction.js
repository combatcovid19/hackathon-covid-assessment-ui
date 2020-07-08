export function validateForm(errors, profile) {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
}

export function validEmailRegex(email) {
    let emailRegx = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i );
    
    return emailRegx.test(email)
}

export function validNmberRegex(number) {
    let numberRegx = new RegExp(/^[0-9\b]+$/);
    
    return numberRegx.test(number)
}

export function calculateAge(dob) {
    if(!dob) {
      return 0;
    }
    var diff_ms = Date.now() - new Date(dob).getTime();
    var age_dt = new Date(diff_ms);  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

export function formValidation(profile, errors){
    // name.
    if (!profile['fname']) {
        errors["fname"] = "Please enter your First Name.";
    } else if (profile['fname'].length < 3) {
        errors["fname"] = "First Name must be at least 3 characters long!";
    } else {
        errors["fname"] = "";
    }
    // DOB.
    if (!profile['dob']) {
        errors["dob"] = "Please enter DOB.";
    } else {
        errors["dob"] = "";
    }
    // email.
    if (!profile['email']) {
        errors["email"] = "Please enter email.";
    } else if (!validEmailRegex(profile['email'])) {
        errors["email"] = "Email is not valid!";
    } else {
        errors["email"] = "";
    }
    // mobile.
    if (!profile['mobile']) {
        errors["mobile"] = "Please enter Mobile Number.";
    // } else if (!validNmberRegex(profile['mobile'])) {
    //     errors["mobile"] = "Please enter only number.";
    // } else if (profile['mobile'].length != 10) {
    //     errors["mobile"] = "Please enter valid phone number.";
    } else {
        errors["mobile"] = "";
    }
    // whatsapp number
    if (!profile['whatsAppNumber']) {
        errors["whatsAppNumber"] = "Please enter whatsApp Number.";
    // } else if (!validNmberRegex(profile['whatsAppNumber'])) {
    //     errors["whatsAppNumber"] = "Please enter only number.";
    // } else if (profile['whatsAppNumber'].length != 10) {
    //     errors["whatsAppNumber"] = "Please enter valid whatsApp number.";
    } else {
        errors["whatsAppNumber"] = "";
    }
    // country.
    if (!profile['country']) {
        errors["country"] = "Please enter country.";
    } else {
        errors["country"] = "";
    }
    // state.
    if (!profile['state']) {
        errors["state"] = "Please enter state.";
    } else {
        errors["state"] = "";
    }
    // city.
    if (!profile['city']) {
        errors["city"] = "Please enter city.";
    } else {
        errors["city"] = "";
    }
    // street.
    if (!profile['street']) {
        errors["street"] = "Please enter street.";
    } else {
        errors["street"] = "";
    }
    // zipCode.
    if (!profile['zipCode']) {
        errors["zipCode"] = "Please enter zipCode.";
    } else if (!validNmberRegex(profile['zipCode'])) {
        errors["whatsAppNumber"] = "Please enter only number.";
    } else {
        errors["zipCode"] = "";
    }
}

export default { validateForm, validEmailRegex, validNmberRegex, calculateAge, formValidation };