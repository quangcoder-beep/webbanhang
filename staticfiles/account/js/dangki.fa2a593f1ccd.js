function solve(value) {
    let element = document.querySelectorAll("#form-1 input");

    element.forEach(function(giaTri){
        // Validate khi rời khỏi input
        giaTri.onblur = function(e) {
            let id = e.target.parentElement.id;
            let tag = e.target.parentElement.querySelector(".form-message");

            if(id === "username") {
                isUsername(tag, giaTri.value);
            } 
            else if(id === "email") {
                isEmail(tag, giaTri.value);
            }
            else if(id === "password") {
                isPassword(tag, giaTri.value);
            } 
            else if(id === "repassword") {
                let passwordValue = document.querySelector("#password input").value;
                isRepassword(tag, giaTri.value, passwordValue);
            }
        }

        // Validate realtime khi gõ
        giaTri.oninput = function(e) {
            let id = e.target.parentElement.id;
            let tag = e.target.parentElement.querySelector(".form-message");

            if(id === "username") {
                isUsername(tag, giaTri.value);
            } 
            else if(id === "email") {
                isEmail(tag, giaTri.value);
            }
            else if(id === "password") {
                isPassword(tag, giaTri.value);
            } 
            else if(id === "repassword") {
                let passwordValue = document.querySelector("#password input").value;
                isRepassword(tag, giaTri.value, passwordValue);
            }
        }

        // Hỗ trợ phím Enter: chuyển sang input kế tiếp, nếu là input cuối thì submit form
        giaTri.addEventListener('keydown', function(e) {
            // Bỏ qua nếu là textarea (không có trong form hiện tại) hoặc có phím modifier
            if (e.key !== 'Enter' || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;

            const inputs = Array.from(element).filter(function(el){
                // Chỉ xét các input hiển thị và không disabled
                return el.type !== 'hidden' && !el.disabled && el.offsetParent !== null;
            });
            const idx = inputs.indexOf(giaTri);
            if (idx === -1) return;

            e.preventDefault();

            // Nếu chưa phải input cuối -> focus input kế tiếp
            if (idx < inputs.length - 1) {
                inputs[idx + 1].focus();
                return;
            }

            // Nếu là input cuối -> trigger submit (qua onsubmit để chạy validate)
            const form = document.querySelector("#form-1");
            if (form) {
                // Sử dụng requestSubmit nếu có để kích hoạt nút submit/onsubmit chuẩn
                if (typeof form.requestSubmit === 'function') {
                    form.requestSubmit();
                } else {
                    form.dispatchEvent(new Event('submit', { cancelable: true }));
                }
            }
        });
    });

    // Validate khi submit form
    const form = document.querySelector("#form-1");
    form.onsubmit = function(e) {
        e.preventDefault();
        let isValid = true;

        element.forEach(function(giaTri){
            let id = giaTri.parentElement.id;
            let tag = giaTri.parentElement.querySelector(".form-message");

            if(id === "username") {
                if(!isUsername(tag, giaTri.value)) isValid = false;
            } 
            else if(id === "email") {
                if(!isEmail(tag, giaTri.value)) isValid = false;
            }
            else if(id === "password") {
                if(!isPassword(tag, giaTri.value)) isValid = false;
            } 
            else if(id === "repassword") {
                let passwordValue = document.querySelector("#password input").value;
                if(!isRepassword(tag, giaTri.value, passwordValue)) isValid = false;
            }
        });

        if(isValid) form.submit();
    }

    function isUsername(tag, value) { 
        if(!value.trim()) {
            tag.innerText = "Vui lòng nhập trường này";
            return false;
        } else {
            tag.innerText = '';
            return true;
        }
    }

    function isEmail(tag, value) {
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!value.trim()) {
            tag.innerText = "Vui lòng nhập email";
            return false;
        } else if(!regex.test(value)) {
            tag.innerText = "Email không hợp lệ";
            return false;
        } else {
            tag.innerText = '';
            return true;
        }
    }

    function isPassword(tag, value) {
        if(!value.trim()) {
            tag.innerText = "Vui lòng nhập mật khẩu";
            return false;
        } else {
            tag.innerText = '';
            return true;
        }
    }

    function isRepassword(tag, value, password) {
        if(!value.trim()) {
            tag.innerText = "Vui lòng nhập lại mật khẩu";
            return false;
        } else if(value !== password) {
            tag.innerText = "Mật khẩu nhập lại không khớp";
            return false;
        } else {
            tag.innerText = '';
            return true;
        }
    }
}
