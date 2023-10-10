let serverConfig = require("./config/server.config")
let {app} = require("./app")

app.listen(serverConfig.PORT,()=>{
    console.log(`server started at ${serverConfig.PORT}`)
})