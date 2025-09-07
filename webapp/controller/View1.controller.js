sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.shweta.shwetaui5fioridemo1.controller.View1", {
        onInit() {
        },

        onPress() {

            //logic to navigate to second view
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },

        onSubmit(){

            var name = this.getView().byId("idIpName").getValue(); //Get value of input field
            var msg = "Welcome to "+name; //generate the dynamic text 
            this.getView().byId("idTxtWelcome").setText(msg); //set the new text value to the text field
            this.getView().byId("idBtnSubmit").setType("Accept"); //change button color to green
            this.getView().byId("idTxtWelcome").setTextAlign("Left"); //set the changed text field alignment to left or right
            this.getView().byId("idLblName").setRequired(false); //Make field as not mandatory
            this.getView().byId("idIpName").setEnabled(false); //Disable input field

        }
    });
});