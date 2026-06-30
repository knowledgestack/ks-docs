# ModelTableResult

Per-item outcome of a bulk table import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_name** | **str** |  | 
**schema_name** | **str** |  | [optional] 
**status** | **str** |  | 
**table** | [**DataSourceTableResponse**](DataSourceTableResponse.md) |  | [optional] 
**error** | **str** |  | [optional] 

## Example

```python
from ksapi.models.model_table_result import ModelTableResult

# TODO update the JSON string below
json = "{}"
# create an instance of ModelTableResult from a JSON string
model_table_result_instance = ModelTableResult.from_json(json)
# print the JSON string representation of the object
print(ModelTableResult.to_json())

# convert the object into a dict
model_table_result_dict = model_table_result_instance.to_dict()
# create an instance of ModelTableResult from a dict
model_table_result_from_dict = ModelTableResult.from_dict(model_table_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


