
var deletePost = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancel");
var confirmDelete = document.getElementById("confirm");

//Method to delete modal.
function deleteModal(post){
    openModel(deletePost);
    deletePost.addEventListener("click",function(event){
        if(event.target == cancelDelete ){
            closeModel(deletePost);
        }
        //when the delete icon is clicked for a particular post, then it is deleted if the user confirms.The onclick event of the post triggers this method to be called
        if(event.target == confirmDelete){
            var delelement =  document.getElementById(post);
            try{
                delelement.parentNode.removeChild(delelement);
            }catch (e) {
            }
            finally {
                closeModel(deletePost);
            }
        }
    });
}

window.addEventListener("click", function(event) {
    if (event.target == deletePost) {
        deletePost.style.display = "none";
    }
});

//This method sets the author, title and content into the session storage so that when the post is expanded the details are dynamically filled in the post.html page
function viewPost(author, title, content){

    authorText = document.getElementById(author).innerText;
    titleText = document.getElementById(title).innerText;
    contentText = document.getElementById(content).innerText;

    sessionStorage.setItem("author", authorText);
    sessionStorage.setItem("title", titleText);
    sessionStorage.setItem("content", contentText);
    window.location.href = "../html/post.html";
}
