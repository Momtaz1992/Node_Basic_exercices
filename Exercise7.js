import {writeFile, readFile} from 'node:fs/promises';
import axios from "axios";
import * as http from 'http';

try {
       const {data} = await axios.get("http://google.com");
       await writeFile("google.html", data);
       const fileContent = await readFile("google.html", "utf8");
       const server = http.createServer((request, response)=> {
              response.writeHead(200,{"Content-Type": "html"});
              response.write(fileContent);
       });
       server.listen(80);
       console.log("Server running at http://127.0.0.1:80/");

} catch (error){
       console.error(error.message);
}