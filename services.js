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

function getCharacterEpisodes(arg){
    axios.get(`https://rickandmortyapi.com/api/character/${arg}`)
  .then(function(res) {
    console.log(res.data) 
  })
  .catch(function(error){
    console.error(error)
  })
}

function getEpisodeCharacters(arg){
    axios.get(`https://rickandmortyapi.com/api/episode/${arg}`)
  .then(function(res) {
    console.log(res.data) 
  })
  .catch(function(error){
    console.error(error)
  })
}


module.exports = {getCharacters, getEpisodes, getCharacterEpisodes, getEpisodeCharacters}





