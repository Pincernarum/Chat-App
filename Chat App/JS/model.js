const model = {};
model.register = async ({ firstName, lastName, email, password }) => {
    try{
        await firebase
		.auth()
        .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
        displayName: firstName + " " + lastName
    })
    firebase.auth().currentUser.sendEmailVerification()
    } catch(err) {
        alert(err)
    }
};
model.login = async ({email, password}) => {
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        view.setActiveScreen("welcomeScreen")
    } catch(err) {
        alert(err)
    }
}
