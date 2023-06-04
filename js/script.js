const homeUrl ="https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36"; 
const dessertUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/366";
const dinnerUrl= "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/367";
const breakfastUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/50";
const contactUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/2";
const aboutUrl = "https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/48";
const recipesUrl =[dessertUrl,dinnerUrl,breakfastUrl];


async function fetchHomepage (){
    fetch(homeUrl)
        .then (response => response.json())
        .then (data =>{
        console.log (data);
        const pageData = data; 
      })
      .catch(error => {
       
        console.error(error);
      });
    }

fetchHomepage ();

