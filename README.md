# Dog API Explorer - Open API Project

This project is a technical demonstration of using the **Fetch API** and **Async/Await** to pull data from multiple endpoints of **TheDogAPI** and render it into a responsive user interface. This project was built as a final assignment for the Code the Dream "Intro to Programming" course.

## Project Requirements Satisfied
- **Two Endpoints:** Data is fetched from two distinct areas of TheDogAPI:
  1. `/v1/images/search` - Fetches dynamic visual content for the "Daily Dog Dose."
  2. `/v1/categories`) - Fetches structured textual data for "Dog Categories."
- **Separate GET Requests:** The application is optimized to issue a new, specific GET request only when a navigation button is clicked. This prevents unnecessary data loading and keeps the app efficient.
- **Responsive Design:** The interface uses CSS Grid and Flexbox to ensure a seamless experience across mobile, tablet, and desktop devices.
- **Error Handling:** The code includes robust try/catch blocks to intercept and display user-friendly error messages if the API request fails or reaches a limit.

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, and Media Queries)
- JavaScript (ES6+, Fetch API, Async/Await)

## How to Run Locally

Follow these steps to run the project on your machine:

1. **Download the Files:** Click the green **Code** button at the top of this repository and select **Download ZIP**, then extract the files to your computer. (Alternatively, use `git clone https://github.com/AshCherr96/open-api-project.git`)

2. **Run the Webpage:** Locate the folder on your computer and **double-click the `index.html` file**. This will launch the Dog API Explorer directly in your default web browser. No local server or installation is required.

3. **Interact:** Use the navigation buttons ("Daily Dog Dose" and "Dog Categories") to trigger fresh API requests and explore different dog data.
