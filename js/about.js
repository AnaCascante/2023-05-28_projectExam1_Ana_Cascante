fetch (/*fetch about page*/)
    .then (response =>response.json())
    .then (data => {
        const aboutContent= document.getElementById ('about-content'); 
        aboutContent.innerHTML = data.content.rendered; 
    })
    .catch (error =>{
        console.log ('Error:', error);
    })