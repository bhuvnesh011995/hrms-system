const db = require("../../../model")


exports.getSystem = async function(req,res,next){
    try {
        let system = await db.system.findOne({}).populate({path:"system.defaultCurrency"})

        if(!system) return res.status(500).json({
            success:true,
            message:"error occured"
        })

        res.status(200).json({
            success:true,
            system
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}



exports.updateSystem = async function(req,res,next){
    try {
        let obj = {};
        if(req.body.system){
        if(req.body.system.name!=undefined) obj = {...obj,"system.name" : req.body.system.name}
        if(req.body.system.defaultCurrencyPosition!=undefined) obj = {...obj,"system.defaultCurrencyPosition" : req.body.system.defaultCurrencyPosition}
        if(req.body.system.employeeLogin!=undefined) obj = {...obj,"system.employeeLogin" : req.body.system.employeeLogin}
        if(req.body.system.footerText!=undefined) obj = {...obj,"system.footerText" : req.body.system.footerText}
        if(req.body.system.timezone!=undefined) obj = {...obj,"system.timezone" : req.body.system.timezone}
        if(req.body.system.defaultCurrency!=undefined) obj = {...obj,"system.defaultCurrency" : req.body.system.defaultCurrency || null}
        if(req.body.system.currentyearFooter!=undefined) obj = {...obj,"system.currentyearFooter" : req.body.system.currentyearFooter}
        if(req.body.system.statutoryAmountFixed!=undefined) obj = {...obj,"system.statutoryAmountFixed" : req.body.system.statutoryAmountFixed}
        if(req.body.system.defaultLanguage!=undefined) obj = {...obj,"system.defaultLanguage" : req.body.system.defaultLanguage}
        if(req.body.system.googleMapApiKey!=undefined) obj = {...obj,"system.googleMapApiKey" : req.body.system.googleMapApiKey}
        if(req.body.system.staffDashboard!=undefined) obj = {...obj,"system.staffDashboard" : req.body.system.staffDashboard}
        if(req.body.system.projectDashboard!=undefined) obj = {...obj,"system.projectDashboard" : req.body.system.projectDashboard}
        if(req.body.system.estimateTermsAndCondition!=undefined) obj = {...obj,"system.estimateTermsAndCondition" : req.body.system.estimateTermsAndCondition}
        if(req.body.system.invoiceTermsAndCondition!=undefined) obj = {...obj,"system.invoiceTermsAndCondition" : req.body.system.invoiceTermsAndCondition}
    }

        let {company,role,payroll,emailNotification,fileManager,performance} = req.body

        if(company){
            if(company.name!=undefined) obj = {...obj,"company.name":company.name}
            if(company.address.line1!=undefined) obj = {...obj,"company.address.line1":company.address.line1}
            if(company.address.line2!=undefined) obj = {...obj,"company.address.line2":company.address.line2}
            if(company.address.country!=undefined) obj = {...obj,"company.address.country":company.address.country}
            if(company.address.state!=undefined) obj = {...obj,"company.address.state":company.address.state}
            if(company.address.city!=undefined) obj = {...obj,"company.address.city":company.address.city}
            if(company.address.zipcode!=undefined) obj = {...obj,"company.address.zipcode":company.address.zipcode}
            if(company.client!=undefined) obj = {...obj,"company.client":company.client}
            if(company.email!=undefined) obj = {...obj,"company.email":company.email}
            if(company.phone!=undefined) obj = {...obj,"company.phone":company.phone}
        }

        if(role){
            if(role.manageOwnContact!=undefined) obj = {...obj,"role.manageOwnContact":role.manageOwnContact}
            if(role.manageOwnDocuments!=undefined) obj = {...obj,"role.manageOwnDocuments":role.manageOwnDocuments}
            if(role.manageOwnBankAccount!=undefined) obj = {...obj,"role.manageOwnBankAccount":role.manageOwnBankAccount}
            if(role.manageOwnProfilePicture!=undefined) obj = {...obj,"role.manageOwnProfilePicture":role.manageOwnProfilePicture}
            if(role.manageOwnQualification!=undefined) obj = {...obj,"role.manageOwnQualification":role.manageOwnQualification}
            if(role.manageOwnProfileInformation!=undefined) obj = {...obj,"role.manageOwnProfileInformation":role.manageOwnProfileInformation}
            if(role.manageOwnWorkExperience!=undefined) obj = {...obj,"role.manageOwnWorkExperience":role.manageOwnWorkExperience}
            if(role.manageOwnSocialInformation!=undefined) obj = {...obj,"role.manageOwnSocialInformation":role.manageOwnSocialInformation}
        }

        if(payroll){
            if(payroll.passwordFormat!=undefined) obj = {...obj,"payroll.passwordFormat":payroll.passwordFormat}
            if(payroll.passwordForPayslip!=undefined) obj = {...obj,"payroll.passwordForPayslip":payroll.passwordForPayslip}
            if(payroll.halfMonthly!=undefined) obj = {...obj,"payroll.halfMonthly":payroll.halfMonthly}
        }


        if(emailNotification){
            if(emailNotification.enableEmailNotifiction!=undefined) obj = {...obj,"emailNotification.enableEmailNotifiction":emailNotification.enableEmailNotifiction}
            if(emailNotification.emailType!=undefined) obj = {...obj,"emailNotification.emailType":emailNotification.emailType}

        }

        if(fileManager){
            if(fileManager.maxFileSize!=undefined) obj = {...obj,"fileManager.maxFileSize":fileManager.maxFileSize}
            if(fileManager.allowedExtension!=undefined) obj = {...obj,"fileManager.allowedExtension":fileManager.allowedExtension}
            if(fileManager.employeeCanDownload!=undefined) obj = {...obj,"fileManager.employeeCanDownload":fileManager.employeeCanDownload}

        }

        if(performance){
            if(performance.allowedExtension!=undefined) obj = {...obj,"performance.allowedExtension":performance.allowedExtension}
            if(performance.organizationalCompetencies!=undefined) obj = {...obj,"performance.organizationalCompetencies":performance.organizationalCompetencies}

        }


        console.log(obj)
        await db.system.findOneAndUpdate({},{
            $set:obj
        })

        res.status(204).end()


    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"error occured"
        })
    }
}