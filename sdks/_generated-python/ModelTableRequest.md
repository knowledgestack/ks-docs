# ModelTableRequest

Model a DB table as a queryable child of the connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_name** | **str** |  | 
**name** | **str** | Display name; defaults to table_name | [optional] 
**description** | **str** |  | [optional] 
**column_config** | [**List[ColumnConfig]**](ColumnConfig.md) | Omit to auto-introspect all columns as exposed | [optional] 

## Example

```python
from ksapi.models.model_table_request import ModelTableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModelTableRequest from a JSON string
model_table_request_instance = ModelTableRequest.from_json(json)
# print the JSON string representation of the object
print(ModelTableRequest.to_json())

# convert the object into a dict
model_table_request_dict = model_table_request_instance.to_dict()
# create an instance of ModelTableRequest from a dict
model_table_request_from_dict = ModelTableRequest.from_dict(model_table_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


