sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel","sap/m/MessageToast"], function (BaseController,JSONModel, MessageToast) {
	"use strict";

	return BaseController.extend("template.controller.Main", {
		 onInit: function () {
      var oModel = new JSONModel();
      this.getView().setModel(oModel);
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
      var oSelectedItem = oEvent.getParameter("listItem");
      var oContext = oSelectedItem.getBindingContext();
      var oUser = oContext.getObject();

      // Mostrar detalles en el panel
      var oPanel = this.byId("detailPanel");
      var oDetailsText = this.byId("userDetails");

      oDetailsText.setText(`ID: ${oUser.id}\nNombre: ${oUser.name}\nEmail: ${oUser.email}\nTeléfono: ${oUser.phone}`);
      oPanel.setVisible(true);
    }
	});
});
