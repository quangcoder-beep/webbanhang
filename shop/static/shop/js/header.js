sloveSlide = function(value) {
    const menuToggle = document.querySelector(value.clmenuToggle);
    const overlay = document.querySelector(value.cloverlay);
    const slideContainer = document.querySelector(value.clslideContainer);
    const closeBtn = document.querySelector(value.clcloseBtn);

    // Toggle menu function
    function toggleMenu() {
        const isOpening = !slideContainer.classList.contains('active');
        
        // Toggle active class on menu and overlay
        slideContainer.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle aria-expanded attribute for accessibility
        menuToggle.setAttribute('aria-expanded', isOpening);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpening ? 'hidden' : '';
        
        // Focus management
        if (isOpening) {
            // Focus first focusable element in the menu when opening
            const firstFocusable = slideContainer.querySelector('a, button, [tabindex="0"]');
            if (firstFocusable) firstFocusable.focus();
        } else {
            // Return focus to menu toggle when closing
            menuToggle.focus();
        }
    }

    // Close menu function
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
        
        // Add keyboard support (Enter/Space)
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

    // Close menu when pressing Escape key
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

