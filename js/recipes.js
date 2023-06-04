const recipeUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/wprm_recipe?per_page=100";


  
  const fetchRecipes = async () =>{
    await fetch(recipeUrl)
    .then (response => response.json())
    .then (data =>{
      const filterRecipes = data.map (recipe => recipe.recipe); 

      /* recipe.recipe.tags.course[0].name === "dessert")*/ 
      /* recipe.recipe.tags.course[0].name === "")*/ 

      console.log (filterRecipes);

      const recipe = document.getElementById ("recipeContainer");
      let perRecipe = "";
      for (let i = 0; i < filterRecipes.length; i++) {
        const currentData = filterRecipes[i];
        perRecipe += `
        <div class="recipe-image">
        <a href="specificrecipe.html?rid=${currentData.id}" >

        <img src="${currentData.image_url}
        " alt="recipe image" id="recipe-image"></a>
        </div>
        <div class="¨recipe-info">
        <h2 class="recipe-title" id="recipe-title">${currentData.name}</h2></a>
        
        <p class="recipe-text" id="recipe-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
        </div> 
        `;
        }
        recipe.innerHTML = perRecipe;


    }) .catch (error => console.log (error)); 

  }

fetchRecipes ();


/*button.addEventListener("click", filterfunction) Til menu dessert /dinner / breakfast*/


//Filter buttons - the assigment didn't ask for filtering knockknock 

/*
const breakfastBtn = document.getElementById('generalBtn');
const programmingBtn = document.getElementById('programmingBtn');

generalBtn.onclick = function(e) {
    getJokes(url, "general");
}
programmingBtn.onclick = function(e) {
    getJokes(url, "programming");
}
*/

/*---------- for style each recipe----------

const reci = document.getElementById('element1 ');


const fetchData = new Promise((resolve, reject) => {

  setTimeout(() => {
    const data = 'Information received';
    resolve(data);
  }, 2000);
});


fetchData.then((data) => {
  element1.textContent = data;
  element1.style.color = 'blue'; 
  element1.style.fontWeight = 'bold';
})
.catch((error) => {
  console.log(error);
});

*/





/* from the blog--------------------
const blogDisplay = document.querySelector(".blogs");
const loadMoreButton = document.getElementById("load-more");
let currentItems = 10;

const url = "https://blissfulnirvana.simplygreat.no/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=100";

async function displayPosts() {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    const post = results;
    for (let i = 0; i < currentItems; i++) {
        const postItem = post[i];

        if (postItem._embedded) {
            const featuredMedia = postItem._embedded["wp:featuredmedia"][0];
            const imageUrl = featuredMedia.media_details.sizes.medium.source_url;
            const title = postItem.title.rendered;
      
            blogDisplay.innerHTML += `<div class="blog-box"><img src="${imageUrl}" class="slide_img"><h3>${title}</h3><a href="blogspecific.html?id=${postItem.id}"<h4 class="button">Read More</h4><a/></div>`;
          }
        
    }

    for (let i = currentItems; i < post.length; i++) {
        const postItem = post[i];
        if (postItem._embedded) {
            const featuredMedia = postItem._embedded["wp:featuredmedia"][0];
            const imageUrl = featuredMedia.media_details.sizes.medium.source_url;
            const title = postItem.title.rendered;
      
            blogDisplay.innerHTML += `<div class="blog-box hide-post"><img src="${imageUrl}" class="slide_img"><h3>${title}</h3><a href="blogspecific.html?id=${postItem.id}"<div class="button">Read More</div><a/></div>`;
          }
        }
    

    if (currentItems >= post.length) {
        loadMoreButton.style.display = "none";
}
}

displayPosts();

document.addEventListener("DOMContentLoaded", function() {


loadMoreButton.onclick = () => {
    let hiddenPosts = document.querySelectorAll(".hide-post"); 
    for (var i = 0; i < 2; i++) {
        if (hiddenPosts[i]) {
            hiddenPosts[i].classList.remove("hide-post");
        }
    }
    

    currentItems += 2;

    if (currentItems >= document.querySelectorAll(".container .blogs .box").length) {
        loadMoreButton.style.display = "none";
    }
}
});

*/

/*
const recipe = document.getElementsByTagNameNS ("dessert");

async function fetchRecipeByTagNS() {
  try {
    const responses = await (recipeUrl);
    const data = await response.json;
    console.log (data);

  } catch (error) {
    console.error(error);
  }
}

fetchRecipeByTagNS();




/*
async function fetchSpecRecipe() {
  try {
    const responses = await Promise.all(recipesUrl.map(recipesUrl => fetch(recipesUrl)));
    const data = await Promise.all(responses.map(response => response.json()));

    data.forEach((responseData, index) => {
      console.log(`Data from ${recipesUrl[index]}:`, responseData);
      // Process the data as needed
    });
  } catch (error) {
    console.error(error);
  }
}

fetchSpecRecipe();

const recipeUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/wprm_recipe?per_page=100";

async function getrecipes() {
  try {
    const response = await fetch(recipeUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

console.log ();

*/
/*
const recipeContainer = document.getElementsByTagName ("dessert");

recipeContainer.lenght 

/*
const recipeUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/wprm_recipe?per_page=100";

const recipeContainer = document.getElementById ('recipeContainer');
const tagSlug ='dessert'

async function getRecipe(recipeUrl, joketype){
  const response = await fetch(recipeUrl);
  const recipes = await response.json();
  recipeContainer.innerHTML = "";
  recipes.forEach((recipe =>{
    if (recipe.tags.includes ())

          recipeContainer.innerHTML += ` <div class="recipe-image"><a href="specificrecipe.html"><img src="${image_url}" alt="recipe image" id="recipe-image"></a></div>
          <div class="¨recipe-info">
              <a href="specificrecipe.html">
              <h2 class="recipe-title" id="recipe-title">${title.rendered}</h2></a>
          </div>
          `;
      }


getRecipe(recipeUrl, "$slug");*/




    /*
document.getElementById("recipe").innerHTML = `
<h1 class="recipe-title"> ${recipeData.title} </h1>
<p class= "recipe-description">${recipeData.text}</p>
`





/*

        const heading = pageData.title.rendered;
        const paragraphs = pageData.content.rendered; 

    function displayRecipes (recipes){
        const recipesContainer = document.getElementById ('recipeContainer'); 
        recipesContainer.innerHTML = '';

        recipes.forEach (??? => {
            const ???Element = document.getElementById('');
            recipesContainer.appendChild(???Element);
        });

fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages?slug=posts')
    .then (response =>response.json())
    .then (data => {
    const recipesPageContent= document.getElementById ('recipes-content'); /*check this info!!
    recipesPageContent.innerHTML = data [0].content.rendered; 
    })
    .catch (error =>{
    console.log ('Error:', error);
    })




/*navegate to specific recipe - to get the recipe 

function navegateToPage (pageSlug){
    const apiUrl ='https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages?slug=${pageSlug}';

    fetch (apiUrl)
        .then (response =>response.json())
        .then (data => {
        const pageContent = data[0].content.rendered;

        history.pushState({pageSlug},'/${pageSlug}');
    });
}

function handlePageNavigation(){
    const path = window.location.pathname;
    const pageSlug = path.substring(1); 

    if("pageSlug ==="){
        navegateToPage ('home');
    } else {
        navegateToPage (pageSlug);
    }
}

window.addEventListener ('popstate', handlePageNavigation); 

handlePageNavigation();








//Filter buttons - the assigment didn't ask for filtering knockknock 

const generalBtn = document.getElementById('generalBtn');
const programmingBtn = document.getElementById('programmingBtn');

generalBtn.onclick = function(e) {
    getJokes(url, "general");
}
programmingBtn.onclick = function(e) {
    getJokes(url, "programming");
}


async function getJokes(url, joketype){
    const response = await fetch(url);
    const jokes = await response.json();
    jokesContainer.innerHTML = "";
    jokes.forEach(function(joke) {
        if(joke.type == joketype)
        {
            jokesContainer.innerHTML += ` <div class="jokes-setup"><h2>${joke.setup}</h2>
            <div class="jokes-type"><h2>Joke type: ${joke.type}</h2>
            <a href="joke.html?id=${joke.id}" class="showhideBtn">
            <button class="showhideBtn">Punchline<button></a>
            </div>
            <hr>
            `;
        }
    })
};

getJokes(url, "programming");



*/

/* --- something there??? 
const POSTS_API = "https://kv.sarahanjaheuer.no/wp-json/wp/v2/posts";
const Container = document.querySelector("-container");
let page = 1;
let limit = 10;
let totalPosts = 0;

const moreBtn = document.createElement("button");
moreBtn.id = "moreBtn";
moreBtn.innerText = "Se flere";
moreBtn.addEventListener("click", fetchAPI)

function fetchAPI() {

  fetch(POSTS_API + "?page=" + page + "&per_page=" + limit)
    .then((res) => res.json())
    .then((data) => {
      totalPosts = data.length;
      displayPosts(data);
      page++;
      if (data.length < limit || totalPosts < limit) {
        document.getElementById("moreBtn").style.display = "none";
      }
    })
    .catch((error) => console.error(error));
}

fetchAPI();

function displayPosts(data) {

  const catNames = data.map((firstWord) => {
    const firstWords = firstWord.title.rendered.split(" ");
    return firstWords[0];
  });

  const catAges = data.map((restWord) => {
    const restWords = restWord.title.rendered.split(" ");
    const lastWord = restWords.pop();
    const secLastWord = restWords.pop();
    const joinedWords = secLastWord + " " + lastWord;
    return joinedWords;
  });

  const catImgs = data.map((image) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = image.content.rendered;
    const imgEl = tempDiv.querySelector('img');
    const src = imgEl ? imgEl.getAttribute('src') : null;
    return src;
  });

  data.forEach((post, i) => {
    const postBoxes = `
      <a href="katt-spes.html?id=${post.id}">
      <div class="cat-posts">
      <div class="cat-posts-img"><img src="${catImgs[i]}" alt="Bilde av katt"></div>
        <h2 class="cat-name">${catNames[i]}</h2>
        <p class="cat-age">${catAges[i]}</p>
      `
    catContainer.innerHTML += postBoxes;
  });

  if (!moreBtn.parentNode && totalPosts >= limit) {
    catContainer.appendChild(moreBtn);
  } else if (moreBtn.parentNode && totalPosts < limit) {
    moreBtn.parentNode.removeChild(moreBtn);
  }
  
};*/