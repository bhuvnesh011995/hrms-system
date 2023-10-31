const promotionController = require("../../controller/coreHR/promotion.controller")

const midware = require("../../middleware")


module.exports = function(app){
    app.post("/rt/api/v1/promotion",[midware.verifyToken],promotionController.addPromotion)
    app.get("/rt/api/v1/promotion",[],promotionController.getAllPromotions)
    app.put("/rt/api/v1/promotion/:id",[],promotionController.updatePromotion)
    app.delete("/rt/api/v1/promotion/:id",[],promotionController.deletePromotion)
}