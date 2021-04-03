
var deletePost = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancel");
var confirmDelete = document.getElementById("confirm");


function deleteModal(post){
    console.log("Entering delete model method");
    openModel(deletePost);
    console.log("Delete model opened")
    deletePost.addEventListener("click",function(event){
        if(event.target == cancelDelete ){
            console.log("cancel detected");
            closeModel(deletePost);
        }
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
