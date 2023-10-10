const app = require("express")();

const mongoose = require("mongoose")
const path = require("path")
const multer = require('multer');
const Grid = require("gridfs-stream")

const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require("crypto")
const methodOverride = require('method-override');
const bodyParser = require("body-parser")

mongoose.connect("mongodb://0.0.0.0/practice",{
useNewUrlParser: true,
useUnifiedTopology: true
})


const conn = mongoose.connection;

app.use(methodOverride("_method"))
app.use(bodyParser.json())



let gfs,gridfsBucket;

conn.once("open",()=>{
    console.log("connected to db")
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads'
    });
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
  })





  const storage = new GridFsStorage({
    url: "mongodb://0.0.0.0/practice",
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

let schema = new mongoose.Schema({
    name:String,
    dec:String,
    id:mongoose.Types.ObjectId
},{collection:"number"})


let model = mongoose.model("number",schema)


  app.post("/uploads",upload.single("file"),async (req,res)=>{

    await model.create({
        name:req.file.originalname,
        dec:req.body.dec,
        id:req.file.id
    })
    res.status(200).json({
        success:true,
        file:req.file
    })
  })


  app.get("/uploads",async (req,res)=>{
    console.log("hifgdii")
  let files =  await gfs.files.find({}).toArray();

  res.status(200).json(files)

    
  })


  app.get("/uploads/:id", async (req,res)=>{
    const readstream  = await findFile(req.params.id)

    readstream.pipe(res)

    async function findFile(id){
        let file = await gfs.files.findOne({filename:req.params.id});
        return gridfsBucket.openDownloadStream(file._id);

    }
  })








  app.listen(8000,()=>{
    console.log("server statred")
  })




// Custom middleware function to validate a specific field
function validateField(fieldName) {
  return (req, res, next) => {
    // Perform your validation logic here
    const fieldValue = req.body[fieldName]; // Assuming you're validating a field in the request body
    
    if (!fieldValue) {
      return res.status(400).json({ error: `Missing ${fieldName} field` });
    }
    
    // Add more validation logic as needed
    
    // If validation passes, call next() to proceed to the next middleware/route handler
    next();
  };
}

// Example usage in a route handler
app.post('/example-route', validateField('username'), (req, res) => {
  // This route handler will only execute if the 'username' field is present in the request body.
  // You can add your route logic here.
});






