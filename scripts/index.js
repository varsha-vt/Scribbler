
// Get the modal
var createPostModal = document.getElementById("createPostModal");


// Get the button that opens the modal
var createPostBtn  = document.getElementById("createPost");

// Get the <span> element that closes the modal
var closeCreatePost = document.getElementById("closeCreatePost");

function openModel(model){
    model.style.display = "block";
}

function closeModel(model){
    model.style.display = "none";
}

// When the user clicks on the button, open the modal
createPostBtn.onclick = function() {
    openModel(createPostModal);
}

closeCreatePost.onclick = function() {
    closeModel(createPostModal);
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
});
