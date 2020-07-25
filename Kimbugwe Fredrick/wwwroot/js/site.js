// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.header-light').addClass('navbar-fixed-top');
    }
    else {
        $('.header-light').removeClass('navbar-fixed-top');
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}