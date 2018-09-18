public with sharing class DataBoundCMPController {
    public DataBoundCMPController() {}

    @AuraEnabled
    public static string getFieldValue(Id recordId, string sObjectType, string myFieldName)
    {
        string queryString = 'SELECT Id, ' + myFieldName + ' FROM ' + sObjectType + ' WHERE Id = \'' + recordId + '\'';
        sObject myObj = Database.query(queryString);

        string myFieldValue = (string)myObj.get(myFieldName);

        return myFieldValue;
    }
}
