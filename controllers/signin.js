'use strict'
const controller = require('./controller');
const handler = require('../handlers/signin.js');

const alibarray = require('alib-array');

    module.exports={
    // getData: async (req,res)=>{
    //     try{    
    //         let data = await handler.getData();
    //         res.status(200);
    //         res.json({
    //             msg: data
    //         })
    //     }catch(error){
    //         controller.CatchError(res,error)
    //     }
    // },

    signin: async (req, res) => {
        try{
            
            let data = req.body;
            console.log(data);
            // let post = await handler.postData(data)
            res.status(200);
            res.json({
                // msg: post,
                success: true,
                msg: data
            })
        }catch(error){
            controller.CatchError(res,error);
        }
    }
    
    // ,
    // postManyData: async (req, res) => {
    //     try{
    //         let data = req.body;
    //         let post = await handler.postManyData(data)
    //         res.status(200);
    //         res.json({
    //             msg: post
    //         })
    //     }catch(error){
    //         controller.CatchError(res,error);
    //     }
    // }

}

