// Function to simulate loading and fetch home.html content
function loadContent() {
    // Show the loader while content is being loaded
    document.getElementById('loader').style.display = 'block';

    // Use fetch to load home.html dynamically
    fetch('dashbord.html')
        .then(response => {
            if (response.ok) {
                return response.text(); // Return the content as text
            } else {
                throw new Error('Failed to load content');
            }
        })
        .then(content => {
            // Once content is loaded, inject it into the page
            document.getElementById('content').innerHTML = content;
            document.getElementById('content').style.display = 'block'; // Show the content
            document.getElementById('loader').style.display = 'none'; // Hide the loader
        })
        .catch(error => {
            // Handle error if loading fails
            document.getElementById('content').innerHTML = 'Error loading content.';
            document.getElementById('content').style.display = 'block'; // Show the error message
            document.getElementById('loader').style.display = 'none'; // Hide the loader
        });
}

// Call loadContent function when the page is ready
window.onload = loadContent;
