
const baseUrl = "https://goodfoodgoodmood.learnbydoing.online/";
const homeUrl ="https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36"; 


fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36')
    .then (response => response.json())
    .then (data =>{
        const pageData = data[0]; 
        const logo = pageData.acf.logo;
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
    
        // Process the extracted data
        console.log('biglogo:', logo);
        console.log('recipes-title', heading);
        console.log('text', paragraphs);
        console.log('Images:', images);
      })
      .catch(error => {
       
        console.error(error);
      });
        console.log (data);
   




/*

fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36')
    .then(response => response.json())
    .then(data => {
        const homePageContent= data[0].content.rendered;
    })
    

 js for the index page  

const nav = document.getElementById (".biglogo")


for the logo. 
"https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/media/248"

/*exempel of code to get an element from rest api 

const nameBtn = document.getElementById ("name in html")
const nameContainer = document.getElementById ("name in html")


/* make an if- in case the btn is not in all the pages 

if (nameBtn){
    nameBtn.addEventListener ("click",function () {
        const myRequest = newHTMLRequest (); 
        myRequest.open ('GET', '{baseurl}/wp-json/wp/v2/base-route');

/* to get the post by categories- tape posts?categories = 68 for desserts- 69 for dinner or 70 for breakfast   

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

/*convert the data to be readeble in html

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

const biglogo = document.getElementById ("biglogo"); 

function fetchAPI (){
    then (response => response.json())
    .then (data =>{
        console.log (data);
    })
    .catch (error =>{
        console.error (error);
    })
}

fetchAPI(); 

*/


