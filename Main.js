window.onload = function() {
    var navLinks = document.querySelectorAll('nav ul li a');

    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === document.URL) {
            navLinks[i].className = 'active';
            console.log(navLinks[i].href);
        }
        console.log(navLinks[i].href);

    }
}