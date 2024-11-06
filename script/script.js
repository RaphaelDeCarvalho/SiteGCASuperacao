function slideMenu() {
    let menuList = document.querySelector(".div-nav-li-b");
    if (menuList.style.height === "0px") {
    menuList.style.height = "280px"
    menuList.style.padding = "1rem 0rem 0rem"
    } else {
        menuList.style.height = "0px"
        menuList.style.padding = "0rem 0rem 0rem"
    }

  };