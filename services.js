const axios = require('axios');

function getCharacters (){
    axios.get('https://rickandmortyapi.com/api/character')
  .then(function(res) {
    const lengthData = res.data.results.length;
    for(let i = 0; i < lengthData; i++){
      console.log(res.data.results[i].name) 
    }
    
  })
  .catch(function(error){
    console.error(error)
  })
}

function getEpisodes (){
    axios.get('https://rickandmortyapi.com/api/episode')
  .then(function(res) {
    const lengthData = res.data.results.length;
    for(let i = 0; i < lengthData; i++){
      console.log(res.data.results[i].name) 
    }
  })
  .catch(function(error){
    console.error(error)
  })
}

function getCharacterEpisodes(arg){
    axios.get(`https://rickandmortyapi.com/api/character/${arg}`)
  .then(function(res) {
    console.log(res.data.name) 
  })
  .catch(function(error){
    console.error(error)
  })
}

function getEpisodeCharacters(arg){
    axios.get(`https://rickandmortyapi.com/api/episode/${arg}`)
  .then(function(res) {
    console.log(res.data.name) 
  })
  .catch(function(error){
    console.error(error)
  })
}


module.exports = {getCharacters, getEpisodes, getCharacterEpisodes, getEpisodeCharacters}





