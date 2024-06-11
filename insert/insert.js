const express = require('express')
let mongodb=require('mongodb')
let url= require('../url')
let mcl=mongodb.MongoClient
let router=express.Router()
router.get("/",(req,res)=>{
    mcl.connect(url,(err,conn)=>{
        if(err)
            console.log("error in connection")
        else{
            let db=conn.db('nodedb')
            db.collection('products').insertOne(obj, (err) => {
                if (err)
                    res.json({ 'insert': 'Error ' + err })
                else {
                    console.log("Data inserted")
                    res.json({ 'insert': 'success' })
                    conn.close()
                }
            })
        }
    })
})


module.exports = router