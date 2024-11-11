sap.ui.define([
    "./BaseController",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], function(BaseController, MessageToast, JSONModel) {
	"use strict";

	return BaseController.extend("template.controller.Main", {
		onInit: function () {
			// Cargar datos del modelo de tareas
			var oModel = new JSONModel(sap.ui.require.toUrl("template/model/tasks.json"));
			console.log(oModel);
			this.getView().setModel(oModel);
		},
		onAddTask: function () {
			// Obtener el modelo y el input
			var oModel = this.getView().getModel();
			var aTasks = oModel.getProperty("/tasks");
			var sNewTask = this.getView().byId("newTaskInput").getValue();

			if (sNewTask) {
				// Agregar nueva tarea
				aTasks.push({
					title: sNewTask,
					completed: false
				});
				oModel.setProperty("/tasks", aTasks);

				// Limpiar el input
				this.getView().byId("newTaskInput").setValue("");
			} else {
				MessageToast.show("Por favor, ingrese una tarea.");
			}
		},

		onDeleteTask: function (oEvent) {
			// Obtener el modelo y la tarea seleccionada
			var oModel = this.getView().getModel();
			var aTasks = oModel.getProperty("/tasks");
			var oContext = oEvent.getSource().getBindingContext();
			var iIndex = oContext.getPath().split("/")[2];

			// Eliminar la tarea del array
			aTasks.splice(iIndex, 1);
			oModel.setProperty("/tasks", aTasks);
		},

		onToggleComplete: function (oEvent) {
			// Obtener el modelo y la tarea seleccionada
			var oModel = this.getView().getModel();
			var oContext = oEvent.getSource().getBindingContext();
			var iIndex = oContext.getPath().split("/")[2];

			// Cambiar el estado de completado
			var aTasks = oModel.getProperty("/tasks");
			aTasks[iIndex].completed = oEvent.getSource().getSelected();
			oModel.setProperty("/tasks", aTasks);
		}
	});
});
