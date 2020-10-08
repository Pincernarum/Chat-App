const init = () => {
	var firebaseConfig = {
		apiKey: "AIzaSyDVNIqaeyS7qXm6Kh-RKgkqqlPD6P2T03s",
		authDomain: "chatapp-beec7.firebaseapp.com",
		databaseURL: "https://chatapp-beec7.firebaseio.com",
		projectId: "chatapp-beec7",
		storageBucket: "chatapp-beec7.appspot.com",
		messagingSenderId: "699381771938",
		appId: "1:699381771938:web:1c939739a4359b646231fb",
	};
    firebase.initializeApp(firebaseConfig);
    console.log(firebase.app().name)
	view.setActiveScreen("registerScreen");
};
window.onload = init;
