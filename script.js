const password = document.querySelector("#user_password");
const passwordConfirm = document.querySelector("#confirm_password");
const button = document.querySelector("button");
const warningMsg = document.querySelector(".warning-msg");

button.addEventListener("click", (e) => {
    if(password.value != passwordConfirm.value){
        e.preventDefault(); // Does not let to 'submit' the page in case of unmatched password
        password.classList.add("warning-input");
        passwordConfirm.classList.add("warning-input");
        warningMsg.textContent = "*Password do not match";
    }
    else{
        password.classList.remove("warning-input");
        passwordConfirm.classList.remove("warning-input");
        warningMsg.textContent = "";
    }
});