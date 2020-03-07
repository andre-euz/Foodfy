const modalOverlay = document.querySelector('.Modal-overlay');
const recipes = document.querySelectorAll('.Recipe');

for (let recipe of recipes) {
    recipe = addEventListener("click",function() {
        modalOverlay.classList.add("active"); 
        modalOverlay.querySelector("iframe").src = "./modal/modal.html"
    })
}

document.querySelector(".Close-modal").addEventListener("click",function() {
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("iframe").src = "";
})