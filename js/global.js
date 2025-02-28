async function searchForGif()
{
    const userSearch = document.getElementById('search_');
    const apiKey = 'opXNmbGTidJKCOpqar49xBJGnlqlIP37';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q${userSearch}=&limit=12&offset=0&rating=pg-13&lang=en&bundle=messaging_non_clips`

    try 
    {
        const response = await fetch(url); //get the data from the api and store it in 'response'

        if (!response.ok){
            throw new Error('Failed to fatch url'); // created specific error message
        }

        const responseForm = await response.jaon(); // format the response into JSON

        displayGifs(responseForm.data);
    }
    catch (error)
    {
        console.error('An error has occured', error) // didplay error in console
        document.getElementById('displaySearchResults').innerHTML = '<p> Sorry, there was a problem getting your search results.';
    }

}

function displayGifs(gifs)
{
    const clearMyResults = document.getElementById('displaySearchResults');
    clearMyResults.innerHTML = ''; // clears any previous search results
    let postedGif = document.getElementById('displaySearchResults')

    //create img elements for results by looping
    gifs.forEach( gif => 
    {
        let gifResult = document.createElement('img');
        gifResult.src = gifResult.images.url;
        gifResult.alt = gifResult.title || 'GIF';
        postedGif.appendChild(gifResult);
    })
}
