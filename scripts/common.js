//Basic structure of a modal taken from example https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

// Get the button that opens the modal
var signUpBtn  = document.getElementById("signUpBtn");
var signInBtn  = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

// Get the <span> element that closes the modal
var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

function openModel(model){
    model.style.display = "block";
}

function closeModel(model){
    model.style.display = "none";
}

// When the user clicks on the button, open the modal
signUpBtn.onclick = function() {
    openModel(signUpModal);
}
signInBtn.onclick = function() {
    openModel(signInModal);
}

closeSignUp.onclick = function() {
    closeModel(signUpModal);
}
closeSignIn.onclick = function() {
    closeModel(signInModal);
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
});

//functionality for the signup link
signUpLink.onclick = function() {
    closeModel(signInModal);
    openModel(signUpModal);
};