





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