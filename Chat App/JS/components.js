const components = {};
components.welcomePage = "<h3>Welcome</h3>";
components.registerPage = `
<div id = "register-container">
    <div id="register-background-image"></div>
    <div id="register-form-wrapper">
        <div class="title">MindX Chat</div>
        <form id="register-form">
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First name" name="firstName">
                    <div class="err" id="first-name-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last name" name="lastName">
                    <div class="err" id="last-name-error"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="registerEmail">
                <div class="err" id="register-email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="registerPassword">
                <div class="err" id="register-password-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm password" name="confirmPassword">
                <div class="err" id="confirm-password-error"></div>
            </div>
            <div id="register-form-action">
                <div>
                    Already have an account? <span id="redirect-login" class="cursor-pointer">Login</span>
                </div>
                <button type="submit" class="btn">Register</button>
            </div>
        </form>
    </div>
</div>
`;
components.loginPage = `
    <div id="login-container">
        <div id="login-background-image"></div>
        <div id="login-form-wrapper">
            <div class="title">MindX Chat</div>
            <form id="login-form">
                <div class="input-wrapper">
                    <input type="email" placeholder="Email" name="loginEmail">
                    <div class="err" id="login-email-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="loginPassword">
                    <div class="err" id="login-password-error"></div>
                </div>
                <div id="login-form-action">
                    <div>
                        Don't have an account? <span id="redirect-register" class="cursor-pointer">Register</span>
                    </div>
                    <button type="submit" class="btn">Login</button>
                </div>
            </form>
        </div>
    </div>
`;
