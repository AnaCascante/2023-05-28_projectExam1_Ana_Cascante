async function fetchAboutPage(){
  fetch(aboutUrl)
      .then (response => response.json())
      .then (data =>{
      console.log (data);
      const pageData = data; 
    })
    .catch(error => {
     
      console.error(error);
    });
  }

fetchAboutPage ();

