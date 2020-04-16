const recipes = document.querySelectorAll('.Recipe');
const buttons = document.querySelectorAll('h2 button');

for (let recipe of recipes) {
    recipe.addEventListener('click',function() {
        const recipeId = recipe.getAttribute('id');
        window.location.href = `details/${recipeId}`;
    })   
}

for (let button of buttons) {
    button.addEventListener('click', function() {
        const details = document.querySelector(`.${button.id}`);
        details.classList.toggle('hide');        
        if(details.className === button.id) {
            return button.innerHTML = 'ESCONDER';            
        }         
        return button.innerHTML = 'MOSTRAR';
    })      
}

if (window.location.pathname === '/about') {
    document.querySelector('#about').style.fontWeight = "bold";
}

if (window.location.pathname === '/recipes') {
    document.querySelector('#recipes').style.fontWeight = "bold";
}
