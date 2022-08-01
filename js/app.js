window.onscroll = function () {
    myFunction()
};
var header = document.getElementById("myHeader");
var stickyr = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > stickyr) {
        header
            .classList
            .add("stickyMob");
    } else {
        header
            .classList
            .remove("stickyMob");
    }
}