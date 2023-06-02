const baseUrl = "https://goodfoodgoodmood.learnbydoing.online";
const homeUrl ="https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36"; 
const dessertUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/366";
const dinnerUrl= "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/367";
const breakfastUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/50";
const contactUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/2";
const aboutUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/48";
const recipesUrl =[dessertUrl,dinnerUrl,breakfastUrl];


async function fetchHomepage (){
    fetch(homeUrl)
        .then (response => response.json())
        .then (data =>{
        console.log (data);
        const pageData = data; 
      })
      .catch(error => {
       
        console.error(error);
      });
    }

fetchHomepage ();



/*
async function fetchHomepage (){
    fetch(homeUrl)
        .then (response => response.json())
        .then (data =>{
        console.log (data);
        const pageData = data; 
      })
      .catch(error => {
       
        console.error(error);
      });
    }

fetchHomepage ();


 /*
    fetchData.innerHtml = '<div>'

    const biglogo = document.getElementById ('biglogo'); 
    
    const breakfastBtn = document.getElementById('breakfastBtn');
    const dinnerBtn = document.getElementById('dinnerBtn');
    const dessertBtn = document.getElementById('dessertBtn');
    
    
    breakfastBtn.onclick = function(extracted){
        getRecipes(recipesBreakfastUrl, "breakfast");
    };
    dinnerBtn.onclick = function(extracted){
        getRecipes(recipesDinnerUrl, "dinner");
    };
    dessertBtn.onclick = function(extracted){
        getRecipes(recipesDessertUrl, "dessert");
    };


    fetchData();



 /*   
return { 
    <div>
        <LOGO> >dd</LOGO>
    </div>
        <h1>Recipes</h1>
        <img ></img>
        <p></p>
    <section>
        <a> <img src ={.image} alt=xxx.title + <breakfastBtnname </a>
        <a> <img src ={.image} alt=xxx.title + <breakfastBtnname </a>
        <a> <img src ={.image} alt=xxx.title + <breakfastBtnname </a>
    </section>
    <div>
        <p>{}</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    <footer>
        <div>About</div>
        <div>Contact</div>
    </footer> 
}



/*</div>

    const breakfastBtn = document.getElementById('breakfastBtn');
    const dinnerBtn = document.getElementById('dinnerBtn');
    const dessertBtn = document.getElementById('dessertBtn');
    
    /*
    breakfastBtn.onclick = function(){
        getRecipes(url, "breakfast");
    }
    dinnerBtn.onclick = function(){
        getRecipes(url, "dinner");
    }
    dessertBtn.onclick = function(){
        getRecipes(url, "dessert");
    }*/
    
    /*
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

getRecipes();*/


   /*
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

        /* make it mine 

        function displayPosts(data) {

            const recipeNames = data.map((firstWord) => {
                const firstWords = firstWord.title.rendered.split(" ");
                return firstWords[0];
            });
        
            const xxxxx = data.map((restWord) => {
                const restWords = restWord.title.rendered.split(" ");
                const lastWord = restWords.pop();
                const secLastWord = restWords.pop();
                const joinedWords = secLastWord + " " + lastWord;
                return joinedWords;
            });
        
            const recipeImgs = data.map((image) => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = image.content.rendered;
                const imgEl = tempDiv.querySelector('img');
                const src = imgEl ? imgEl.getAttribute('src') : null;
                return src;
            });
        
            data.forEach((post, i) => {
                const postBoxes = `
                <a href="xxx-spes.html?id=${post.id}">
                <div class="recipe-posts">
                  <div class="xxx-posts-img"><img src="${catImgs[i]}"></div>
                  <h2 class="cat-name">${catNames[i]}</h2>
                  <p class="cat-age">${catAges[i]}</p>
                `
                recipeContainer.innerHTML += postBoxes;
            });
        
        };
    */    