import { writeFile } from 'node:fs/promises';
// create a html file by using {writeFile} from 'node:fs/promises' 
// by using promise function
try {
       await writeFile("test.html", "hello People");
} catch (error) {
       console.error(error.message);
}