const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;
const db = require("../model")
const bcrypt = require("bcrypt")

passport.use(new LocalStrategy({usernameField: 'login'},async(login,password,done)=>{
    try {
      
        let {system:{employeeLogin}} = await db.system.findOne().select("system.employeeLogin")
       
        let user = await db.employee.findOne({[employeeLogin]:login}).select("password")
        let isValid = bcrypt.compareSync(password,user.password)
        if(!isValid){
            return done(null, false, { message: 'Invalid username or password' });
        }else{
          console.log(user)
            return done(null, user);
     }
    } catch (error) {
        return done(error);
    }
}))


passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.employee.findById(id).populate("role")
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});


module.exports = {
    initialize: passport.initialize(),
    session: passport.session(),
    setUser: (req, res, next) => {
      res.locals.user = req.user;
      return next();
    },
  };
  