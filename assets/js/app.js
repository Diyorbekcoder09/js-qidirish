const btn1 = document.querySelector(".btn1");
const deleteEl = document.querySelector(".delete");
const bodyEl = document.querySelector(".body_task");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const mushuk = document.querySelector(".mushuk")
const it = document.querySelector(".it")
const baliq = document.querySelector(".baliq")
const ilon = document.querySelector(".ilon")
const kompyuter = document.querySelector(".kompyuter")
const uy = document.querySelector(".uy")
const dasturchi = document.querySelector(".dasturchi")
const mashina = document.querySelector(".mashina")
const sichqon = document.querySelector(".sichqon")
const koptok = document.querySelector(".koptok")








deleteEl.addEventListener("click", () => {
    bodyEl.style.display = "none"


});




form.addEventListener("submit", (e) => {
    e.preventDefault();



    switch (input.value) {
        case "mushuk":
            mushuk.style.display = "block";
            koptok.style.display = "none"
            ilon.style.display = "none"
            sichqon.style.display = "none"
            it.style.display = "none"
            dasturchi.style.display = "none"
            kompyuter.style.display = "none"
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            input.value = "";
            break;


        case "koptok":

            input.value = "";
            koptok.style.display = "block"
            mushuk.style.display = "none";
            ilon.style.display = "none"
            sichqon.style.display = "none"
            it.style.display = "none"
            dasturchi.style.display = "none"
            kompyuter.style.display = "none"
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            break;


        case "dasturchi":

            input.value = "";
            dasturchi.style.display = "block"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            ilon.style.display = "none"
            sichqon.style.display = "none"
            it.style.display = "none"
            kompyuter.style.display = "none"
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            break;

        case "kompyuter":

            input.value = "";
            kompyuter.style.display = "block"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            ilon.style.display = "none"
            sichqon.style.display = "none"
            it.style.display = "none"
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            break;

        case "it":

            input.value = "";
            it.style.display = "block"
            kompyuter.style.display = "none"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            ilon.style.display = "none"
            sichqon.style.display = "none"
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            break;
        case "ilon":

            input.value = "";
            ilon.style.display = "block"
            it.style.display = "none"
            kompyuter.style.display = "none"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            sichqon.style.display = "none"
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            break;

        case "sichqon":

            input.value = "";
            sichqon.style.display = "block"
            ilon.style.display = "none"
            it.style.display = "none"
            kompyuter.style.display = "none"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            break;

        case "baliq":

            input.value = "";
            sichqon.style.display = "none"
            ilon.style.display = "none"
            it.style.display = "none"
            kompyuter.style.display = "none"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "block"
            break;

        case "uy":

            input.value = "";
            sichqon.style.display = "none"
            ilon.style.display = "none"
            it.style.display = "none"
            kompyuter.style.display = "none"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            uy.style.display = "block"
            mashina.style.display = "none"
            baliq.style.display = "none"
            break;

        case "mashina":

            input.value = "";
            sichqon.style.display = "none"
            ilon.style.display = "none"
            it.style.display = "none"
            kompyuter.style.display = "none"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            uy.style.display = "none"
            mashina.style.display = "block"
            baliq.style.display = "none"

            break;
        default:
            const hEl = document.createElement("h2");
            input.value = "";
            sichqon.style.display = "none"
            ilon.style.display = "none"
            it.style.display = "none"
            kompyuter.style.display = "none"
            dasturchi.style.display = "none"
            koptok.style.display = "none"
            mushuk.style.display = "none";
            uy.style.display = "none"
            mashina.style.display = "none"
            baliq.style.display = "none"
            hEl.innerText = "bunday ma'lumot mavjud emas"
            hEl.style.textAlign = "center"
            bodyEl.appendChild(hEl)
            break;
    }








    input.value = "";

});

