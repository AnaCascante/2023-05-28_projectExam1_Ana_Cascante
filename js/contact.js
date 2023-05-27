
fetch('https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages?slug=contact')
    .then (response =>response.json())
    .then (data => {
    const contactPageContent= document.getElementById ('contact-content'); /*check this info!!*/
    contactPageContent.innerHTML = data [0].content.rendered; 
    });
    .catch (error =>{
    console.log ('Error:', error);
    })


    /*get the info from the contact form*/

    const contactForm = documentgetElementById ('conctactform');
    contactForm.addEventListener ('submit',function(event){
        event.preventDefault();
    });
