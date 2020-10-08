const controller = {};
controller.register = ({
	firstName,
	lastName,
	email,
	password,
	confirmPassword,
}) => {
	if (firstName === "") {
		view.setErrorMessage("first-name-error", "Please input first name");
	} else {
		view.setErrorMessage("first-name-error", "");
	}
	if (lastName === "") {
		view.setErrorMessage("last-name-error", "Please input last name");
	} else {
		view.setErrorMessage("last-name-error", "");
	}
	if (email === "") {
		view.setErrorMessage("register-email-error", "Please input email");
	} else {
		view.setErrorMessage("register-email-error", "");
	}
	if (password === "") {
		view.setErrorMessage(
			"register-password-error",
			"Please input password"
		);
	} else {
		view.setErrorMessage("register-password-error", "");
	}
	if (confirmPassword === "") {
		view.setErrorMessage(
			"confirm-password-error",
			"Please confirm password"
		);
	} else {
		view.setErrorMessage("confirm-password-error", "");
	}
	if (password !== confirmPassword) {
		view.setErrorMessage("confirm-password-error", "Password didn't match");
	} else {
		view.setErrorMessage("confirm-password-error", "");
	}
	if (
		firstName !== "" &&
		lastName !== "" &&
		email !== "" &&
		password !== "" &&
		confirmPassword !== "" &&
		password == confirmPassword
	) {
		const dataRegister = {
			firstName,
			lastName,
			email,
			password,
		};
		model.register(dataRegister);
	}
};
controller.login = ({ email, password }) => {
	if (email === "") {
		view.setErrorMessage("login-email-error", "Please input email");
	} else {
		view.setErrorMessage("login-email-error", "");
	}
	if (password === "") {
		view.setErrorMessage("login-password-error", "Please input password");
	} else {
		view.setErrorMessage("login-password-error", "");
	}
	if (email !== "" && password !== "") {
		const dataLogin = {
			email,
			password,
		};
		model.login(dataLogin);
	}
};
