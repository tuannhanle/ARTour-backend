'use strict'
module.exports = {
    
    CatchError: (res,error)=>{
        res.status(error.status ? error.status : 404).json({
            success: false,
            msg: error
          })
    }
}