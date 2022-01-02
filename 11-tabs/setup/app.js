const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;

    if (id) {
        // remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        // hide other articles
        articles.forEach(function (article) {
           article.classList.remove("active");
            article.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

// ______________.s$$_________ ____s$
// _____________s$$$?______s__ ___s$³
// ___________.s$$$___ __.s$,___s$$³
// __________s$$$$³______.s$__ _.$$³
// _____,____$$$$$.______s$³__ __³$
// _____$___$$$$$$s_____s$³___ __³
// ____s$___³$$$$$$$s___$$$
// ____$$____³$$$$$$s.__³$$s
// _____³$.____³$$$$$$$s_.s$$$
// ____`$$.____³$$$$$$$_$$$$__ _s³
// _____³$$s____³$$$$$$s$$$³__ s$³
// ______³$$s____$$$$$s$$$$`__ s$$
// ___s.__$$$$___s$$$$$$$$³_.s $$³
// ___$$_s$$$$..s$$$$$$$$$$$$$ $³
// ___s$.s$$$$s$$$$$$$$$$$$$$$ $
// __s$$$$$$$$$$$$$$$$$$$$$$$³
// _s$$$ssss$$$$$$$$$$ssss$$$s
// $$s§§§§§§§§§s$$$$s§§§§§§§§§$$
// ³§§§§§§§§§§§§§s$s§§§§§§§§§§§§§
// §§§§§§§§§§§§§§§s§§§§§§§§§§§§§§
// ³§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
// _³§§§§§§§§§§§§§§§§§§§§§§§§§§§³
// __³§§§§§§§§§§§§§§§§§§§§§§§§§³
// ___³§§§§§§§§§§§§§§§§§§§§§§§³
// _____³§§§§§§§§§§§§§§§§§§§³
// _______³§§§§§§§§§§§§§§§³
// _________³§§§§§§§§§§§³
// ____________³§§§§§³
// ______________³§³
