'use strict'
const model = require('../models/project');

module.exports={
    // getData: async()=>{
    //     let data = await model.find()
    //     return data;
    // },
    postData: async(data) => {
        let result = await model.create({
            ...data
        })
        return result;
    }
    // ,
    // postManyData: async(dataArray) =>{
    //     let result = await model.insertMany(dataArray)
    //     return result;
    // }
}