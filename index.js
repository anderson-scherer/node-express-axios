const express = require("express");
const API = require('./api');
const app = express();

const url = "http://localhost:3000/";
const Mock = {    
    'image': 'José das Neves',
}

const postImage = async () => {
    try {
        const images = await API.post(`${url}images`, Mock)
        return images;
    } catch (err) {
        throw new Error('Erro ao salvar Imagem')
    }
}

const postMeme = async (meme) => {      
    try {
        const images = await API.post(`${url}meme`, meme.name)        
        return meme;
    } catch (err) {
        throw new Error('Erro ao salvar meme')
    }
}

app.post("/imagem", async (req, res) => {   
    try {
        const {data: { image }} = await postImage();        
        const meme = await postMeme(image);                
    } catch (err) {
        return res.status(401).send(err.message);
    }

    res.send("Terminada Consulta");
});

app.listen(3001);