const {Schema,model} = require("mongoose")

const schema = new Schema({
    recruitment:{
        type:Boolean,
        default:true
    },
    travels:{
        type:Boolean,
        default:true
    },
    fileManager:{
        type:Boolean,
        default:true
    },
    multiLanguage:{
        type:Boolean,
        default:true
    },
    organizationChart:{
        type:Boolean,
        default:true
    },
    eventMeetings:{
        type:Boolean,
        default:true
    },
    chatBox:{
        type:Boolean,
        default:true
    },
    subdepartment:{
        type:Boolean,
        default:true
    },
    payroll:{
        type:Boolean,
        default:true
    },
    performance:{
        type:Boolean,
        default:true
    },
},{
    collection:"modules"
})


module.exports = model("modules",schema)