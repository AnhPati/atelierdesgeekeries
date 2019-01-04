let header = document.querySelector("#atgHeader");

function scrolled() {
    let windowHeigth = document.body.clientHeight;
    let currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

    header.className = (currentScroll >= windowHeight - header.offsetHeight) ? "fixed" : "";
}

addEventListener("scroll", scrolled, false);