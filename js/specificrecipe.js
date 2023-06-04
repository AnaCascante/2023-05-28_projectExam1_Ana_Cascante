const recipeUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/wprm_recipe";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const crId = urlParams.get('rid');


const fetchRecipe = async () =>{
  await fetch(recipeUrl + '/' + crId)
  .then (response => response.json())
  .then (data =>{
    console.log (data.recipe);
  }) 
  .catch (error => console.log (error)); 

}

fetchRecipe ();




innerHTML = `  <div class="box" id="srContainer">
<section class="sect1" id="sect1">
  <div class="titleContainer" id="titleContainer">
    <div class="titleInfo" id="titleInfo" >
      <h2 class="rName" id="rName">${currentData.title.rendered}</h2>
      <p class="rDescription" id="rDescription">${currentData.content.rendered}</p>
    </div>
    <div class="srImgContainer">
      <a href="specificrecipe.html?rid" ><img src="${currentData.image_url}" alt="specific recipe image" class="srimage" id="srimage"></a>
    </div>
  </div>
  <div class="buttonsection" id="buttonsection">
    <button class="printBtn" id="printBtn
    "></span> Print Recipe</button>
    <button class="pinBtn" id="pinBtn">Pin Recipe</button>
  </div>
</section>
<div class="line1">
</div>
<section class="sect2" id="sect2">
  <div class="left">
    <h2>prep time</span></h2>
    <p>${currentData.prep_time} </p>
  </div>
  <div class="right">
    <h2>cook time</h2>
    <p>${currentData.cook_time}</p>
  </div>
</section>
<div class="line1">
  <div class="iconContainer">
    <span class="iconHat"></span>
    <span class="iconFork"></span>
  </div>
</div>
<section class="sect3" id="sect3">
  <div class="leftSect3">
    <h2>course</span></h2>
    <p>${currentData.course.name}</p>
  </div>
  <div class="rightSect3">
    <div class="rightSect3A">
      <h2>serving</h2>
      <p>${currentData.servings}</p>
    </div>
    <div class="rightSect3B">
      <h2>calories</h2>
      <p>kcal</p>
    </div>
</div>
</section>
<section class="sect4" id="sect4">
  <div class="inlineWord" id="inlineWord">
    <h2 class="equipment">Equipment</h2>
  </div>
  <ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
  </ul>
</section>
<section class="inline-section" class="sect5" id="sect5">
  <h2 class="ingredients">Ingredients</h2>
  <ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
  </ul>
</section>
<section class="inline-section" class="sect6" id="sect5">
  <h2 class="instructions" id="instructions">Instructions</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis urna nec lorem consequat, vel luctus mi tristique. Curabitur pharetra velit vel lobortis lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis urna nec lorem consequat, vel luctus mi tristique. Curabitur pharetra velit vel lobortis lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis urna nec lorem consequat, vel luctus mi tristique. Curabitur pharetra velit vel lobortis lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis urna nec lorem consequat, vel luctus mi tristique. Curabitur pharetra velit vel lobortis lobortis.</p>
</section>
<div class="line1">
  <span class="iconSearch" id="iconSearch"></span>
</div>
</div>



` 




























 /*
   const srDetails = async () =>{
    await fetch(recipeUrl)
    .then (response => response.json())
    .then (data =>{ }
    }
*/

 

/*
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const crId = urlParams.get('rid')
console.log(crId);
*/
 
 
 
 
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


  const blogPost = document.querySelector(".blog");
const modalImg = document.querySelector(".modal-img")

const urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get("id");



async function getBlogDetailed() {
      const url = `https://blissfulnirvana.simplygreat.no/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;
      const response = await fetch(url);
      const results = await response.json();
      const blog = results;
      const featuredMedia = blog._embedded["wp:featuredmedia"][0];
      const imageUrl = featuredMedia.media_details.sizes.medium.source_url;
      const altText = featuredMedia.alt_text;
      
    blogPost.innerHTML = "";
    console.log(blog);
  
    const newPageTitle = `Blissful Nirvana | ${blog.title.rendered}`;
    document.title = newPageTitle;
  
  blogPost.innerHTML = `<h2>${blog.title.rendered}</h2><div class="sp_blog"><div><img src="${imageUrl}" alt="${altText}" class="img"></div><div><p>${blog.content.rendered}</p></div></div>`;

// Reference for modal image: https://www.youtube.com/watch?v=QghhoJBdw7A

  modalImg.innerHTML = `<span>&times;</span><img src=${imageUrl} class="img_modal">`;

  document.querySelector(".sp_blog img").onclick = () => {
    document.querySelector(".modal-img").style.display = "block";
  }

  document.querySelector(".modal-img span").onclick = () => {
    document.querySelector(".modal-img").style.display = "none";
  }
}

getBlogDetailed();
*/


