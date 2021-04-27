var opened = true;
var turnOn = true;
var droped = true;

function slideMenuAnimation() {
    if(opened) {
        document.querySelector('.navbar').style.width = "300px";
        document.querySelector('.content').style.marginLeft = "300px";
        document.querySelector('html').style.overflow = "hidden";
        document.querySelector('.page-name').style.opacity = "0";
        document.querySelector('main').style.opacity = "0";
        document.querySelector('main').style.transition = "all 0.2s ease";
        document.querySelector('.search-icon').style.opacity = "0";
        
        opened = false;
    } else {
        document.querySelector('.navbar').style.width = "0";
        document.querySelector('.content').style.marginLeft = "0";
        document.querySelector('.page-name').style.opacity = "1";
        document.querySelector('.search-icon').style.opacity = "1";
        document.querySelector('main').style.opacity = "1";
        document.querySelector('main').style.transition = "all 2s ease";
        document.querySelector('html').style.overflow = "auto";
        opened = true;
    }
}

function changeMode() {
    if(turnOn) {
        document.body.style.backgroundColor = "#222";
        document.querySelector('.fa-lightbulb').classList.toggle('turnOn');
        turnOn = false;
    } else {
        document.body.style.backgroundColor = "#fff";
        document.querySelector('.fa-lightbulb').classList.toggle('turnOn');
        turnOn = true;
    }
    
}

function dropDown() {
    if(droped) {
        document.querySelector('.user-description').style.height = "280px";
        document.querySelector('.dropDown').style.transform = "rotate(0.5turn)";
        droped = false;
    } else {
        document.querySelector('.user-description').style.height = "0";
        document.querySelector('.dropDown').style.transform = "rotate(0turn)";
        droped = true;
    }
}

function openDropDown(elem) {
    let elemParent = elem.parentElement.parentElement;
    elemParent.querySelector(".drop-down-body").style.display = "block";
}

function closeDropDown(elem) {
    let elemParent = elem.parentElement.parentElement;
    elemParent.querySelector(".drop-down-body").style.display = "none";
}

function likePost(post) {
    post.querySelector(".fa-heart").classList.toggle('liked');
}