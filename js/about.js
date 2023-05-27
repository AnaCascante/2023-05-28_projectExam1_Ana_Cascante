fetch ('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages?slug=about')
    .then (response =>response.json())
    .then (data => {
        const aboutContent= document.getElementById ('about-content'); 
        aboutContent.innerHTML = data.content.rendered; 
    })
    .catch (error =>{
        console.log ('Error:', error);
    })