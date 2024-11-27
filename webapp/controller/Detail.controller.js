sap.ui.define(["./BaseController"], function (BaseController) {
    "use strict";

    return BaseController.extend("template.controller.Detail", {
        onInit: function () {
					var oModel = this.getOwnerComponent().getModel();
					this.getView().setModel(oModel);
        },
    });
});
