$("button.hamburger.hamburger--collapse").on("click", function () {
    $("aside.menu_aside").toggleClass("-open");
    $("button.hamburger.hamburger--collapse").toggleClass("is-active");
});