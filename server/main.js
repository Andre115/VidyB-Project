import express from "express"
import connetion from './config.js'
import cors from "cors"
import multer from "multer"
import path from "path"


const port= 3300;
const app= express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const storage= multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/images')
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload= multer({
    storage: storage
})

app.post("/upload", upload.single('files'), (req, res) => {

    res.json({FileName: req.file.filename})

})

app.post("/uploads", upload.array('files'), (req, res) => {

    res.json({FileName: req.files})

})



app.get("/projects", (req, res) => {
        const sql= 'SELECT * FROM projects';
        connetion.query(sql, (err, data)=>{
            if(err){
                return res.json({Error: "error"})
            }
            return res.json(data)
        })   
})

app.post("/create", (req, res) => {
        const sql= "INSERT INTO projects (name, size_slaid, format_screen, titles, position_title, format, descripts, speed, urls) VALUES (?)";
        const values= [
            req.body.name_project,
            req.body.size_slaid,
            req.body.format_screen,
            req.body.titles,
            req.body.position_title,
            req.body.format,
            req.body.descripts,
            req.body.speed,
            req.body.urls,
        ]

        connetion.query(sql, [values], (err, data)=>{
            if(err){
                res.json({Error: "error"})
            }
            return res.json(data)
        })   
})

app.listen(port, ()=>{
    console.log('Aqui estou 0')
})

