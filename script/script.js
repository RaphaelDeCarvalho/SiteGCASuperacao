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