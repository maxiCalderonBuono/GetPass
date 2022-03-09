const signUpData = document.querySelectorAll(".sign-up-modal");
const modalContent = document.querySelector(".modal-content");
const signUp= document.getElementById("sign-up");
const logIn= document.getElementById("log-in");
const loginBtn = document.querySelector(".login-btn");
const footerPass= document.querySelector(".modal-footer-password");
const footerLogin= document.querySelector(".modal-footer-login");
const forgetPass= document.getElementById("forget-password")


signUp.addEventListener("click" , (e) => {
    
    e.preventDefault();

    modalContent.style.height = "100%"

    signUp.classList.add("modal-hidden");

    loginBtn.classList.add("modal-hidden");

    footerPass.classList.add("modal-hidden");

    footerLogin.classList.remove("modal-hidden")

    signUpData.forEach(data => {
        data.classList.remove("modal-hidden")
    })
})


logIn.addEventListener("click" , (e) => {
    
    e.preventDefault();

    signUp.classList.remove("modal-hidden");

    loginBtn.classList.remove("modal-hidden");

    footerLogin.classList.add("modal-hidden");

    forgetPass.classList.remove("modal-hidden")

    signUpData.forEach(data => {
        data.classList.add("modal-hidden")
    })
})




