window.addEventListener('load', function() {
    var juliaHusarPicture = document.getElementById('juliaHusarPicture');
    var imagePosition = {x: 0, y: 0};
    const fixedImagePosition = juliaHusarPicture.getBoundingClientRect();
    var initialMousePosition = {x: 0, y: 0};
    juliaHusarPicture.draggable = true;

    juliaHusarPicture.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('img', juliaHusarPicture.id);
        initialMousePosition.x = event.clientX;
        initialMousePosition.y = event.clientY;
        var rect = juliaHusarPicture.getBoundingClientRect();
        imagePosition.x = rect.left;
        imagePosition.y = rect.top;
    });


    juliaHusarPicture.addEventListener('dragover', function(event) {
        event.preventDefault();
        var dx = event.clientX - initialMousePosition.x;
        var dy = event.clientY - initialMousePosition.y;
        juliaHusarPicture.style.left = imagePosition.x + dx + 'px';
        juliaHusarPicture.style.top = imagePosition.y + dy + 'px';
    });

    juliaHusarPicture.addEventListener('drop', function(event) {
        juliaHusarPicture.style.left = fixedImagePosition.x + 'px';
        juliaHusarPicture.style.top = fixedImagePosition.y + 'px';
        event.preventDefault();
    });

});

