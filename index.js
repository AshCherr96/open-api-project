// Test API Fetch
const dogUrl = 'https://api.thedogapi.com/v1/images/search?has_breeds=true';
const dogContainer = document.getElementById('dog-data');
const fetchButton = document.getElementById('fetch-dog'); 

// Function to fetch data
function getDog() {
    fetch(dogUrl)
        .then(response => {
            if (!response.ok) throw new Error('Request failed');
            return response.json();
        })
        .then(data => {
            console.log("Dog API Response:", data);
            displayDog(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display data 
function displayDog(data) {
    dogContainer.innerHTML = ''; 
    
    const breedName = data[0].breeds[0]?.name || "Unknown Breed";
    const imageUrl = data[0].url;

    const card = document.createElement('div');
    card.className = 'dog-card';

    card.innerHTML = `
        <h3>${breedName}</h3>
        <img src="${imageUrl}" alt="${breedName}" style="width: 100%; border-radius: 10px;">
    `;

    dogContainer.appendChild(card);
}

// Initial fetch when page loads
getDog();

// Update fetch when the button is clicked
if (fetchButton) {
    fetchButton.addEventListener('click', getDog);
}
