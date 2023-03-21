//Install the module axios and retrieve the html code from google.com.
// npm install axios
import axios from "axios";

// Using a try-catch block to handle errors
try {
        // Sending a GET request to 'http://google.com' using Axios
       const {data} = await axios.get('http://google.com');
       console.log(data);
} catch (error) {
       console.error(error.message);
}
//The await keyword is used to wait for the response from the server before continuing 
//with the rest of the code.