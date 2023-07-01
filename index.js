function showContent(contentId) {
    var contentItems = document.getElementsByClassName('content-item');
    var menuItems = document.getElementsByClassName('menu-item');

    // Hide the close button
    document.getElementById('close-button').style.display = 'none';

    for (var i = 0; i < contentItems.length; i++) {
        contentItems[i].classList.remove('active');
        menuItems[i].classList.remove('active');
    }

    var content = document.getElementById(contentId);
    var menuItem = document.getElementById(contentId + '-menu');

    content.classList.add('active');
    menuItem.classList.add('active');

    // Show the close button
    document.getElementById('close-button').style.display = 'block';
}

function closeContent() {
    var contentItems = document.getElementsByClassName('content-item');
    var menuItems = document.getElementsByClassName('menu-item');

    for (var i = 0; i < contentItems.length; i++) {
        contentItems[i].classList.remove('active');
        menuItems[i].classList.remove('active');
    }

    // Hide the close button
    document.getElementById('close-button').style.display = 'none';
}