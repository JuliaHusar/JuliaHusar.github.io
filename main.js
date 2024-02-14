window.addEventListener('load', function() {
    var navLinks = document.querySelectorAll('nav ul li a');

    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href === document.URL ) {
            navLinks[i].className = 'active';
        } else {
            navLinks[i].className = 'inactive';
        }
        console.log(navLinks[i].href);
    }
    const nums = [10,20,2,17];
    console.log(nums.every(num => num > 5));


});
