const axios = require("axios");
const fs = require("fs").promises;

let arr = [];

const getUnsplashData = async (arr) => {
    try {
        const requests = Array.from({ length: 10 }, (_, i) =>
            axios.get(
                "https://api.unsplash.com/photos/?client_id=8yVRkJgY7djhIKerz9JEM5hVFLqEItFK8hRvsqdD9EY"
            )
        );

        const responses = await Promise.all(requests);

        // Extract data from responses and push to arr
        responses.forEach((res) => {
            arr.push(...res.data);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        return arr;
    }
};

// Wrap the asynchronous code in an async function
const processData = async () => {
    try {
        const data = await getUnsplashData(arr);

        const formattedData = data.map((item) => {
            return {
                username: item.user.username,
                time: '2 d',
                userImg: item.user.profile_image.small,
                postMedia: item.urls.full,
                likes: item.likes,
                comments: 120,
                caption: item.description,
                location: 'New York'
            };
        });

        // Convert the formattedData array to JSON string
        const jsonData = JSON.stringify(formattedData, null, 2);

        // Write the JSON data to a file
        await fs.writeFile('formattedData.json', jsonData);

        console.log('Data has been written to formattedData.json');
    } catch (error) {
        console.error('Error processing data:', error);
    }
};

// Call the processData function
processData();
