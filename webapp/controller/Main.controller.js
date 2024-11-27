sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel", "sap/m/MessageToast"], function (BaseController, JSONModel, MessageToast) {
	"use strict";

	return BaseController.extend("template.controller.Main", {
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel();
			$.ajax({
				url: "https://jsonplaceholder.typicode.com/users",
				method: "GET",
				success: function (data) {
					oModel.setData({ users: data });
				},
				error: function (xhr, status, error) {
					MessageToast.show("Error al cargar los datos");
					console.error("Error al cargar datos:", error);
				}
			});
		},

		onSelectionChange: function (oEvent) {
			const oSelectedItem = oEvent.getParameter("listItem");
			const oContext = oSelectedItem.getBindingContext();
			const oUser = oContext.getObject();
			const oModel = this.getOwnerComponent().getModel();
			oModel.setProperty("/selectedUser", oUser);

			// Navegar a la página de detalles
			this.getRouter().navTo("detail", {
				userId: oUser.id
			});
		}

	});
});
