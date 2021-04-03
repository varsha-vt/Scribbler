var titleNode = document.getElementById("postTitle");
var authorNode = document.getElementById("author");
var contentNode = document.getElementById("postContent");

window.onload = function() {

    authorNode.innerHTML = sessionStorage.getItem("author");
    titleNode.innerHTML = sessionStorage.getItem("title");
    contentNode.innerHTML = sessionStorage.getItem("content");
};