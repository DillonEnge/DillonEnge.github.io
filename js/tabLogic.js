var about = document.getElementsByClassName('aboutContent');
var gallery = document.getElementById('galleryContent');
var shop = document.getElementById('shopContent');
var contact = document.getElementById('contactContent');

function aboutOnClick(){
    console.log('about clicked');
    window.location.href = "about.html";
}
function galleryOnClick(){
    console.log('gallery clicked');
    window.location.href = "gallery.html";
}
function shopOnClick(){
    console.log('shop clicked');
    window.location.href = "shop.html";
}
function contactOnClick(){
    console.log('contact clicked');
    window.location.href = "contact.html";
}
