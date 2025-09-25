sloveSlide = function(value){
    const elementButton = document.querySelector(value.clmenuToggle)
    const elementOverlay = document.querySelector(value.cloverlay)
    const elementSlideContainer = document.querySelector(value.clslideContainer)
    const elementCloseBtn = document.querySelector(value.clcloseBtn)

    elementButton.onclick = function(e){
        e.stopPropagation()
        elementSlideContainer.classList.add('active')
        elementOverlay.classList.add('active')
    }

    elementCloseBtn.onclick = function(e){
        e.stopPropagation()
        elementSlideContainer.classList.remove('active')
        elementOverlay.classList.remove('active')
    }
    
    elementOverlay.onclick = function(e){
        e.stopPropagation()
        elementSlideContainer.classList.remove('active' )
        elementOverlay.classList.remove('active')
    }
    
}

function sloveDropdown(value) {
    const elementClick = document.querySelectorAll("." + value.clclickDropdown);
    const elementDropdownItems = document.querySelectorAll("." + value.cldropdown_items);

    // Gắn sự kiện click cho từng nút
    elementClick.forEach(function (btn, index) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();      // tránh reload khi href="#"
            e.stopPropagation();

            // Đóng tất cả menu trước
            elementDropdownItems.forEach(menu => menu.classList.remove("show"));

            // Mở đúng menu theo index
            elementDropdownItems[index].classList.toggle("show");
        });
    });

    // Khi click ra ngoài thì đóng menu
    window.addEventListener("click", function (e) {
        elementDropdownItems.forEach(function (menu, index) {
            if (!menu.contains(e.target) && !elementClick[index].contains(e.target)) {
                menu.classList.remove("show");
            }
        });
    });
}

