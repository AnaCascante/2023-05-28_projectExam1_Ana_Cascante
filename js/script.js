/* use this a a template!! paste it in information :) */
const baseUrl = "https://goodfoodgoodmood.learnbydoing.online/";
const homeUrl ="https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36"; 
const recipesUrl =

function fetchData (){
    fetch(homeUrl)
        .then (response => response.json())
        .then (data =>{
        console.log (data);
        const pageData = data; 
        
        const heading = pageData.title.rendered;
        const paragraphs = pageData.content.rendered;
    
        const images = [];
        const imageElements = pageData.content.rendered.match(/<img[^>]+>/g);
        if (imageElements) {
          imageElements.forEach(img => {
            const imgSrc = img.match(/src="([^"]+)"/)[1];
            images.push(imgSrc);
          });

        }
    
        /* trenger ikke dette 
        // Process the extracted data
        console.log('biglogo:', logo);
        console.log('recipes-title', heading);
        console.log('text', paragraphs);
        console.log('Images:', images); */
      })
      .catch(error => {
       
        console.error(error);
      });
    }
 
    fetchData();

   



/* those are the links to the three pages - breakfast-dinner-dessert*/

    const breakfastBtn = document.getElementById('breakfastBtn');
    const dinnerBtn = document.getElementById('dinnerBtn');
    const dessertBtn = document.getElementById('dessertBtn');
    
    breakfastBtn.onclick = function(){
        getRecipes(url, "breakfast");
    }
    dinnerBtn.onclick = function(){
        getRecipes(url, "dinner");
    }
    dessertBtn.onclick = function(){
        getRecipes(url, "dessert");
    }
    
    
    async function getRecipes(url, recipetype){
        const response = await fetch(url);
        const recipes = await response.json();
        recipesContainer.innerHTML = "";
        recipes.forEach(function(recipe) {
            if(recipe.type == recipetype)
            {
                recipesContainer.innerHTML += ` <div class="recipes-setup"><h2>${recipes.setup}</h2>
                <div class="recipes-type"><h2>Joke type: ${recipes.type}</h2>
                <a href="recipe.html?id=${recipe.id}</a>
                </div>
                <hr>
                `;
            }
        })
    };

getRecipes();




