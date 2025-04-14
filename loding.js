// Function to load content from home.html dynamically
function loadContent() {
    // Simulate a loading delay (e.g., fetching home.html content)
    setTimeout(function() {
        // Hide the loader and show the content
        document.getElementById('loader').style.display = 'none';

        // Create an XMLHttpRequest to load home.html
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'dashbord.html', true);

        // On successful load, insert the content into the div
        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById('content').innerHTML = xhr.responseText;
                document.getElementById('content').style.display = 'block';
            } else {
                document.getElementById('content').innerHTML = 'Error loading content';
                document.getElementById('content').style.display = 'block';
            }
        };

        xhr.send();
    }, 3000); // 3 seconds delay before loading content
}

// Call the function to load content
loadContent();
