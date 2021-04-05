var postTitle = document.getElementById("postTitle");
var authorNode = document.getElementById("author");
var postContent = document.getElementById("postContent");

editElement = document.getElementById("editPost");
//Details ofcontent, title and author are taken from the session storage. This was set in postlist.js method
window.onload = function() {

    authorNode.innerHTML = sessionStorage.getItem("author");
    postTitle.innerHTML = sessionStorage.getItem("title");
    postContent.innerHTML = sessionStorage.getItem("content");
};

//In the below method we are setting the title and content to be editable and changing the edit button to save button. The classlist for each are accordingly modfied so as to dynamically change the css of the page when editing
function editPost(){
    editElement.innerHTML= 'Save <i class="fa fa-save"></i>';

    var saveClick = document.createAttribute("onclick");
    saveClick.value = 'savePost()'
    editElement.removeAttribute("onclick");
    editElement.setAttributeNode(saveClick);

    editElement.classList.remove("saved");
    editElement.classList.add("btnedit");

    postTitle.classList.add("edit");
    postTitle.setAttribute("contenteditable",true);

    postContent.classList.add("edit");
    postContent.setAttribute("contenteditable",true);

}
//When the edited post is saved, the modifications to classlist made for content and title are reverted and the new text is saved in the session storage which is dynamically added to the webpage.
function savePost(){
    editElement.innerHTML ='Edit <i class="fa fa-edit"></i>';
    editElement.classList.add("saved");
    editElement.classList.remove("btnedit");
    var editClick = document.createAttribute("onclick");
    editClick.value = 'editPost()';
    editElement.setAttributeNode(editClick);

    postTitle.classList.remove("edit");
    postTitle.setAttribute("contenteditable",false);

    postContent.classList.remove("edit");
    postContent.setAttribute("contenteditable",false);
    sessionStorage.setItem("title",postTitle.innerText);
    sessionStorage.setItem('content',postContent.innerText);

}

//Function to calculate the number of likes on the page
var count = 0;
function likeBtnCount(){
    count++;
   document.getElementById('likeButton').innerHTML = '<i class="fa fa-thumbs-up"></i>Liked';
    if(count>0){
        document.getElementById("likeText").innerHTML = count + " people like this";
    }
}

//Funtion to handle adding a comment and displaying the latest comment first
function addComment(){
   var commentData = document.getElementById("commentBox").value.trim();
   commentWrap = document.getElementById("commentsWrapper");
   if(commentData!=""){
       commentWrap.innerHTML = "<p id='comment'>" +commentData+ "</p>" + commentWrap.innerHTML;
       document.getElementById("commentBox").value = "";
   }
}

