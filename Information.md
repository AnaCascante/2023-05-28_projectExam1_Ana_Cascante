webpage made with wordpress- live. 

https://goodfoodgoodmood.learnbydoing.online/

Your new password for Goodfoodgoodmood is: 
stel DhUu 6TQ2 Blvc dGNA fKqi



Information for SSH and FTP- 

To log in with SSH & SFTP, use this info:
Host: ssh.learnbydoing.online
Username: learnbydoing.online
Port: 22
SSH/SFTP password:  23Feustudios


Host: ftp.learnbydoing.online

Username: learnbydoing.online

Port: 21
FTP password: 23Feucomida

/* use this a a template!! paste it in information :) */
const baseUrl = "https://goodfoodgoodmood.learnbydoing.online/";
const homeUrl ="https://goodfoodgoodmood.learnbydoing.online/wp-json/wp/v2/pages/36"; 




/-----  get Api by function .then ----- 

function fetchAPI (){
    then (response => response.json())
    .then (data =>{
        console.log (data);
    })
    .catch (error =>{
        console.error (error);
    })
}

fetchAPI(); 





get data from console: 

-- first---. 
const url=""; 
 
async function getxxx(){
    const response= await fecth(url); 
    const data = await response.json();
    console.log (data); 
}

getxxx(); 



creating HTML to get in the page. here you can insert as much html as needed for getting the info in html. 

function createHTML (recipes){
    for(let i=0; i <products.length; i++){
        container.innerHTML += 'div class="recipe"
                    <h2>${recipe.name}</h2> </div>';
    }
}








 

 


