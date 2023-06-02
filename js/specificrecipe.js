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