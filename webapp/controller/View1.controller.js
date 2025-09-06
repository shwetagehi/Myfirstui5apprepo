sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.shweta.shwetaui5fioridemo1.controller.View1", {
        onInit() {
        },

        onPress() {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});