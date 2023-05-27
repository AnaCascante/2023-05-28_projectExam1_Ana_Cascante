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





/*exempel of code to get an element from rest api */

const nameBtn = document.getElementById ("name in html")
const nameContainer = document.getElementById ("name in html")


/* make an if- in case the btn is not in all the pages */

if (nameBtn){
    nameBtn.addEventListener ("click",function () {
        const myRequest = newHTMLRequest (); 
        myRequest.open ('GET', '{baseurl}/wp-json/wp/v2/base-route');

/* to get the post by categories- tape posts?categories = 68 for desserts- 69 for dinner or 70 for breakfast  */ 

        myRequest.onload = function (){
            if (myRequest.status >= 200 && myRequest.status < 400){
                const data = JSON.parse (myRequest.responseText);
                createHTML (data);
            }         else {
                console.log ("something went wrong!");
            }
        };
        myRequest.onerror = function (){
            console.log ("connection Error");
        };
        myRequest.send ();

    });
}

/*convert the data to be readeble in html*/

function createHTML (postdata){
    const myHTMLString =''; 
    for (i=0; i< postsData.lenght; i++){
        myHTMLString+= '<h2>'+ postsData[i].title.rendered + '</h2>';
        myHTMLString += postdata[i].content.rendered;
    }
    nameContainer.innerHTML = myHTMLString;
}





/*fetch the api for getting the menu */

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


