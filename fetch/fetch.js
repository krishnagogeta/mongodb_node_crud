const express =require('express')
let mongodb = require('mongodb')
let url= require('../url')
let router=express.Router()
const mcl=mongodb.MongoClient
router.get("/",(req,res)=>{
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection')
        else {
            let db = conn.db('nodedb')
            db.collection('products').find().toArray((err, array) => {
                if (err)
                    console.log('Error:- ', err)
                else {
                    console.log('Data Sent')
                    res.json(array)
                    conn.close()
                }
            })
        }
    })
})


//export router
module.exports = router



