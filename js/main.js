[...document.querySelectorAll('.slider_list li')].map(li => {
    li.onclick = function() {
        document.querySelector('.slider_list li.active').classList.remove("active");
        this.classList.add("active")
        document.querySelector('.main_slider img').src = this.firstElementChild.src;
    }

});

[...document.querySelectorAll('.arrow')].map(arr => {

    arr.onclick = function() {
        const activeLi = document.querySelector('.slider_list li.active');
        activeLi.classList.remove("active");
        let src;
        if (this.classList.contains("arrow_left")) {

            if (activeLi.previousElementSibling !== null) {
                activeLi.previousElementSibling.classList.add("active");
                src = activeLi.previousElementSibling.firstElementChild.src;
            } else {
                const last = document.querySelector('.slider_list li:last-child');
                last.classList.add("active");
                src = last.firstElementChild.src;
            }

        } else {
            if (activeLi.nextElementSibling !== null) {
                activeLi.nextElementSibling.classList.add("active");
                src = activeLi.nextElementSibling.firstElementChild.src;
            } else {
                const first = document.querySelector('.slider_list li:first-child');
                first.classList.add("active");
                src = first.firstElementChild.src;
            }

        }

        document.querySelector('.main_slider img').src = src;
    }


});