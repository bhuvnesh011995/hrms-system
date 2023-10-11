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
        const { PageLayouts, NotificationPosition, SystemLogo, SignInPageLogo, RecruitmentPageLogo, PayrollLogo, OrganizationChart } = req.body
        let obj = {};
        if (PageLayouts) {
            if (PageLayouts.footerLayout != undefined) obj = { ...obj, "PageLayouts.footerLayout": PageLayouts.footerLayout }
            if (PageLayouts.staticCards != undefined) obj = { ...obj, "PageLayouts.staticCards": PageLayouts.staticCards }
            if (PageLayouts.adminDasboard != undefined) obj = { ...obj, "PageLayouts.adminDasboard": PageLayouts.adminDasboard }
            if (PageLayouts.LoginPageOption != undefined) obj = { ...obj, "PageLayouts.LoginPageOption": PageLayouts.LoginPageOption }
            if (PageLayouts.showCalender != undefined) obj = { ...obj, "PageLayouts.showCalender": PageLayouts.showCalender }
        }
        if (NotificationPosition) {
            if (NotificationPosition.Position != undefined) obj = { ...obj, "NotificationPosition.Position": NotificationPosition.Position }
            if (NotificationPosition.EnableCloseButton != undefined) obj = { ...obj, "NotificationPosition.EnableCloseButton": NotificationPosition.EnableCloseButton }
            if (NotificationPosition.ProgressBar != undefined) obj = { ...obj, "NotificationPosition.ProgressBar": NotificationPosition.ProgressBar }
        }
        if (SystemLogo) {
            if (SystemLogo.Position != undefined) obj = { ...obj, "SystemLogo.Position": SystemLogo.Position }
            if (SystemLogo.favicon != undefined) obj = { ...obj, "SystemLogo.favicon": SystemLogo.favicon }
        }
        if (SignInPageLogo) {
            if (SignInPageLogo.Logo != undefined) obj = { ...obj, "SignInPageLogo.Logo": SignInPageLogo.Logo }
        }
        if (RecruitmentPageLogo) {
            if (RecruitmentPageLogo.Logo != undefined) obj = { ...obj, "RecruitmentPageLogo.Logo": RecruitmentPageLogo.Logo }
        }
        if (PayrollLogo) {
            if (PayrollLogo.payRollLogo != undefined) obj = { ...obj, "PayrollLogo.payRollLogo": PayrollLogo.payRollLogo }
        }
        if (OrganizationChart) {
            if (OrganizationChart.zoomChart != undefined) obj = { ...obj, "OrganizationChart.zoomChart": OrganizationChart.zoomChart }
            if (OrganizationChart.panChart != undefined) obj = { ...obj, "OrganizationChart.panChart": OrganizationChart.panChart }
            if (OrganizationChart.exportChart != undefined) obj = { ...obj, "OrganizationChart.exportChart": OrganizationChart.exportChart }
            if (OrganizationChart.chartLayout != undefined) obj = { ...obj, "OrganizationChart.chartLayout": OrganizationChart.chartLayout }
        }
        console.log(obj);
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































