const axios = require('axios');

function getCharacters (){
    axios.get('https://rickandmortyapi.com/api/character')
  .then(function(res) {
    console.log(res.data.results) 
  })
  .catch(function(error){
    console.error(error)
  })
}

function getEpisodes (){
    axios.get('https://rickandmortyapi.com/api/episode')
  .then(function(res) {
    console.log(res.data.results) 
  })
  .catch(function(error){
    console.error(error)
  })
}





