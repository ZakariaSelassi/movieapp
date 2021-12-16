// 1. Setup config for databse in my config folder 
// 2. Setup model folder with connection to database , and file for Query 
// 3. Setup api folder with route 
// 4. call api route to index.js


/* const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: 'root',
    database: 'movieDB',
})


app.get('/movie', (req,res) =>{
    db.query(
        'SELECT * from movie', (err,result) => {
            if(err){
                res.json({erro: "something went wrong !"})
            }else{
                res.json({message: "Successfully done !", data: result})
            }
        })

})
app.post('/create' , (req,res) => {
    const name = req.body.movieName;
    const country = req.body.movieCountry
     db.query(
        'INSERT INTO movie (movieName,movieCountry) VALUES (?, ?)',
        [name,country],
        (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.json({message: "Successfully added ! "})
        }
    })
   
})
 */