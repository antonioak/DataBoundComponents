({
    doInit : function(component, event, helper)
    {
        //  throw an event that says a Save Button is present.
        //  this way DB Components know they can work in Edit Mode (vs R/O Mode).
    },

    onButtonClick : function(component, event, helper)
    {
        //  throw an event that tells DB Components to Update the record.
    },
    
})
