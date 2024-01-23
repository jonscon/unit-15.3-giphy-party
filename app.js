const searchBox = document.getElementById("search-box");
const searchForm = document.getElementById("search");
const removeButton = document.getElementById("remove-button");
const gifContainer = document.getElementById("gifContainer");

// Retrieve the GIF from the server and append it onto the gifContainer
async function getGif(q) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { q, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" } });
    let numResults = res.data.data.length; // Checks the number of results
    if (numResults) {
        let randomIndex = Math.floor(Math.random() * numResults); // Get a random GIF from list of results
        const url = res.data.data[randomIndex].images.original.url;
        const gif = document.createElement("IMG");
        gif.src = url; // Add the img source as the URL
        gif.classList.add('w-25');
        gifContainer.append(gif);
    }
}

// Triggers when the user submits an search 
searchForm.addEventListener("submit", function(e) {
    e.preventDefault();
    getGif(searchBox.value);
    searchBox.value = '';
    console.log("submitted");
})

// Removes all GIFs from the gifContainer 
removeButton.addEventListener("click", function() {
    let container = document.getElementById("gifContainer");
    container.innerHTML = '';
})