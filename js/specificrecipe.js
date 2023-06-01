function fetchData (){
    fetch(recipesDessertUrl,recipesBreakfastUrl,recipesDinnerUrl)
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
fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/posts?slug=your-post-slug')
    .then (response =>response.json())
    .then (data => {
    const recipePageContent= document.getElementById ('recipe-content'); /*check this info!!


    recipePageContent.innerHTML = data [0].content.rendered; 
    })
    .catch (error =>{
    console.log ('Error:', error);
    })'

    /*something here?? 

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

