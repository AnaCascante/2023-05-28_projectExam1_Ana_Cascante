
function fetchRecipes(){
    fetch(recipesDessertUrl+recipesBreakfastUrl+recipesDinnerUrl)
        .then (response => response.json())
        .then (data =>{
        console.log (data);
        const pageData = data; 
        
        const heading = pageData.title.rendered;
        const paragraphs = pageData.content.rendered; 
        }
      .catch(error => {
       
        console.error(error);
      });
    }

    function displayRecipes (recipes){
        const recipesContainer = document.getElementById ('recipeContainer'); 
        recipesContainer.innerHTML = '';

        recipes.forEach (??? => {
            const ???Element = document.getElementById('');
            recipesContainer.appendChild(???Element);
        });
    }
 
    fetchRecipes();




/*

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