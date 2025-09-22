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
        elementSlideContainer.classList.remove('active')
        elementOverlay.classList.remove('active')
    }
    
}