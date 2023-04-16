import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://openai80.p.rapidapi.com/models',
  headers: {
    'X-RapidAPI-Key': 'a9fbd783f5mshbdd6399893748b9p112962jsn82144682d9df',
    'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
  }
};

function fetchModels() {
  axios.request(options)
    .then(response => {
      let data = response.data;
      console.log(data);
      // Do something with the data
    })
    .catch(error => {
      console.error(error);
    });
}

let prompt = document.getElementById('prompt');
let results = document.getElementById('results');

function callAPI() {
  fetchModels();
}