fetch ('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages?slug=about')
    .then (response =>response.json())
    .then (data => {
        const aboutPageContent= document.getElementById ('about-content'); 
        aboutPageContent.innerHTML = data.content.rendered; 
    })
    .catch (error =>{
        console.log ('Error:', error);
    })