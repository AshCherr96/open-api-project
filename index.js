// --- Selectors ---
const display = document.getElementById('data-display');
const loader = document.getElementById('loading');
const btnImage = document.getElementById('nav-image');
const btnDetails = document.getElementById('nav-details');

// --- Helper: Toggle Loader ---
function toggleLoader(show) {
    loader.classList.toggle('hidden', !show);
    if (show) display.innerHTML = '';
}

// --- Endpoint 1: Random Dog Image ---
// URL: https://api.thedogapi.com/v1/images/search
async function getDogImage() {
    toggleLoader(true);
    try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const dogUrl = data[0].url;

        display.innerHTML = `
            <h2>Random Dog Image</h2>
            <img src="${dogUrl}" alt="A cute dog" style="max-width:100%; border-radius:12px;">
            <p>Data fetched from /images/search endpoint.</p>
        `;
    } catch (error) {
        display.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    } finally {
        toggleLoader(false);
    }
}

// --- Endpoint 2: Dog Categories ---
// URL: https://api.thedogapi.com/v1/categories
async function fetchBreedInfo() {
    toggleLoader(true);
    try {
        const response = await fetch('https://api.thedogapi.com/v1/categories');
        if (!response.ok) throw new Error('Could not fetch categories');
        
        const categories = await response.json();
        
        let htmlContent = '<h2>Dog Categories</h2><div class="breed-grid">';
        // Displaying the categories found in API
        categories.forEach(cat => {
            htmlContent += `
                <div class="breed-card">
                    <h3>${cat.name}</h3>
                    <p>Learn more about ${cat.name} dogs in our daily dose!</p>
                </div>
            `;
        });
        htmlContent += '</div><p>Data retrieved from /v1/categories endpoint.</p>';
        display.innerHTML = htmlContent;
    } catch (error) {
        showError("The API requires a key for this list. Try 'Daily Dog Dose' for the free endpoint!");
    } finally {
        toggleLoader(false);
    }
}

// --- Event Listeners Nav ---
btnImage.addEventListener('click', getDogImage);
btnDetails.addEventListener('click', getBreedDetails);
