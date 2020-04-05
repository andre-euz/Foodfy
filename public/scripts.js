const modalOverlay = document.querySelector('.Modal-overlay');
const recipes = document.querySelectorAll('.Recipe');
const recipeModal = document.querySelector('.RecipeModal');

for (let recipe of recipes) {
    recipe.addEventListener("click",function() {
        const recipeId = recipe.getAttribute("id");
        window.location.href = `/recipes/${recipeId}`;
    })
    modalOverlay.classList.add("active"); 

        let recipeImg = recipe.querySelector('img').getAttribute('src');        
        let recipeModalImg = document.createElement('img');
        recipeModalImg.setAttribute('src',recipeImg);
        recipeModal.appendChild(recipeModalImg);

        let recipeH3 = recipe.querySelector('h3').textContent;
        let recipeModalH3 = document.createElement('h3');
        recipeModalH3.appendChild(document.createTextNode(recipeH3));
        recipeModal.appendChild(recipeModalH3);

        let recipeP = recipe.querySelector('p').textContent;
        let recipeModalP = document.createElement('p');
        recipeModalP.appendChild(document.createTextNode(recipeP));
        recipeModal.appendChild(recipeModalP);
 
        let closeModal = document.createElement('a');
        closeModal.classList.add('Close-modal');
        closeModal.appendChild(document.createTextNode('Fechar modal'));
        closeModal.addEventListener("click",function() {
            modalOverlay.classList.remove("active");
            modalOverlay.querySelector(".Close-modal").href = "";
        })
        recipeModal.appendChild(closeModal);
}


