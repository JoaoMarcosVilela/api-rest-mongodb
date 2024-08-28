const mongoose = require("mongoose");

async function main(){
    try{

        //Restringir os dados para não mandar o json qualquer.
        mongoose.set("strictQuery",true);

        //conecntado ao banco  
        await mongoose.connect('mongodb://127.0.0.1:27017/banco');

        //msg para indicar
        console.log('conectando ao mongodb');
    }catch(error){

        //mostrando o erro caso tenha
        console.log(`Error: ${error}`);
    }
}

module.exports = main;


