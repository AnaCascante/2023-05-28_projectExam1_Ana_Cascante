const recipeUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/wprm_recipe";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const crId = urlParams.get('rid');


const fetchRecipe = async () =>{
  await fetch(recipeUrl + '/' + crId)
  .then (response => response.json())
  .then (data =>{
    console.log (data.recipe);

/*
const fetchRecipe = async () =>{
  try{
    const response = await fetch(recipeUrl+ '/' + crId);
    const data = await response.json ();
    console.log (data.recipe);
 */
 

const recipeContainer = document.getElementById("recipeBox");
recipeContainer.innerHTML = `<div class="recipeBox" id="srContainer">
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
`; 
}) 
.catch (error => console.log (error)); 

}

fetchRecipe ();


/*--- I can see my specific recipe getting loaded -- it apears in the adress (the specific Id) --- but the recipe doesn't show  in the specific recipe */