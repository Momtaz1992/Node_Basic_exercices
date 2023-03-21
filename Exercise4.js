import {readFile} from 'node:fs/promises';

try {
// ES5 same like exercise3
       readFile("test.html","utf-8").then(function (data){
              console.log(data);
       });
} catch (error) {
       console.error(error.message);
}