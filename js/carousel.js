let slideIndex = 1;
showSlides(slideIndex);

// 显示下一张幻灯片
function nextSlide() {
    showSlides(slideIndex += 1);
}

// 显示上一张幻灯片
function prevSlide() {
    showSlides(slideIndex -= 1);
}

// 显示特定序号的幻灯片
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 显示幻灯片函数
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-item");
    const indicators = document.getElementsByClassName("indicator");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        indicators[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].classList.add("active");
}

// 自动幻灯片播放
let autoSlide = setInterval(function() {
    nextSlide();
}, 3000);