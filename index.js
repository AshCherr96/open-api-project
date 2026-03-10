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

// --- Endpoint 2: Breed Details ---
// URL: https://api.thedogapi.com/v1/breeds?limit=10
async function getBreedDetails() {
    toggleLoader(true);
    try {
        // Fetching a list of breeds to show data
        const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=10');
        if (!response.ok) throw new Error('Failed to fetch breed data');
        
        const breeds = await response.json();
        
        let html = '<h2>Dog Breed Details</h2><div class="breed-grid">';
        breeds.forEach(breed => {
            html += `
                <div class="breed-card" style="border:1px solid #ddd; padding:10px; margin:10px; border-radius:8px;">
                    <h3>${breed.name}</h3>
                    <p><strong>Bred For:</strong> ${breed.bred_for || 'Companion'}</p>
                    <p><strong>Temperament:</strong> ${breed.temperament}</p>
                </div>
            `;
        });
        html += '</div><p>Data fetched from /breeds endpoint.</p>';
        display.innerHTML = html;
    } catch (error) {
        display.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    } finally {
        toggleLoader(false);
    }
}

// --- Event Listeners Nav ---
btnImage.addEventListener('click', getDogImage);
btnDetails.addEventListener('click', getBreedDetails);
