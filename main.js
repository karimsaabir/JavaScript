const form = document.querySelector("#registrationForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confP = document.querySelector("#confirmPassword");
const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  error.textContent = "";
  success.textContent = "";

  const user = usernamevalidation();
  const emailv = emailvalidation();
  const pas = passwordVlidation();
  const conpss = confirmPassword();


  if (!user) {
    username.focus();
    return;
  } else if (!emailv) {
    email.focus();
    return;
  }else if (!pas){
    password.focus();
    return;
  }else if (!conpss){ 
    confP.focus();
    return;

  }

  success.textContent = "Registration Successful!";
});

function usernamevalidation() {
  if (username.value.trim() === "") {
    //error
    setError(username, "Username is Required");
    return false;
  } else {
    //success
    setSuccess(username);
    return true;
  }
}

function emailvalidation() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value.match(emailPattern)) {
    setError(email, "Email soogali");
    return false;
  } else {
    setSuccess(email);
    return true;
  }
}

function passwordVlidation() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password.value.match(passwordPattern)) {
    setError(password, "Password must be at least 8 characters long")
    return false
  }else{
     setSuccess(password);
     return true;
  }
}

function confirmPassword(){

    if(password.value.trim()=== "" || confP.value.trim() === ""){
      setError(confP, "Password don't match")
      return false
    }

    if (password.value !== confP.value) {
        setError(confP, "Password is not matched")
        return false
    }else{
        setSuccess(confP);
        return true
    }
}

function setError(element, massage) {
  element.classList.add("invalid");
  element.classList.remove("valid");
  error.textContent = massage;
}

function setSuccess(element) {
  element.classList.remove("invalid");
  element.classList.add("valid");
}
