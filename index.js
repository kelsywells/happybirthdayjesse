var clicks = 0;

document.addEventListener("click", click, false);

function click(e) {
    clicks += 1;
    var message = "";

    if (e.clicks == 1) {
        alert = "ur dumb lol"
    } else if (e.clicks == 2) {
        alert = "thanks 4 being frens"
    } else if (e.clicks == 3) {
        message = "but literally lol stop it emo"
    } else if (e.clicks == 4) {
        message = "hate u"
    } else if (e.clicks == 5) {
        message = "love ya"
    } else if (e.clicks >= 6) {
        message = "over it"
    } else {
        message = "ummm?"
    }


}


var clicks = 0;
document.addEventListener("click", click, false);
body.addEventListener('click', function click() {
    clicks += 1;
    var message = "";

    if (e.clicks == 1) {
        alert = "ur dumb lol"
    } else if (e.clicks == 2) {
        alert = "thanks 4 being frens"
    } else if (e.clicks == 3) {
        message = "but literally lol stop it emo"
    } else if (e.clicks == 4) {
        message = "hate u"
    } else if (e.clicks == 5) {
        message = "love ya"
    } else if (e.clicks >= 6) {
        message = "over it"
    } else {
        message = "ummm?"
    }

})
