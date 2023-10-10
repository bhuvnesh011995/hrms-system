const db = require("../model")

// check if company exist
// return true mean there is company else false
exports.checkCompany = async function(id){
    let isExist = await db.company.exists({_id:id})

   return  isExist ? true : false
}


exports.checkDepartment = async function(id){
    let isExist = await db.department.exists({_id:id})

    return isExist ? true : false
}

exports.checkSubdepartment = async function(id){
    let isExist = await db.subdepartment.exists({_id:id})

    return isExist ? true : false
}

exports.checkLocation = async function(id){
    let isExist = await db.location.exists({_id:id})

    return isExist ? true : false
}


exports.checkDesignation = async function(id){
    let isExist = await db.designation.exists({_id:id})
    return isExist ? true : false
}


exports.checkOfficeExist = async function(id){
    let isExist = await db.officeShift.exists({_id:id})
    return isExist ? true : false
}




exports.checkAwardExist = async function(id){
    let isExist = await db.award.exists({_id:id})
    return isExist ? true : false
}



exports.checkEmployeeExist = async function(id){
    let isExist = await db.employee.exists({_id:id})
    return isExist ? true : false
}


exports.checkTransferExist = async function(id){
    let isExist = await db.transfer.exists({_id:id})
    return isExist ? true : false
}

exports.checkRoleExist = async function(id){
    let isExist = await db.role.exists({_id:id})
    return isExist ? true : false
}
