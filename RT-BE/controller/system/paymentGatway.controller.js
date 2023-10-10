const db = require("../../model")




exports.getPaymentGateway = async function(req,res,next){
    try {
        let paymentGateway = await db.paymentGateway.findOne()

        if(!paymentGateway) return res.status(500).json({success:false,message:"error occured"})

        res.status(200).json({
            success:true,
            paymentGateway
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some internal error"
        })
    }
}

exports.updatePaymentGateway = async function(req,res,next){
    try {
        let obj ={};
        if(req.body.email) obj = {...obj,email:req.body.email}
        console.log(req.body)
        if(req.body.paypalSandbox?.present===true || req.body.paypalSandbox?.present===false) obj = {...obj,"paypalSandbox.present":req.body.paypalSandbox.present}
        if(req.body.paypalSandbox?.status) obj = {...obj,"paypalSandbox.status":req.body.paypalSandbox.status}
        if(req.body.stripeSecretKey) obj = {...obj,stripeSecretKey:req.body.stripeSecretKey}
        if(req.body.stripePublishableKey) obj = {...obj,stripePublishableKey:req.body.stripePublishableKey}
        if(req.body.active === true || req.body.active === false  ) obj = {...obj,active:req.body.active}
        if(req.body.onlinePaymentReceiveAccount != undefined) obj = {...obj,onlinePaymentReceiveAccount:req.body.onlinePaymentReceiveAccount}
        
        console.log(obj)
        await db.paymentGateway.findOneAndUpdate({},{
            $set:obj
        })

        res.status(204).end();
       } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"some internal error"
        })
    }
}