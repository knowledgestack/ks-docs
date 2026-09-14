# ConnectionSummary

Where a connector points, with the password left out.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** |  | 
**port** | **int** |  | [optional] 
**database** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from ksapi.models.connection_summary import ConnectionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionSummary from a JSON string
connection_summary_instance = ConnectionSummary.from_json(json)
# print the JSON string representation of the object
print(ConnectionSummary.to_json())

# convert the object into a dict
connection_summary_dict = connection_summary_instance.to_dict()
# create an instance of ConnectionSummary from a dict
connection_summary_from_dict = ConnectionSummary.from_dict(connection_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


