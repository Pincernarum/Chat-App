const view = {}
view.setActiveScreen = (screenName) => {
    switch(screenName) {
        case "welcomeScreen":
            document.getElementById("app").innerHTML = components.welcomePage
        break
        case "loginScreen":
            document.getElementById("app").innerHTML = components.loginPage
            document.getElementById("redirect-register").addEventListener("click", () => {
                view.setActiveScreen("registerScreen")
            })
            const loginForm = document.getElementById("login-form")
            loginForm.addEventListener("submit", (event) => {
                event.preventDefault()
                const dataLogin = {
                    email: loginForm.loginEmail.value,
                    password: loginForm.loginPassword.value,
                }
                controller.login(dataLogin)
            })
        break
        case "registerScreen":
            document.getElementById("app").innerHTML = components.registerPage
            document.getElementById("redirect-login").addEventListener("click", () => {
                view.setActiveScreen("loginScreen")
            })
            const registerForm = document.getElementById("register-form")
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault()
                const dataRegister = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.registerEmail.value,
                    password: registerForm.registerPassword.value,
                    confirmPassword: registerForm.confirmPassword.value,
                }
                controller.register(dataRegister)
            })
        break
    }
}
view.setErrorMessage = (elementId, message) => {
    document.getElementById(elementId).innerText = message
}