const recipeUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/wprm_recipe?per_page=100";



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
        <div class="recipeImage">
        <a href="specificrecipe.html?rid=${currentData.id}" >

        <img src="${currentData.image_url}
        " alt="recipe image" id="recipe-image"></a>
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

  function renderRecipesByCategory(category) {
    const recipeContainer = document.getElementById("recipeContainer");
    recipeContainer.innerHTML = "";
  
    const filteredRecipes = data.filter(recipe => recipe.recipe.tags.course[0].name === category);
  
  
    filteredRecipes.forEach(recipe => {
      const recipeElement = document.createElement("div");
  
  
      recipeElement.textContent = recipe.recipe.name;
      recipeContainer.appendChild(recipeElement);
    });
  }
  
  /*Event listeners for category buttons */
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
  });

fetchRecipes ();