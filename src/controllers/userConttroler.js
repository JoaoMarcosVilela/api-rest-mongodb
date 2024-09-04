const conn = require('../database/db');

const {User: UserModel, User} = require('../model/User');

const userConttroler = {
    create : async(req, res) => {
        try{
            const user = {
                name: req.body.name
            }

            if(user.name == ""){
                return res.status(401).json({error: "Necessario adicionar dados!"});
            }

            const response = await UserModel.create(user);
            res.status(201).json({response, msg: "Usuario cadastrado!"});
        }catch(error){
            console.log(error);
        }
    },

    read: async(req, res) => {
        const usuarios= await UserModel.find();
        return res.json(usuarios);
    },

    delete: async(req,res) => {
        const { id } = req.params;
        
        const usuarioOnDelete = await UserModel.findOneAndDelete({ _id: id});

        if(usuarioOnDelete){
            return res.json(usuarioOnDelete);
        }

        return res.status(401).json({ error: "Não foi possivel remover"});
    }
}

module.exports = userConttroler;