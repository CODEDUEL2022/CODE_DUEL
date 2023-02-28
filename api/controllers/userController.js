"use strict";

const { UUID } = require("sequelize");
const db = require("../models/index");

module.exports = {
    read: async(req, res) => {
        try{
            const result = await db.Task.findAll();
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    create: async(req, res) => {
        try{
            
            const result = await db.User.create({
                name: req.body.name
            });
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    update: async(req, res) => {
        try{
            const result = await db.User.update(
                {
                    name: req.body.name
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
            res.send(result);
        }catch(err){
            res.status(500).send(err);
        }
    },
    delete: async(req, res) => {
        try{
            const result = await db.Task.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.send({
                result: result
            });
        }catch(err){
            res.status(500).send(err);
        }
    },
    Login: async(req, res) => {
        try{
            const user_name = req.body.user.name;
            const user_password = req.body.user.password;
            let user_id = 0;
            let user_level = 0;
            let user_exp = 0;
            const is_success = await db.User.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {
                user_id = user.id;
            });
            await db.Level.findOne({
                where:{
                    user_id: user_id
                }
            }).then(user => {
                    user_level = user.level;
                    user_exp = user.exp;
            })
            const result = [is_success, user_id,user_level,user_exp]
            res.send(result); 
        }catch(err){
            res.status(500).send(err);
        }
    },
    createUser: async(req, res) => {
        try{
            const user_name = req.body.user.name;
            const user_password = req.body.user.password;
            await db.User.count({
                where:{
                    name: user_name
                }
            }).then(count => {
                if(count > 0){
                    res.send("既に同じ名前のユーザーが存在します")
                }else{
                    const result = db.User.create({
                        name: user_name
                    });
                    res.send(result);
                }
            })
        }catch(err){
            res.status(500).send(err);
        }
    },
    getUserInfo: async(req, res) => {
        try{
            const user_name = req.body.user.name;
            const user_password = req.body.user.password;
            let user_id = 0;
            let user_exp = 0;
            let user_level = 0;

            const is_success = await db.User.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {
                user_id = user.id;
            });
            await db.Level.findOne({
                where:{
                    id: user_id
                }
            }).then(user => {
                user_exp = user.exp;
                user_level = user.level;
            })
            const result = [user_id, [user_exp, user_level]]
            res.send(result);
            
        }catch(err){
            res.status(500).send(err);
        }
    },
    deleteUser: async(req, res) => {
        try{
            await db.User.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {
                user.destroy();
                const is_success = true;
                const result = [is_success];
                res.send(result);
            });

        }catch(err){
            res.status(500).send(err);
        }
    },
    testUserCreate: async(req, res) => {
        try{
            const user_name = "user";
            const user_password = "password";

            const result = await db.Task.create({
                name: user_name,
                password: user_password
            });
            
            res.send(result);
            const is_success = await db.Task.findOne({
                where: {
                    name: user_name,
                }
            }).then(user => {console.log(user.id)});

        }catch(err){
            res.status(500).send(err);
        }
        // const rows = await db.Task.findAll();
        // rows.forEach(row => {
        //     const id = row.id
        //     const name = row.name
        //     console.log(`${id}: ${name}`)
        //  })
    },
}

