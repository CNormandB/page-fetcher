const request = require('request');
const fs = require('fs')

// > node fetcher.js http://www.example.edu/ ./index.html
// argv[2]: URL
// argv[3]: file

// Url of the page to get
const url = process.argv[2]
// file to write it to
const file = process.argv[3];

if (url === undefined || file === undefined){ 
  console.log(`Usage: ${process.argv[0]} ${process.argv[1]} <URL to get> <file to write to>`);
  return;
}


// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

request(url, (error, response, body) => {
  if (!error) {
    fs.writeFile(file, body, (err) => {
      if (err) { 
        console.log('error in writefile: ', err)
      } else {
        console.log("Successfully wrote file.")
      }
    })
  } else {
    console.log('error in request: ', error); // Print the error if one occurred
  }
});
