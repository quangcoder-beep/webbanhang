sloveSlide = function(value) {
    const menuToggle = document.querySelector(value.clmenuToggle);
    const overlay = document.querySelector(value.cloverlay);
    const slideContainer = document.querySelector(value.clslideContainer);
    const closeBtn = document.querySelector(value.clcloseBtn);

    // Hàm bật/tắt menu
    function toggleMenu() {
        const isOpening = !slideContainer.classList.contains('active');
        
        // Bật/tắt class active trên menu và lớp phủ
        slideContainer.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Bật/tắt thuộc tính aria-expanded cho khả năng truy cập
        menuToggle.setAttribute('aria-expanded', isOpening);
        
        // Đóng menu khi nhấp vào liên kết trong menu mở
        document.body.style.overflow = isOpening ? 'hidden' : '';
        
        // Quản lý tiêu điểm
        if (isOpening) {
            // Đặt tiêu điểm vào phần tử có thể focus đầu tiên trong menu khi mở
            const firstFocusable = slideContainer.querySelector('a, button, [tabindex="0"]');
            if (firstFocusable) firstFocusable.focus();
        } else {
            // Trả lại tiêu điểm về nút chuyển đổi menu khi đóng
            menuToggle.focus();
        }
    }

    // Hàm đóng menu
    function closeMenu() {
        slideContainer.classList.remove('active');
        overlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        menuToggle.focus();
    }

    // Event Listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Thêm hỗ trợ bàn phím (Enter/Space)
        menuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeMenu();
            }
        });
    }

    // Đóng menu khi nhấn phím Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && slideContainer.classList.contains('active')) {
            closeMenu();
        }
    });
};

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

