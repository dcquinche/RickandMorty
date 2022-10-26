const {getCharacters, getEpisodes, getCharacterEpisodes, getEpisodeCharacters} = require('./services.js')

const option = process.argv[2];
const id = process.argv[3];

if(option === "personajes"){
    if(id){
        getCharacterEpisodes(id)
    } else {
        getCharacters()
    }
}

if(option === "episodios"){
    if(id){
        getEpisodeCharacters(id)
    } else {
        getEpisodes()
    }
}