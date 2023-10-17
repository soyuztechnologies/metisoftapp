sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.meti.metisoftui.controller.Main", {
            onInit: function () {
                this.oModel = this.getOwnerComponent().getModel();
            },
            onClick: function(){
                var that = this;
                var myPayload = {
                    "CtLibri":[{
                        "item":{
                            "Mandt":"?",
                            "CodLibro":"?",
                            "Title":"?",
                            "Autore":"?",
                            "LettoSi":"?",
                            "CasaEdi":"?"
                        }
                    }],
                    "ICreate":"?",
                     "IDelete":"?",
                      "IGet":"?",
                       "IGetall":"X",
                        "IUpdt":"?"
                };
                $.ajax({
                    url: '/http/test-api/',
                    type: 'POST',
                    headers:{
                        "Content-type": "application/json"
                    },
                    dataType: 'json',
                    async: true,
                    data : JSON.stringify(myPayload),
                    success: function(data)
                    {
                        that.oModel.setProperty("/item",data["n0:ZBcSonialibriRfcResponse"].CtLibri.item);
                    },
                    error: function(err, status){
                        debugger;
                    }
                });

                // $.ajax({
                //     url: '/http/test-api/',
                //     type: "POST",
                //     headers:{
                //         "Content-type": "application/json"
                //     },
                //     async: false,
                //     data: JSON.stringify(myPayload),
                //     success: function(res){
                //         debugger;
                //     },
                //     error: function(oerr){
                //         debugger;
                //     }

                // });
            }
        });
    });
