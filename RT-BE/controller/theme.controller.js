const db = require("../model")

exports.getThemeSetting = async function (req, res, next) {
    try {
        let themeSetting = await db.themes.findOne({})

        if (!themeSetting) return res.status(500).json({
            success: true,
            message: "error occured"
        })

        res.status(200).json({
            success: true,
            themeSetting
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "error occured"
        })
    }
}
exports.updateThemeSetting = async function (req, res, next) {
    try {
        let obj = {};
        if (req.params.type === 'pageLayouts') {
            if (req.body.footerLayout !== undefined) obj = { ...obj, "pageLayouts.footerLayout": req.body.footerLayout }

            if (req.body.staticCards != undefined) obj = { ...obj, "pageLayouts.staticCards": req.body.staticCards }
            if (req.body.adminDasboard != undefined) obj = { ...obj, "pageLayouts.adminDasboard": req.body.adminDasboard }
            if (req.body.loginPageOption != undefined) obj = { ...obj, "pageLayouts.loginPageOption": req.body.loginPageOption }
            if (req.body.showCalender != undefined) obj = { ...obj, "pageLayouts.showCalender": req.body.showCalender }
        }

        if (req.params.type === 'notificationPosition') {
            if (req.body.position != undefined) obj = { ...obj, "notificationPosition.position": req.body.position }
            if (req.body.enableCloseButton != undefined) obj = { ...obj, "notificationPosition.EnableCloseButton": req.body.enableCloseButton }
            if (req.body.progressBar != undefined) obj = { ...obj, "notificationPosition.progressBar": req.body.progressBar }
        }
        if (req.params.type === 'systemLogo') {
            if (req.files.favicon[0].filename != undefined) obj = { ...obj, "systemLogo.favicon": req.files.favicon[0].filename }
            if (req.files.logo[0].filename !== undefined) obj = { ...obj, "systemLogo.systemLogo": req.files.logo[0].filename }
        }

        if (req.params.type === "signInPageLogo") {
            if (req.files.logo[0].filename != undefined) obj = { ...obj, "signInPageLogo.logo": req.files.logo[0].filename }
        }
        if (req.params.type === "recruitmentPageLogo") {
            if (req.files.logo[0].filename != undefined) obj = { ...obj, "recruitmentPageLogo.logo": req.files.logo[0].filename }
        }
        if (req.params.type === "payRollLogo") {
            if (req.files.payRollLogo[0].filename != undefined) obj = { ...obj, "payRollLogo.payRollLogo": req.files.payRollLogo[0].filename }
        }
        if (req.params.type === 'organizationChart') {
            console.log(req.body, "valuesss here")
            if (req.body.zoomChart !== undefined) obj = { ...obj, "organizationChart.zoomChart": req.body.zoomChart }
            if (req.body.panchart !== undefined) obj = { ...obj, "organizationChart.panChart": req.body.panChart }
            if (req.body.exportChart !== undefined) obj = { ...obj, "organizationChart.exportChart": req.body.exportChart }
            if (req.body.chartLayout !== undefined) obj = { ...obj, "organizationChart.chartLayout": req.body.chartLayout }
        }

        let res = await db.themes.findOneAndUpdate({}, {
            $set: obj
        })
        res.status(204).end()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "error occured"
        })
    }
}
































