sap.ui.define(["./BaseController"], function (BaseController) {
    "use strict";

    return BaseController.extend("template.controller.Detail", {
        onInit: function () {
					var oModel = this.getOwnerComponent().getModel();
					this.getView().setModel(oModel);
            this.getRouter()
                .getRoute("detail")
                .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            const userId = oEvent.getParameter("arguments").userId;
            const oModel = this.getOwnerComponent().getModel();
            const users = oModel.getProperty("/users");
            const selectedUser = users.find(user => user.id.toString() === userId);

            oModel.setProperty("/selectedUser", selectedUser);
        }
    });
});
