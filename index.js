// --- Elements ---
const display = document.getElementById('data-display');
const loader = document.getElementById('loading');
const btnImage = document.getElementById('nav-image');
const btnCategories = document.getElementById('nav-categories'); 

// --- Helper Functions ---
function toggleLoader(show) {
    loader.classList.toggle('hidden', !show);
    if (show) display.innerHTML = '';
}

function showError(msg) {
    display.innerHTML = `<p class="error-msg">Error: ${msg}</p>`;
    toggleLoader(false);
}

// --- Endpoint 1: Random Image ---
async function fetchRandomDog() {
    toggleLoader(true);
    try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search');
        if (!response.ok) throw new Error('Could not fetch image');
        const data = await response.json();
        display.innerHTML = `
            <h2>Daily Dog Dose</h2>
            <img src="${data[0].url}" alt="A cute dog" class="api-image">
            <p>Fresh data from the /images/search endpoint!</p>
        `;
    } catch (error) {
        showError(error.message);
    } finally {
        toggleLoader(false);
    }
}

// --- Endpoint 2: Dog Categories ---
async function fetchCategories() {
    toggleLoader(true);
    try {
        // Using the public categories endpoint to avoid API key errors
        const response = await fetch('https://api.thedogapi.com/v1/categories');
        if (!response.ok) throw new Error('Could not fetch categories');
        
        const categories = await response.json();
        
        let htmlContent = '<h2>Dog Categories</h2><div class="breed-grid">';
        categories.forEach(cat => {
            htmlContent += `
                <div class="breed-card">
                    <h3>${cat.name}</h3>
                    <p>Click "Daily Dog Dose" to see a random dog from this or other categories!</p>
                </div>
            `;
        });
        htmlContent += '</div>';
        display.innerHTML = htmlContent;
    } catch (error) {
        // If categories fails, it's usually an API restriction. 
        showError("TheDogAPI categories endpoint is currently restricted. Please try again later.");
    } finally {
        toggleLoader(false);
    }
}

// --- Event Listeners ---
btnImage.addEventListener('click', fetchRandomDog);
btnCategories.addEventListener('click', fetchCategories); 
