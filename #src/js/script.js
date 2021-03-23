$(document).ready(function () {
    @@include('index.js');

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var requestScene = document.getElementById('requestScene');
    var parallaxInstance = new Parallax(requestScene);
})