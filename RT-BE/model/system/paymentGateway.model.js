const {Schema,model} = require("mongoose")

const schema = new Schema({
    email:{
        type:String,
    },
    paypalSandbox:{
        present:{
            type:Boolean,
        },
        status:{
            type:Boolean,
        },

    },
    paypalIpnUrl:{
        type:String,
    },
    stripeSecretKey:{
        type:String,
    },
    stripePublishableKey:{
        type:String,
    },
    active:{
        type:Boolean,
    },
    onlinePaymentReceiveAccount:{
        type:String,
    }
},{
    collection:"paymentGateway"
})


module.exports = model("paymentGateway",schema)