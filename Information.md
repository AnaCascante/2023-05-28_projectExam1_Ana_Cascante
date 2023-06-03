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
      });   '


calling the info- fetch to the console- get it out on the page. with a function 

asyn function catchSome (){
    const response = await fetch ('some.jpg');
    const blob = await.response blob ();
        document.getElementById('this')src=URL.creatorObjectURL(blob); 
        catchSome()
            .then (response=>{console.log('ya');
            })
    .catch (error =>{
        console.log(error);
        console.error(error);
    })
}


Another way 

--- get console the data----
asyn function home(){
    const restonse = await fetch ("url");
    const data = await response.json ();
    console.log(data)
    createAList(data.message)
}

home()

---- get the data to the page, a list of elements in a scroll modus---- element by Id in the Html-- then the code that will be loaded in HTML (Html code with apiinfo displayed like :${})

function createAList (breList){
    document.getElementById("bre").innerHTML='
    <select onchange ="loadByBre()">
    <option>Choose a dog breed</option>
    ${Object.keys(breList).map(function(bre){
        return '<option>${bre}</option>
    }).join('')}
} ---(this is a way of getting the objets from the array)---- one function - one responsability! (connect one function to the other by declaring the var) ---

now get the pic from each dog. 
asyn function loadByBre(bre){
    if (bre != "Choose a dog breed"){
        const response = await fetch ('https://exemple/api/${bre}/images') --- I get many images!!--- 
        const data = await response.json ();
        console.log(data)
        createSlideshow (data.message)
}

function createSlideShow(images){
    document.getElementById("slideshow").innerHTML =' 
    <div class="slide" style="background-image: url('${images[0]}') ></div>
    console.log(images)

}



        /* trenger ikke dette    
         Process the extracted data
        console.log('biglogo:', logo);
        console.log('recipes-title', heading);
        console.log('text', paragraphs);
        console.log('Images:', images); 
fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/posts?slug=your-post-slug')
    .then (response =>response.json())
    .then (data => {
    const recipePageContent= document.getElementById ('recipe-content'); /*check this info!!


    recipePageContent.innerHTML = data [0].content.rendered; 
    })
    .catch (error =>{
    console.log ('Error:', error);
    })'

    something here?? 

    function displayPost(data) {

    const xxxName = data.title.rendered.split(" ")[0];

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = data.content.rendered;
    const imgEl = tempDiv.querySelector("img");
    const src = imgEl ? imgEl.getAttribute("src") : null;

    const ps = tempDiv.getElementsByTagName("p");
    const pText = Array.from(ps).map(p => p.innerHTML).join(" ");

    const fetchedPost = `
        <h1 class="xxxx-spes-title normal-heading">
        lorem ipsum  - ${xxxName}</h1>
        <div class="xxx-posts-img xxxt-spes-img">
        <img src="${src}" alt="Bilde av r">
        </div>
        <p class="katt-spes-text">${pText}</p>
        `
        ;

    spesContainer.innerHTML += fetchedPost;

    const catgArr = data.categories;
    const catgProm = catgArr.map((catgId) => getCategory(catgId));

    Promise.all(catgProm)
        .then((catgs) => {
            const fetchedCatgs = `
                <div class="catg-wrapper">
                    ${catgs.map((catg) => `
                <div class="catpaw-symbol"></div>
                <div class="categories">
                    <p>${catg}</p>
                </div>
            `).join("")}
            </div>
            `
            spesContainer.innerHTML += fetchedCatgs;
        })
        .catch((error) => console.error(error));
};

function getCategory(catgId) {
    return fetch(CATG_API + "/" + catgId)
        .then((res) => res.json())
        .then((data) => {
            const catgDesc = data.description;
            return catgDesc;
        })
        .catch((error) => console.error(error));
};


fetchAPI();

