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

sloveDropdown = function(value) {
    const elementClick = document.querySelectorAll("." + value.clclickDropdown);
    const elementDropdownItems = document.querySelectorAll("." + value.cldropdown_items);

    // Gắn sự kiện click cho từng nút
    elementClick.forEach(function (btn, index) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const targetMenu = elementDropdownItems[index];
            const isOpen = targetMenu.classList.contains('show');

            // Đóng tất cả trước
            elementDropdownItems.forEach(function(menu){
                menu.classList.remove('show');
            });

            // Nếu menu mục tiêu chưa mở thì mở
            if (!isOpen) {
                targetMenu.classList.add('show');
            }
            
        });
    });

    // Khi click ra ngoài thì đóng menu
    window.addEventListener('click', function(e) {
        elementDropdownItems.forEach(function (menu, i) {
            const clickInsideMenu = menu.contains(e.target);
            const clickOnTrigger = elementClick[i] && elementClick[i].contains(e.target);
            if (!clickInsideMenu && !clickOnTrigger) {
                menu.classList.remove('show');
            }
        });
    });
}

solveScroll = function(value){
    const elementFade = document.querySelector("." + value.clElementFade)
    window.onscroll = function(){
        if (window.scrollY > 50) elementFade.classList.add("fade");
        else elementFade.classList.remove("fade");
        
    }
}

