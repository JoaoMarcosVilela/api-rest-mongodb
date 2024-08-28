const conn = require('../database/db');

const {User: UserModel, User} = require('../model/User');

const userConttroler = {
    create : async(req, res) => {
        try{
            const user = {
                name: req.body.name
            }
            const response = await UserModel.create(user);
            res.status(201).json({response, msg: "Usuario cadastrado!"});
        }catch(error){
            console.log(error);
        }
    },

    read: async(req, res) => {
        try{
            const user = {
                name
            }
        }
    }
}

module.exports = userConttroler;