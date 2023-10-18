sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
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
            },
            onClick2: function(){
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
                    url: '/IntegrationSuiteDestination/http/test-api/',
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
            },
            onClick3: function(){
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
                var oLocal = new JSONModel();
                oLocal.loadData("/http/test-api/", myPayload, true, "POST", false, false)
                .then(function(data){debugger;})
                .catch(function(error){debugger;})
            }
        });
    });
