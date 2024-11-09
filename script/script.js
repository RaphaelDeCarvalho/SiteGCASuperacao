function slideMenu() {
    let menuButton = document.querySelector(".nav-ul a.icon");
    let menuList = document.querySelector(".div-nav-li-b");
    let menuNav = document.querySelector(".nav");
    let menuItem = document.querySelectorAll(".menu-item");
    
    function openMenu(){
        menuNav.style.backgroundColor = "#ED5E11"
        menuNav.style.boxShadow = "#000000 0 0px 20px"
        menuList.style.height = "280px"
        menuList.style.padding = "1rem 0rem 0rem"
    }
    function closeMenu(){
        menuNav.style.backgroundColor = "#ffffff45"
        menuNav.style.boxShadow = ""
        menuList.style.height = "0px"
        menuList.style.padding = "0rem 0rem 0rem"
    }
    document.addEventListener('click', (event) => {
        for (let index = 0; index < menuItem.length; index++) {
            const element = menuItem[index];
            if (element.contains(event.target) == true){
                closeMenu();
            }
        }
    });
    if (menuList.style.height === "0px") {
        openMenu();
    } else {
        closeMenu();
    }
    document.addEventListener('click', (event) => {
        if (!menuList.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    });
};

function showPlay() {
    let playButton = document.querySelector(".button.play")
    playButton.style.opacity = "60%"
}
function hidePlay() {
    let playButton = document.querySelector(".button.play")
    playButton.style.opacity = "0%"
}

function videoStart() {
    let showVideo = document.querySelector(".video-header")
    let playVideo = document.querySelector("video")
    showVideo.style.opacity = "100%"
    playVideo.play()
    hidePlay()
    let playButton = document.querySelector(".button.play")
    playButton.style.display = "none"
    document.querySelector("#video-header").addEventListener('ended', function () {
        showVideo.style.opacity = "0"
        playButton.style.display = "block"
    })
};

window.onload = setInterval(showPlay, 4000), setInterval(hidePlay, 6000);