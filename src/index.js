console.log('%c HI', 'color: firebrick');

// Challenge 1: Fetch and display dog images
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('dog-image-container');

    // Fetch dog images and display them
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));
});

// Challenge 2: Fetch and display dog breeds
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', function() {
    const breedList = document.getElementById('breed-list');

    // Function to filter breeds based on the selected letter
    function filter(letter) {
        const listItems = breedList.querySelectorAll('li');
        listItems.forEach(item => {
            const breedName = item.textContent.toLowerCase();
            if (breedName.startsWith(letter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Fetch dog breeds and display them
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            Object.keys(data.message).forEach(breed => {
                const listItem = document.createElement('li');
                listItem.textContent = breed;
                document.addEventListener('DOMContentLoaded', function() {
                    const breedList = document.getElementById('breed-list');
                
                    if (!breedList) {
                        console.error('Error: breedList element not found');
                        return; // Exit the function if breedList is null
                    }
                
                    function addBreedToList(breed) {
                        const listItem = document.createElement('li');
                        listItem.textContent = breed;
                
                        listItem.addEventListener('click', function() {
                            listItem.style.color = 'blue'; 
                        });
                
                        breedList.appendChild(listItem);
                    }
                
                    // Fetch dog breeds and display them
                    fetch(breedUrl)
                        .then(response => response.json())
                        .then(data => {
                            const breeds = Object.keys(data.message);
                
                            if (breeds.length === 0) {
                                console.error('Error: No breeds found');
                                return; // Exit the function if there are no breeds
                            }
                
                            breeds.forEach(addBreedToList);
                        })
                        .catch(error => console.error('Error fetching dog breeds:', error));
                });
                

                listItem.addEventListener('click', function() {
                    listItem.style.color = 'blue'; 
                });

                breedList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching dog breeds:', error));
});

// Add event listener to the breed filter dropdown
const breedFilter = document.getElementById('breed-filter');
breedFilter.addEventListener('change', function(event) {
    const selectedLetter = event.target.value.toLowerCase();
    filter(selectedLetter);
});
