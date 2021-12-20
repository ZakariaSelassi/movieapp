const express = require('express')
const router = express.Router();
const db = require('../model/db')
// 0. create a movie
router.post('/movies', (req, res) => {
    
     const sql = `INSERT INTO movie (title,released,genre,description,language,country,type) VALUES (?,?,?,?,?,?,?)`
        db.dbConnection().query(sql,[
        req.body[0].title,
        req.body[0].released,
        req.body[0].genre,
        req.body[0].description,
        req.body[0].language,
        req.body[0].country,
        req.body[0].type
  
    ], (err, result) => {
        if (err) throw err
        res.json({message: "Successfully done !", data: req.body})
    })

})
// 1. GET all movies
router.get('/movies', async (req, res) => {
    db.dbConnection().query(
        'SELECT * from movie', (err,result) => {
            if(err){
                res.json({erro: "something went wrong !"})
            }else{
                res.json({message: "Successfully done !", data: result})
            }
        })
})

// 2. GET one movie 
router.get('/movies/:id', async (req,res) => {
        const id = req.params.id
        console.log(id)
       db.dbConnection().query(
        `SELECT title,released,genre,description,language,country,type from movie where id = ${id}`, (err,result) => {
            if(err){
                res.json({erro: "something went wrong !"})
            }else{
                res.json({message: "Successfully done !", data: result})
            }
        })

})
// 3. Delete one movie
router.delete('/movies/:id', async (req,res) => {
    const id = req.params.id
    db.dbConnection().query(
        `DELETE from movie where id = ${id}`, (err,result) => {
            if(err){
                res.json({erro: "something went wrong !"})
            }else{
                res.json({message: "Successfully Delete!", data: result})
            }
        })
})
// 4. Update one movie 
router.put('/movies/:id', async (req,res) => {
    const id = req.params.id
    console.log(req.body)
    const {title,released,genre,description,language,country,type} = req.body
    db.dbConnection().query(
        `UPDATE movie SET title = ? ,released = ? , genre = ?,description = ? ,language = ? ,country = ?,type = ?  WHERE id = ${id}`, [title,released,genre,description,language,country,type,id],(err,result) => {
            if(err){
                res.json({erro: "something went wrong !"})
            }else{
                res.json({message: "Successfully Update!", data: result.data})
            }
        })
})
module.exports = router;