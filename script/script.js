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
    function showVideo() {
        let showVideo = document.querySelector(".video-header")
        let videoBg = document.querySelector(".video-bg")
        let playButton = document.querySelector(".button.play")
        showVideo.style.position = "fixed"
        showVideo.style.zIndex = "2"
        showVideo.style.width = "100%"
        videoBg.style.display = "block"
        showVideo.style.opacity = "100%"
        playButton.style.display = "none"
    }
    showVideo()
    let playVideo = document.querySelector("video")
    playVideo.play()
    hidePlay()
    function hideVideo() {
        let showVideo = document.querySelector(".video-header")
        let videoBg = document.querySelector(".video-bg")
        let playButton = document.querySelector(".button.play")
        videoBg.style.display = "none"
        showVideo.style.width = ""
        showVideo.style.opacity = "0"
        showVideo.style.position = ""
        showVideo.style.zIndex = ""
        playButton.style.display = "block"
    }
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            hideVideo();
            playVideo.pause();
            playVideo.currentTime = 0;
        }
      };
    document.querySelector("#video-header").addEventListener('ended', function () {
        hideVideo();
        playVideo.pause();
        playVideo.currentTime = 0;
    })
    document.querySelector("#video-bg").addEventListener('click', function () {
        hideVideo();
        playVideo.pause();
        playVideo.currentTime = 0;
    })
};

window.onload = setInterval(showPlay, 4000), setInterval(hidePlay, 6000);