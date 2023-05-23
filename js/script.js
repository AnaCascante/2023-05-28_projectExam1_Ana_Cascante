fetch ('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages?slug=home?', {
    headers: {
        Authorization: 'Basic {Goodfoodgoodmood}:{1UNy B2ea D7mq 3gqM hy4j TzyR}'
    }
})
    .then (response =>response.json())
    .then (data => {
        const homeContent= document.getElementById ('home-content'); 
        homeContent.innerHTML = data [0].content.rendered; 
    })
    .catch (error =>{
        console.log ('Error:', error);
    })

/* js for the index page */

fetch ()


/*const url = "https://api.noroff.dev/api/v1/jokes";
const jokesContainer = document.querySelector(".jokes");

//Filter buttons - the assigment didn't ask for filtering knockknock //

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


