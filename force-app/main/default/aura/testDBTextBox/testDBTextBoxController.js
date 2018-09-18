({
    doInit : function(component, event, helper)
    {
        var myFieldName = component.get("v.dbFieldName");
        var fields = new Array(myFieldName);

        component.set("v.dbFieldNames", fields);

        var cmp = component.find("recordLoader");

        cmp.reloadRecord();

        console.log("Getting the Apex Controller Method...");
        var action = component.get("c.getFieldValue");
        
        console.log("Setting Params...");
    	action.setParams({
                            "recordId":component.get("v.recordId"),            
            				"sObjectType":component.get("v.sObjectName"),
            				"myFieldName": myFieldName
        				});
        
        console.log("Setting Callback...");        
        action.setCallback(this, function(a){
            var response = a.getReturnValue();
            if (response == null)
            {
                console.log("RETURN VALUE ID IS NULL!");
                return;
            } else
            {
                console.log("FIELD VALUE = " + response);
                component.set("v.dbFieldValue", response);
            }
        });
        
        console.log("ENQUEUEING THE ACTION...");
        $A.enqueueAction(action);                                      
    },

    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
           // record is loaded (render other component which needs record data value)
            console.log("Record is loaded successfully.");
        } else if(eventParams.changeType === "CHANGED") {
            // record is changed
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
        }
    }


})
