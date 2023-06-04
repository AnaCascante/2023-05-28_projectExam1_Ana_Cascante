const recipeUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/wprm_recipe?per_page=100";

/* -- this code is not working-- it showld get the btn and get the recipes by category


 const filterRecipes.document.getElementByCategory ("recipe"); 

const breakfastBtn = document.getElementById("breakfastBtn");
  breakfastBtn.addEventListener("click", () => {
    renderRecipesByCategory("dessert");
  });
  
  const dinnerBtn = document.getElementById("dinnerBtn");
  dinnerBtn.addEventListener("click", () => {
    renderRecipesByCategory("dinner");
  });

  
  
  const dessertBtn = document.getElementById("dessertBtn");
  dessertBtn.addEventListener("click", () => {
    renderRecipesByCategory("breakfast");
  }); --*/



  const fetchRecipes = async () =>{
    await fetch(recipeUrl)
    .then (response => response.json())
    .then (data =>{
      const filterRecipes = data.map (recipe => recipe.recipe); 
   
      console.log (filterRecipes);
 

      const recipe = document.getElementById ("recipeContainer");
      let perRecipe = "";
      for (let i = 0; i < filterRecipes.length; i++) {
        const currentData = filterRecipes[i];
        perRecipe += `
        <div class="picrecipe>
        <a  href="specificrecipe.html?rid=${currentData.id}">
        <img src="${currentData.image_url}
        " alt="recipe image" id="recipe-image" class="recipeImage"></a>
        </div>
        <div class="¨recipeInfo">
        <h2 class="recipeTitle" id="recipe-title">${currentData.name}</h2></a>
        
        <p class="recipeText" id="recipe-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
        </div> 
        `;
        }
        recipe.innerHTML = perRecipe;


    }) .catch (error => console.log (error)); 

  }

  fetchRecipes (); 