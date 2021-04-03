var postTitle = document.getElementById("postTitle");
var authorNode = document.getElementById("author");
var postContent = document.getElementById("postContent");

editElement = document.getElementById("editPost");

window.onload = function() {

    authorNode.innerHTML = sessionStorage.getItem("author");
    postTitle.innerHTML = sessionStorage.getItem("title");
    postContent.innerHTML = sessionStorage.getItem("content");
};

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

var count = 0;
function likeBtnCount(){
    count++;
   document.getElementById('likeButton').innerHTML = '<i class="fa fa-thumbs-up"></i>Liked';
    if(count>0){
        document.getElementById("likeText").innerHTML = count + " people like this";
    }
}

function addComment(){
   var commentData = document.getElementById("commentBox").value.trim();
   commentWrap = document.getElementById("commentsWrapper");
   if(commentData!=""){
       commentWrap.innerHTML = "<p id='comment'>" +commentData+ "</p>" + commentWrap.innerHTML;
       document.getElementById("commentBox").value = "";
   }
}

