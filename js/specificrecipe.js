fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/posts?slug=your-post-slug')
    .then (response =>response.json())
    .then (data => {
    const recipeContent= document.getElementById ('recipe-content'); /*check this info!!*/
    recipeContent.innerHTML = data [0].content.rendered; 
    })
    .catch (error =>{
    console.log ('Error:', error);
    })