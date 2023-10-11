const { Schema, model } = require('mongoose')


const schema = new Schema({
    PageLayouts: {
        footerLayout: {
            type: String,
        },
        staticCards: {
            type: String,
        },
        adminDasboard: {
            type: String,
        },
        LoginPageOption: {
            type: String,
        },
        showCalender: {
            type: Boolean,
            default: false
        },
    },
    NotificationPosition: {
        Position: {
            type: String,
        },
        EnableCloseButton: {
            type: Boolean,
            default: false
        },
        ProgressBar: {
            type: Boolean,
            default: false
        },
    },
    SystemLogo: {
        SystemLogo: {
            type:String
        },
        favicon: {
            type:String
        }
    },
    SignInPageLogo: {
        Logo: {
            type:String
        }
    },
    RecruitmentPageLogo: {
        Logo: {
            type:String
        },
    },
    PayrollLogo: {
        payRollLogo: {
            type:String
        },
    },
    OrganizationChart: {
        zoomChart: {
            type: Boolean,
            default: false
        },
        panChart: {
            type: Boolean,
            default: false
        },
        exportChart: {
            type: Boolean,
            default: false
        },
        chartLayout: {
            type: String,
        }
    }
}, {
    collection: "themes"
})
module.exports = model('themes', schema)







