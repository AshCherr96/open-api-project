// Test Fetch for TheDogAPI
const dogUrl = 'https://api.thedogapi.com/v1/images/search?has_breeds=true';

fetch(dogUrl)
    .then(response => response.json())
    .then(data => {
       
        console.log("Dog API Response:", data);
        
        // 2 required data points
        const breed = data[0].breeds[0].name;
        const imageUrl = data[0].url;
        console.log(`Data Point 1 (Breed): ${breed}`);
        console.log(`Data Point 2 (Image): ${imageUrl}`);
    })
    .catch(error => console.error('Error fetching data:', error));
