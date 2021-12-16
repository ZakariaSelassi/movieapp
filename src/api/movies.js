const express = require('express')
const router = express.Router();
const db = require('../model/db')
// 0. create a movie
router.post('/movies', (req, res) => {
    console.log(req.body)
    const {title,released,genre,description,language,country,type} = req.body
    const sql = `INSERT INTO movie (title,released,genre,description,language,country,type) VALUES (?,?,?,?,?,?,?)`
    db.dbConnection().query(sql,[
        title,
        released,
        genre,
        description,
        language,
        country,
        type
        
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
        `SELECT movieName,movieCountry from movie where idMovie = ${id}`, (err,result) => {
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
        `DELETE from movie where idMovie = ${id}`, (err,result) => {
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
    const {movieName,movieCountry} = req.body
    db.dbConnection().query(
        `UPDATE movie SET movieName = ?, movieCountry = ?  WHERE idMovie = ${id}`, [movieName,movieCountry,id],(err,result) => {
            if(err){
                res.json({erro: "something went wrong !"})
            }else{
                res.json({message: "Successfully Update!", data: result})
            }
        })
})
module.exports = router;