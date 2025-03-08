let backToTopBtn = document.getElementById("backToTopBtn");

// Show/hide the back-to-top button
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

// Smooth scroll to top
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};