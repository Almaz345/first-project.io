const afisha = document.querySelector(".afisha");
const seans = document.querySelector(".seans");
const kino = document.querySelector(".kino");
const contacts = document.querySelector(".contacts");
const line = document.querySelector(".line");

afisha.addEventListener("click", () => {
    line.style.left = afisha.offsetLeft + "px";
    line.style.width = afisha.offsetWidth + "px";
    line.style.padding = "0 5px";
    line.style.marginLeft = "-5px";
    afisha.style.fontWeight = "bold";
    seans.style.fontWeight = "normal";
    kino.style.fontWeight = "normal";
    contacts.style.fontWeight = "normal";
});

seans.addEventListener("click", () => {
    line.style.left = seans.offsetLeft + "px";
    line.style.width = seans.offsetWidth + "px";
    line.style.padding = "0 5px";
    line.style.marginLeft = "-5px";
    seans.style.fontWeight = "bold";
    afisha.style.fontWeight = "normal";
    kino.style.fontWeight = "normal";
    contacts.style.fontWeight = "normal";
});

kino.addEventListener("click", () => {
    line.style.left = kino.offsetLeft + "px";
    line.style.width = kino.offsetWidth + "px";
    line.style.padding = "0 5px";
    line.style.marginLeft = "-5px";
    kino.style.fontWeight = "bold";
    seans.style.fontWeight = "normal";
    afisha.style.fontWeight = "normal";
    contacts.style.fontWeight = "normal";
});

contacts.addEventListener("click", () => {
    line.style.left = contacts.offsetLeft + "px";
    line.style.width = contacts.offsetWidth + "px";
    line.style.padding = "0 5px";
    line.style.marginLeft = "-5px";
    contacts.style.fontWeight = "bold";
    seans.style.fontWeight = "normal";
    kino.style.fontWeight = "normal";
    afisha.style.fontWeight = "normal";
});

const posters = document.querySelectorAll(".posters");
const poster_content = document.querySelectorAll(".poster-content");
const day_kino = document.getElementById("day-kino");
const today = document.querySelector(".today");
const tomorrow = document.querySelector(".tomorrow");
const time1 = document.querySelector(".time1");
const time2 = document.querySelector(".time2");
const time3 = document.querySelector(".time3");
const time4 = document.querySelector(".time4");
const relaw = document.querySelector(".relaw");

posters.forEach(posters => {
    poster_content.forEach(poster_content => {
        if(poster_content.dataset.set == "noinfo") {
            poster_content.style.height = "80%";
        }

        if(posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "noinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
});
    today.style.background = "transparent";
today.addEventListener("click", () => {
    if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.top = "0";
            posters.style.left = "0";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.left = today.offsetLeft + "px";
    relaw.style.width = today.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    today.style.color = "white";
    today.style.background = "transparent";
    today.style.transition = "0s, color 0.3s ease-in-out";
    tomorrow.style.background = "";
    tomorrow.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
});
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

day_kino.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - relaw.offsetLeft;
    e.preventDefault();
    relaw.style.filter = "contrast(100%)";
    relaw.style.backgroundColor = "rgb(75, 0, 75)";
});
window.addEventListener("mousemove", (e) => {
    const rect = relaw.getBoundingClientRect();

        if(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
            day_kino.setAttribute("title", "Перетащите или кликните на любой раздел");
        } else {
            day_kino.setAttribute("title", "");
        }

    if(!isDragging) return;
    relaw.style.left = (e.clientX - offsetX) + "px";
    posters.style.left = -(e.clientX - offsetX) + "px";
    if(posters.style.left > "0") {
        posters.style.left = "0";
    }
    if(relaw.style.left < "0") {
        relaw.style.left = "30px";
    }
    if(relaw.offsetLeft < tomorrow.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1") {
                setTimeout(() => {
                posters.style.position = "relative";
                 
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "noinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.width = today.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    today.style.color = "white";
    today.style.background = "transparent";
    today.style.transition = "0s, color 0.3s ease-in-out";
    tomorrow.style.background = "transparent";
    tomorrow.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "transparent";
    time2.style.transition = "";
    time2.style.background = "transparent";
    time3.style.transition = "";
    time3.style.background = "transparent";
    time4.style.transition = "";
    time4.style.background = "transparent";
    tomorrow.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > today.offsetLeft && relaw.offsetLeft < time1.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1") {
                setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2") {
                setTimeout(() => {
                posters.style.position = "relative";
                 
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 3") {
                setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 4") {
                setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5") {
                setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6") {
                setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.width = tomorrow.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    tomorrow.style.color = "white";
    tomorrow.style.background = "transparent";
    tomorrow.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "transparent";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "transparent";
    time2.style.transition = "";
    time2.style.background = "transparent";
    time3.style.transition = "";
    time3.style.background = "transparent";
    time4.style.transition = "";
    time4.style.background = "transparent";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > tomorrow.offsetLeft && relaw.offsetLeft < time2.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
                setTimeout(() => {
                posters.style.position = "relative";
                 
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.width = time1.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time1.style.color = "white";
    time1.style.background = "transparent";
    time1.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "transparent";
    today.style.transition = "";
    tomorrow.style.transition = "";
    tomorrow.style.background = "transparent";
    time2.style.transition = "";
    time2.style.background = "transparent";
    time3.style.transition = "";
    time3.style.background = "transparent";
    time4.style.transition = "";
    time4.style.background = "transparent";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if (relaw.offsetLeft > time1.offsetLeft && relaw.offsetLeft < time3.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "relative";
                 
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.width = time2.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time2.style.color = "white";
    time2.style.background = "transparent";
    time2.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "transparent";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "transparent";
    tomorrow.style.transition = "";
    tomorrow.style.background = "transparent";
    time3.style.transition = "";
    time3.style.background = "transparent";
    time4.style.transition = "";
    time4.style.background = "transparent";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > time2.offsetLeft && relaw.offsetLeft < time4.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "relative";
                 
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "100%";
        }
        relaw.style.width = time3.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time3.style.color = "white";
    time3.style.background = "transparent";
    time3.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "transparent";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "transparent";
    time2.style.transition = "";
    time2.style.background = "transparent";
    tomorrow.style.transition = "";
    tomorrow.style.background = "transparent";
    time4.style.transition = "";
    time4.style.background = "transparent";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > time3.offsetLeft && relaw.offsetLeft >= time4.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
                 
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "relative";
                 
            }, 0);
            posters.style.left = "0";
        }
    relaw.style.left = time4.offsetLeft + "px";
    relaw.style.width = time4.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time4.style.color = "white";
    time4.style.background = "transparent";
    time4.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "transparent";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "transparent";
    time2.style.transition = "";
    time2.style.background = "transparent";
    time3.style.transition = "";
    time3.style.background = "transparent";
    tomorrow.style.transition = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    }
});
window.addEventListener("mouseup", () => {
    relaw.style.filter = "contrast(50%)";
    relaw.style.backgroundColor = "blue";
    isDragging = false;
    if(relaw.offsetLeft < today.offsetLeft && relaw.offsetLeft < tomorrow.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "noinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        relaw.style.left = today.offsetLeft + "px";
    relaw.style.width = today.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    today.style.color = "white";
    today.style.background = "transparent";
    today.style.transition = "0s, color 0.3s ease-in-out";
    tomorrow.style.background = "";
    tomorrow.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > today.offsetLeft && relaw.offsetLeft < time1.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        relaw.style.left = tomorrow.offsetLeft + "px";
    relaw.style.width = tomorrow.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    tomorrow.style.color = "white";
    tomorrow.style.background = "transparent";
    tomorrow.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > tomorrow.offsetLeft && relaw.offsetLeft < time2.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        relaw.style.left = time1.offsetLeft + "px";
    relaw.style.width = time1.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time1.style.color = "white";
    time1.style.background = "transparent";
    time1.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    tomorrow.style.transition = "";
    tomorrow.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if (relaw.offsetLeft > time1.offsetLeft && relaw.offsetLeft < time3.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        relaw.style.left = time2.offsetLeft + "px";
    relaw.style.width = time2.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time2.style.color = "white";
    time2.style.background = "transparent";
    time2.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    tomorrow.style.transition = "";
    tomorrow.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > time2.offsetLeft && relaw.offsetLeft < time4.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        relaw.style.left = time3.offsetLeft + "px";
        relaw.style.width = time3.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time3.style.color = "white";
    time3.style.background = "transparent";
    time3.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    tomorrow.style.transition = "";
    tomorrow.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time4.style.color = "black";
    }
    if(relaw.offsetLeft > time3.offsetLeft) {
        if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.left = "0";
        }
        relaw.style.left = time4.offsetLeft + "px";
    relaw.style.width = time4.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time4.style.color = "white";
    time4.style.background = "transparent";
    time4.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    tomorrow.style.transition = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    }
});
tomorrow.addEventListener("click", () => {
    if(posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.top = "200px";
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.left = tomorrow.offsetLeft + "px";
    relaw.style.width = tomorrow.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    tomorrow.style.color = "white";
    tomorrow.style.background = "transparent";
    tomorrow.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
});
time1.addEventListener("click", () => {
    if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.top = "0";
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.left = time1.offsetLeft + "px";
    relaw.style.width = time1.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time1.style.color = "white";
    time1.style.background = "transparent";
    time1.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    tomorrow.style.transition = "";
    tomorrow.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
});
time2.addEventListener("click", () => {
    if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.top = "0";
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.left = time2.offsetLeft + "px";
    relaw.style.width = time2.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time2.style.color = "white";
    time2.style.background = "transparent";
    time2.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    tomorrow.style.transition = "";
    tomorrow.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time3.style.color = "black";
    time4.style.color = "black";
});
time3.addEventListener("click", () => {
    if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.top = "0";
            posters.style.left = "0";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "100%";
        }
    relaw.style.left = time3.offsetLeft + "px";
    relaw.style.width = time3.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time3.style.color = "white";
    time3.style.background = "transparent";
    time3.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    tomorrow.style.transition = "";
    tomorrow.style.background = "";
    time4.style.transition = "";
    time4.style.background = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time4.style.color = "black";
});
time4.addEventListener("click", () => {
    if(posters.dataset.set == "yesinfo 1" || posters.dataset.set == "yesinfo 1") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "noinfo 2" || posters.dataset.set == "yesinfo 2") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 3" || posters.dataset.set == "yesinfo 3") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 4" || posters.dataset.set == "yesinfo 4") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 5" || posters.dataset.set == "yesinfo 5") {
            setTimeout(() => {
                posters.style.position = "absolute";
            }, 0);
            posters.style.left = "-100%";
        }
        if(posters.dataset.set == "yesinfo 6" || posters.dataset.set == "yesinfo 6") {
            setTimeout(() => {
                posters.style.position = "relative";
            }, 0);
            posters.style.top = "0";
            posters.style.left = "0";
        }
    relaw.style.left = time4.offsetLeft + "px";
    relaw.style.width = time4.offsetWidth + "px";
    relaw.style.padding = "0 15px";
    relaw.style.marginLeft = "-15px";
    time4.style.color = "white";
    time4.style.background = "transparent";
    time4.style.transition = "0s, color 0.3s ease-in-out";
    today.style.background = "";
    today.style.transition = "";
    time1.style.transition = "";
    time1.style.background = "";
    time2.style.transition = "";
    time2.style.background = "";
    time3.style.transition = "";
    time3.style.background = "";
    tomorrow.style.transition = "";
    tomorrow.style.color = "black";
    today.style.color = "black";
    time1.style.color = "black";
    time2.style.color = "black";
    time3.style.color = "black";
});
});

const data1 = new Date();
const data2 = new Date();
const data3 = new Date();
const data4 = new Date();
data1.setDate(data1.getDate() + 2);
data2.setDate(data2.getDate() + 3);
data3.setDate(data3.getDate() + 4);
data4.setDate(data4.getDate() + 5);

time1.textContent = data1.toLocaleString("ru-RU", {weekday: "long", day: "numeric", month: "short"});
time2.textContent = data2.toLocaleString("ru-RU", {weekday: "long", day: "numeric", month: "short"});
time3.textContent = data3.toLocaleString("ru-RU", {weekday: "long", day: "numeric", month: "short"});
time4.textContent = data4.toLocaleString("ru-RU", {weekday: "long", day: "numeric", month: "short"});

const cassa_id = document.getElementById("cassa");
const cassa_class = document.querySelector(".cassa");
const cassa_num = document.getElementById("cassa-num");
const cassa_num_class = document.querySelector(".cassa-num");
const cassa1 = document.querySelector(".cassa1");
const cassa2 = document.querySelector(".cassa2");
const cassa_footer_id = document.getElementById("cassa-footer");
const cassa_footer_class = document.querySelector(".cassa-footer");
const cassa_num_footer = document.getElementById("cassa-num-footer");
const cassa_num_footer_class = document.querySelector(".cassa-num-footer");
const cassa1_footer = document.querySelector(".cassa1-footer");
const cassa2_footer = document.querySelector(".cassa2-footer");

cassa_class.addEventListener("click", () => {
    cassa_class.classList.toggle("active");
    cassa_num.classList.toggle("active");
    cassa1.classList.toggle("active");
    cassa2.classList.toggle("active");
});
cassa1.addEventListener("click", () => {
    cassa_num.classList.remove("active");
    cassa_class.classList.remove("active");
    cassa_class.textContent = cassa1.textContent;
    cassa_num_class.textContent = "Касса 1";
});
cassa2.addEventListener("click", () => {
    cassa_num.classList.remove("active");
    cassa_class.classList.remove("active");
    cassa_class.textContent = cassa2.textContent;
    cassa_num_class.textContent = "Касса 2";
});

cassa_footer_class.addEventListener("click", () => {
    cassa_footer_class.classList.toggle("active");
    cassa_num_footer.classList.toggle("active");
    cassa1_footer.classList.toggle("active");
    cassa2_footer.classList.toggle("active");
});
cassa1_footer.addEventListener("click", () => {
    cassa_num_footer.classList.remove("active");
    cassa_footer_class.classList.remove("active");
    cassa_footer_class.textContent = cassa1.textContent;
    cassa_num_footer_class.textContent = "Касса 1";
});
cassa2_footer.addEventListener("click", () => {
    cassa_num_footer.classList.remove("active");
    cassa_footer_class.classList.remove("active");
    cassa_footer_class.textContent = cassa2.textContent;
    cassa_num_footer_class.textContent = "Касса 2";
});

const poster = document.querySelectorAll(".poster");
const name_poster = document.querySelectorAll(".name-poster");
const name_input = document.querySelector(".name-input");
const img_poster = document.querySelectorAll(".img-poster");
const img_input = document.querySelectorAll(".img-input");
const poster_img = document.querySelectorAll(".poster-img");
const zal = document.querySelectorAll(".zal");
const genre = document.querySelectorAll(".genre");
const premier = document.querySelectorAll(".premier");
const category = document.querySelectorAll(".category");
const zaly = document.querySelectorAll(".zaly");
const time_zal = document.querySelectorAll(".time-zal");
const zaly_time = document.querySelectorAll(".zaly-time");
const footer = document.getElementById("footer");

time_zal.forEach(time_zal => {
            if(time_zal.textContent === "Сеансы на завтра") {
        time_zal.style.top = "10px";
        time_zal.style.width = "90%";
        time_zal.style.left = "0";
        time_zal.style.borderRadius = "5px";
        time_zal.style.textAlign = "center";
    }
        });
    category.forEach(category => {
        premier.forEach(premier => {
            if(category.textContent == "возростная категория отсутствует") {
                    category.style.width = "100%";
                    category.style.left = "0";
                    category.style.borderRadius = "0";
                }
                if(category.textContent == "16+") {
        category.style.background = "linear-gradient(120deg, grey 20%, lightgrey, grey 80%)";
        category.style.color = "black";
        category.style.backgroundSize = "200% 100%";
        category.style.animation = "grad 2s linear infinite";
    }
    if(category.textContent == "12+") {
        category.style.background = "linear-gradient(120deg, darkblue 20%, blue, darkblue 80%)";
        category.style.color = "white";
        category.style.backgroundSize = "200% 100%";
        category.style.animation = "grad 2s linear infinite";
    }
    if(category.textContent == "6+") {
        category.style.background = "linear-gradient(120deg, green 20%, limegreen, green 80%)";
        category.style.color = "white";
        category.style.backgroundSize = "200% 100%";
        category.style.animation = "grad 2s linear infinite";
    }
    if(premier.textContent == "премьера отсутсвует") {
        premier.style.width = "170px";
        premier.style.background = "linear-gradient(120deg, grey, lightgrey)";
        premier.style.color = "black";
        premier.style.visibility = "hidden";
    }
    genre.forEach(genre => {
        if(genre.textContent == "жанр отсутствует") {
            genre.style.width = "100%";
        }
    });
    poster_img.forEach(poster_img => {
    poster_img.addEventListener("mousemove", () => {
        category = poster_img.querySelector(".category");
        if(category.textContent == "возростная категория отсутствует") {
                    category.style.width = "100%";
                    poster_img.style.scale = "1";
                    category.style.visibility = "visible";
                }
        if(category.textContent == "12+") {
            poster_img.setAttribute("title", "! Фильм: доступен зрителям от 12 лет !");
    }
    if(category.textContent == "16+") {
            poster_img.setAttribute("title", "! Фильм: доступен зрителям от 16 лет !");
    }
    if(category.textContent == "6+") {
            poster_img.setAttribute("title", "! Фильм: доступен детям от 6 лет !");
    }
    });
                });
                zal.forEach(zal => {
        zal.setAttribute("title", "Посмотреть места");
    });
});

    img_poster.forEach(img_poster => {
        img_poster.addEventListener("load", () => {
        img_poster.src = img_poster.src;
    });
    img_poster.addEventListener("error", () => {
        img_poster.style.width = "100%";
        img_poster.style.borderRadius = "0";
        img_poster.src = "notimg.webp";
    });
            });
        });

const header = document.getElementById("header");
const header_class = document.querySelector(".header");
const header_content_id = document.getElementById("header-content");
const header_poster = document.querySelectorAll(".header-poster");
const button_poster = document.querySelector(".button-poster");
const header_content_class = document.querySelectorAll(".header-content");
const header_poster_content = document.querySelectorAll(".header-poster-content");
const header_poster_logo = document.querySelectorAll(".header-poster-logo");
const header_poster_name = document.querySelectorAll(".header-poster-name");
const header_poster_title = document.querySelectorAll(".header-poster-title");
const header_poster_data = document.querySelectorAll(".header-poster-data");
const header_poster_trailer = document.querySelectorAll(".header-poster-trailer");
const body = document.getElementById("body");
// header_poster_trailer.pause();

// header_content_class.addEventListener("click", () => {
//     header_content_class.classList.toggle("active");
//     header_poster_logo.classList.toggle("active");
//     header_poster_name.classList.toggle("active");
//     header_poster_title.classList.toggle("active");
//     header_poster_data.classList.toggle("active");
//     body.classList.toggle("active");
//     if(header_content_class.classList.contains("active")) {
//         setTimeout(() => {
//             header_poster_trailer.play();
//             header_poster_trailer.style.opacity = "1";
//             header_poster_trailer.style.visibility = "visible";
//         }, 500);
//     } else {
//         header_poster_trailer.pause();
//         header_poster_trailer.style.opacity = "0";
//         header_poster_trailer.style.visibility = "hidden";
//     }
// });

header_content_class.forEach(header_content_class => {
    header_poster.forEach(header_poster => {
        header_poster_content.forEach(header_poster_content => {
            header_poster_logo.forEach(header_poster_logo => {
               header_poster = header_content_class.querySelector(".header-poster");
        header_poster_content = header_content_class.querySelector(".header-poster-content");
        header_poster_logo = header_content_class.querySelector(".header-poster-logo");
        if(header_content_class.dataset.set == "poster 1") {
        header_content_class.style.left = "0";
        header_poster.style.top = "50px";
        header_poster_logo.style.top = "180px";
        header_poster_content.style.top = "100px";
        header_content_class.addEventListener("mouseup", () => {
        isDragging = false;
        header_class.style.left = "0"
});
    }
    if(header_content_class.dataset.set == "poster 2") {
        header_content_class.style.left = "100%";
        header_poster.style.top = "-20px";
        header_poster_logo.style.top = "250px";
        header_poster_content.style.top = "100px";
        header_content_class.addEventListener("mouseup", () => {
        isDragging = false;
        header_class.style.left = "-100%"
});
    }
    if(header_content_class.dataset.set == "poster 3") {
        header_content_class.style.left = "200%";
        header_poster.style.top = "-50px";
        header_poster_logo.style.top = "230px";
        header_poster_content.style.top = "100px";

        header_content_class.addEventListener("mouseup", () => {
        isDragging = false;
        header_class.style.left = "-200%";
});
    }
    header_class.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - header_class.offsetLeft;
    e.preventDefault();
});
header_class.addEventListener("mousemove", (e) => {
    if(!isDragging) return;
    header_class.style.left = (e.clientX - offsetX) + "px";
    
});
    // header_content_class.addEventListener("click", () => {
    //     body.classList.toggle("active")
    // });
            });
        });
    });
});
    header_poster_data.addEventListener("focusin", () => {
        if(header_poster_data.value > "") {
            header_poster_data.value = "";
        }
    });
    header_poster_data.addEventListener("focusout", () => {
        if(header_poster_data.value == "") {
            header_poster_data.value = header_poster_data.placeholder;
        } else {
            header_poster_data.value = "В кино с " + header_poster_data.value;
        }
    });
