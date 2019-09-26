const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  } else {
    const data = JSON.parse(body);
    if (body === '[]') {
      console.log('No Boueno! Cat not found =>', data);
    } else {
      console.log(data[0]);
    }
  }


});