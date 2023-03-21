// Importing the `readFile` function from the built-in `fs/promises` module
import { readFile } from 'node:fs/promises';

// Using a try-catch block to handle any errors that 
// may occur while reading the file
try {
// Reading the content of the "test.html" file as a UTF-8 encoded string
// ES6-version 
       const fileContent = await readFile("test.html","utf-8");
        // Logging the file content to the console
       console.log(fileContent);
} catch (error) {
       // If an error occurs while reading the file, log the error message to the console
       console.error(error.message);
}