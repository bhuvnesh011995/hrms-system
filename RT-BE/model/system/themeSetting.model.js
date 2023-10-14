const { Schema, model } = require('mongoose')
const schema = new Schema({
    pageLayouts: {
        footerLayout: {
            type: String,
        },
        staticCards: {
        },
        adminDasboard: {
            type: String,
        },
        loginPageOption: {
            type: String,
        },
        showCalender: {
            type: Boolean,
            default: false
        },
    },
    notificationPosition: {
        position: {
            type: String,
        },
        enableCloseButton: {
            type: Boolean,
            default: false
        },
        progressBar: {
            type: Boolean,
            default: false
        },
    },
    systemLogo: {
        systemLogo: {
            type:String
        },
        favicon: {
            type:String
        }
    },
    signInPageLogo: {
        logo: {
            type:String
        }
    },
    recruitmentPageLogo: {
        logo: {
            type:String
        },
    },
    payRollLogo: {
        payRollLogo: {
            type:String
        },
    },
    organizationChart: {
        zoomChart: {
            type: Boolean,
            default: false
        },
        title:{
            type:String
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







