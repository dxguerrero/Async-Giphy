require('dotenv').config();

// Print out value of API key stored in .env file
//console.log(process.env.API_KEY)

// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
// console.log(endpoint)
//Create asynchronous function
async function getImage(query) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=akonfykgmQrp8PadPOKlW0XVJG4ryD3B&q=${query}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const data = await response.json();
    //console.log(gif);
    const imgUrl = data.data[0].url;
    return imgUrl;
}

getImage("dog");