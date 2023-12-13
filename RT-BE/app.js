const app = require("express")()
const dbConfig = require("./config/db.config")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const dbs = require("./model")
const path = require("path")
const multer = require('multer');
const bcrypt = require("bcrypt")
const express=require('express')
const session = require("express-session")
const MongoStore = require("connect-mongo")
const middleware = require("./middleware")
// const {GridFsStorage} = require('multer-gridfs-storage');
// const crypto = require("crypto")
// const methodOverride = require('method-override');

// connecting to database

console.log(dbConfig.URI)
mongoose.connect(dbConfig.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
  })
  const conn = mongoose.connection;

  // testing connection
  conn.on("error",(error)=>{
    console.log(error)
    console.log("Error while connecting to db")
  })
  conn.once("open",()=>{ 
    console.log("connected to db")
    init()

  })
  let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,"public")
    },
    filename:(req,file,cb)=>{
      let uniqueName
      console.log(file)
      uniqueName = "Img-"+Date.now()+"."+file.mimetype.split("/")[1]
      cb(null,"uploads/"+uniqueName)
    }
  })

  exports.upload = multer({ storage });


  // app.use(session({
  //   secret:"1234",
  //   resave:true,
  //   saveUninitialized:false,
  //   store: MongoStore.create({mongoUrl:process.env.DBURI,collectionName:"session"})
  // }))


  // app.use(middleware.auth.initialize)
  // app.use(middleware.auth.session)
  // app.use(middleware.auth.setUser)
  
// checking initial things if not present create one
  async function init(){

    try {

    // add a Super Admin role if not exist
    let role = await dbs.role.findOne({name:"Super Admin"})

    if(!role){
      role = await dbs.role.create({
      name:"Super Admin",
      permission:["All"]
    })
    console.info("super admin role is created")
}else console.info("role is already present")


    // check if a Super Admin present 

    let superAdmin = await dbs.employee.findOne({role:role._id})

    if(!superAdmin){ 
      await dbs.employee.create({
      username:"superadmin",fName:"Super",lName:"Admin",role:role._id,password:bcrypt.hashSync("123",8)
    })
    console.info("Supre Admin is created")
}else console.info("Super Admin is already present")

    // // checking constant document in database
    // let constantDoc = await dbs.constant.findOne({})
    // if(!constantDoc){

    //   // creating constant document with empty fields
    //   await dbs.constant.create({})

    //   console.log("constants have been created in database")
    // }else{
    //   console.log("constant are already there in database")
    // }

    //checking paymentGateway in database

    let paymentGatewayIsExist = await dbs.paymentGateway.exists({})

    if(!paymentGatewayIsExist){
      await dbs.paymentGateway.create({})

      console.log("empty paymentgateway created")
    }else console.log("payment Gatway already exist")

//checking for system setting
    let system = await dbs.system.exists({})

    if(!system){
      await dbs.system.create({})

      console.log("empty system created")

    }else console.log("system already exist")


    // checking seup modules of system in database
    let modules = await dbs.modules.findOne({})
  
    if(!modules){
      await dbs.modules.create({})
      console.log("modules setting created")
    }else console.log("setup modules already present in database")

    
        let themeExist=await dbs.themes.exists({})
        
      if(!themeExist){
           await dbs.themes.create({}) 
           console.log("empty theme is created");
      }else console.log("themes is already present")
      
      
    return
  } catch (error) {
      console.log(error)
  }
  }





// middleware

// app.use(methodOverride("_method"))

  app.use(bodyParser.urlencoded({extended: false}))

  app.use(bodyParser.json())

  app.use(cors());


// all routes
  app.use("/image",express.static("public"))
  app.use("/files",express.static(path.join(__dirname, 'public/files')))
  require('./route')(app)
  
exports.app = app