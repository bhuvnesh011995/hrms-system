const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = require("express")();
const bodyParser = require("body-parser")
const cors = require("cors")
const session = require('express-session')
const MongoStore = require("connect-mongo")
app.use(bodyParser.urlencoded({extended: false}))

  app.use(bodyParser.json())

  app.use(cors());

  app.use(session({
    secret:"1234",
    resave:true,
    saveUninitialized:false,
    store: MongoStore.create({mongoUrl:"mongodb://0.0.0.0/testdb",collectionName:"session"}),
    cookie:{
        sameSite:"none"
    }
  }))


  app.use(passport.initialize())
  app.use(passport.session())
  



passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      console.log("hi5")
        // let {system:{employeeLogin}} = await db.system.findOne().select("system.employeeLogin")
        console.log(username)
        console.log(password)
        // let user = await db.employee.findOne({email:username})
        let isValid = true
        if(!isValid){
            return done(null, false, { message: 'Invalid username or password' });
        }else{
            return done(null, {_id:"fdfdsa"});
     }
    } catch (error) {
      console.log("err",err)
        return done(err);
    }
}))


passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = {name:"bhu",role:"admin",_id:"dsfdsaf"}
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});




app.post("/login",(req,res,next)=>{
    passport.authenticate("local",(err,user,info)=>{
       if(err) return res.status(500).json({error:"server error"})

       if(!user) return res.status(400).json(info)

       req.login(user,(err)=>{
        if(err) return res.status(500).json(err)

        res.status(200).json({message:"login successfull"})
       })
    })(req,res,next)
})


app.listen(5000,()=>{
    console.log("server started at 5000");
})
  