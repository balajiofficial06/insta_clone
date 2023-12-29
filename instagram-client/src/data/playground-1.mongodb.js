const fs = require("fs").promises;

const readJsonFile = async (filePath) => {
    try {
        // Read the contents of the JSON file
        const fileContent = await fs.readFile(filePath, "utf-8");

        // Parse the JSON content
        const jsonData = JSON.parse(fileContent);
        use("instagram")
        const posts = db.getCollection("posts")

        jsonData.map((item) => {

            posts.insertOne(item)

        })

        // Log or use the parsed JSON data
    } catch (error) {
        console.error("Error reading JSON file:", error);
    }
};

// Call the readJsonFile function with the path to your JSON file
readJsonFile("/workspaces/insta_clone/formattedData.json");
