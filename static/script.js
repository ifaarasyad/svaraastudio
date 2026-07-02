// THEME
const sakuraBtn = document.getElementById("sakuraBtn");
const midnightBtn = document.getElementById("midnightBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.add(savedTheme);
}

if (sakuraBtn) {
    sakuraBtn.onclick = () => {
        document.body.classList.remove("midnight");
        document.body.classList.add("sakura");
        localStorage.setItem("theme", "sakura");
    };
}

if (midnightBtn) {
    midnightBtn.onclick = () => {
        document.body.classList.remove("sakura");
        document.body.classList.add("midnight");
        localStorage.setItem("theme", "midnight");
    };
}

// REVEAL
function reveal() {
    document.querySelectorAll(".reveal")
        .forEach(el => {
            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// MODAL
function openModal(id) {
    const m = document.getElementById(id);
    if (m) m.style.display = "block";
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (m) m.style.display = "none";
}

// CANVA
function openCanva(){openModal("canvaModal")}
function closeCanva(){closeModal("canvaModal")}

function openBasic(){openModal("basicModal")}
function closeBasic(){closeModal("basicModal")}

function openStarLight(){openModal("starModal")}
function closeStarLight(){closeModal("starModal")}

function openNotes(){openModal("notesModal")}
function closeNotes(){closeModal("notesModal")}

function openPoster(){openModal("posterModal")}
function closePoster(){closeModal("posterModal")}

function openCard(){openModal("cardModal")}
function closeCard(){closeModal("cardModal")}

function openWebCanva(){openModal("webCanvaModal")}
function closeWebCanva(){closeModal("webCanvaModal")}

// WEBSITE
function openWebsite(){openModal("websiteModal")}
function closeWebsite(){closeModal("websiteModal")}

function openLite(){openModal("liteModal")}
function closeLite(){closeModal("liteModal")}

function openPro(){openModal("proModal")}
function closePro(){closeModal("proModal")}

function openElite(){openModal("eliteModal")}
function closeElite(){closeModal("eliteModal")}

// CLOSE OUTSIDE
window.onclick = function(e){
    document.querySelectorAll(".modal")
        .forEach(modal=>{
            if(e.target === modal){
                modal.style.display = "none";
            }
        });
}; 