webpage made with wordpress- live. 

https://goodfoodgoodmood.learnbydoing.online/

Your new password for Goodfoodgoodmood is: 
stel DhUu 6TQ2 Blvc dGNA fKqi



Information for SSH and FTP- 

To log in with SSH & SFTP, use this info:
Host: ssh.learnbydoing.online
Username: learnbydoing.online
Port: 22
SSH/SFTP password:  23Feustudios


Host: ftp.learnbydoing.online

Username: learnbydoing.online

Port: 21
FTP password: 23Feucomida

/* use this a a template!! paste it in information :) */
const baseUrl = "https://goodfoodgoodmood.learnbydoing.online/";
const homeUrl ="https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36"; 

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


/* make an if- in case the btn is not in all the pages to link to another page 

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

/-- get all the link elements from the page---/

const getLinks = document.querySelectorAll("a");
const myarray = []

.--- now loop throw elements and find the text.--- 
 for (var i=0; i<getLinks.length; i++){
    const nametext = getLinks [i].textContent;
    const cleantext = nametext.replace (/\s+/g,'').trim();
    const cleanlink = getLinks [i].href;
    myarray.push([cleantext,cleanlink]);
     }




     function make_table() {
    const table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<myarray.length; i++) {
            table += '<tr><td>'+ myarray[i][0] + '</td><td>'+myarray[i][1]+'</td></tr>';
    };
 
    const w = window.open("");
w.document.write(table); 
}
make_table()


- gives the info to the console. 

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



get data from console: 

-- first---. 
const url=""; 
 
async function getxxx(){
    const response= await fecth(url); 
    const data = await response.json();
    console.log (data); 
}

getxxx(); 


getting the objets from console: 
const url=""; 
 
async function getxxx(){
    const response= await fecth(url); 
    const data = await response.json();
    
    const {object, object2} = data; 

    document.getElementById ('obj1').textContent = object;  
    document.getElementById ('obj2').textContent= object2;
    console.log (object); 
     console.log (object2); 
}

getxxx(); 

In the HTML-- write : 
  <div><span id="obj1"></span><div> (this could be a h/p/osv)
 <div><span id="obj2"></span><div> (this could be a h/p/osv)
*


creating HTML to get in the page. here you can insert as much html as needed for getting the info in html. 

function createHTML (recipes){
    for(let i=0; i <products.length; i++){
        container.innerHTML += 'div class="recipe"
                    <h2>${recipe.name}</h2> </div>';
    }
}


to get the recipes from the recipe page.-.--------

fetch('recipe page. ')
  .then(response => response.json())
  .then(data => {
    const recipesToRender = data; // Assuming the response data is an array of recipe objects
    recipesToRender.forEach(function(result) {
      container.innerHTML += `
        <div class="featured-recipes">
          <h4 class="heading">${result.name}</h4>
          <h4 class="description">${result.description}</h4>
          <h4>${result.yields}</h4>
          <img src="${result.thumbnail_url}" alt="${result.name}"/>
        </div>
      `;
    });
  })
  .catch(error => {
    console.error(error);
  });

  recipesToRender.forEach(function (result) {
        conteiner.innerHTML += `<div class ="featured-recepies">
                               <h4 class="heading">${result.name}</h4>
                               <h4 class="description">${result.description}</h4>
                               <h4>${result.yields}</h4>

                               <img src="${result.thumbnail_url}" alt="${result.name}"/>
                               
                              </div>`;
      });   