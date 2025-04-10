const fs =require("fs")
require("dotenv").config()
const express = require("express")
const connectDatabase = require("./database")
const Blog = require("./model/blogModel")
const { storage, multer} = require("./middleware/multerConfig")
const upload = multer({storage : storage})
const app = express()
app.use(express.json());

connectDatabase()
app.get("/", (req, res) => {
    res.send("Welcome to Home Page...")
})

app.get("/blog/:id", async (req,res) => {
    const {id} = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
        return res.status(404).json({
            msg:"Please enter correct id....."
        })
    }

    res.status(200).json({
        msg : "Single Blog fetch successfully",
        data : blog,
    })
});



app.post("/blog", upload.single("image"), async (req, res) =>{
    
    const {faculty, course, mentor } = req.body;
    console.log(req.body)
    const filename = req.file.filename;
   await Blog.create({
        faculty : faculty,
        course : course,
        mentor : mentor,
        image : filename
    })
    res.status(200).json({
        msg : "Blog API hit successfully...!!"
    })
})

// //create (C)
// app.post("/blog",upload.single("image"),async(req, res) => {
// const {faculty, course, mentor,} = req.body//text for data
// const filename = req.file.filename; //multipart / form-data

// console.log(req.body);
// if (!faculty ||!course  ||!mentor) {
//     return res.status(400).json({
//      msg :"Sorry..!! Please enter complete data..."
// }
//GET Operation
app.get("/blog", async(req, res) =>{     // create get API
    const blogs = await Blog.find();
    res.status(200).json({
        msg : "blog is fetching",
        data:blogs,
    });
});
//single get app
app.get("/blog/:id", (req, res)  => {
    Console.log("Single Blog hitted successfully")   
   });

app.delete("/blog/:id", async (req, res) =>{
    const {id} = req.params;
    const blog = await Blog.findById(id);
    const imageName = blog.image;
    
    fs.unlink('storage/${imgaeName}', (err) => {
        if (err) {
            console.log(err);
        } else {
        console.log("File deleted successfully...");
    }
});
await   Blog.findByIdAndDelete(id);
res.status(200).json({
    msg : "Blog deleted successfully..."
 });
});

app.use(express.static("./storage"));

app.listen(process.env.PORT, () =>{
    console.log("Your project has been started on port 3000...")
})
