let podcastButton = $(`#podcastBttn`)
let aboutButton = $(`#aboutBttn`)
let homePage = $("#home")
let aboutPage = $("#about");
let podcastPage = $("#podcast");
let homeButtn = document.querySelectorAll("#homeBttn")


let animatedButtn = $(".animator");

homeButtn.forEach(element => {
    $(element).on("click", () =>{

    podcastPage.hide(0);
    aboutPage.hide(0);

    homePage.show(0);
    animatedButtn.addClass("animated")
    })
});

animatedButtn.on("transitionend", function() {
    animatedButtn.removeClass("animated");
})



podcastButton.on("click", () => {
    homePage.hide(0);
    aboutPage.hide(0);

    podcastPage.show(0);
    animatedButtn.addClass("animated")


})

aboutButton.on("click", () => {
    homePage.hide(0);
    podcastPage.hide(0);

    aboutPage.show(0);

    animatedButtn.addClass("animated")
})


