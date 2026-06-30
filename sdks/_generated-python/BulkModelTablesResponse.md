# BulkModelTablesResponse

Per-item results of a bulk import; one entry per requested table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[ModelTableResult]**](ModelTableResult.md) |  | 

## Example

```python
from ksapi.models.bulk_model_tables_response import BulkModelTablesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkModelTablesResponse from a JSON string
bulk_model_tables_response_instance = BulkModelTablesResponse.from_json(json)
# print the JSON string representation of the object
print(BulkModelTablesResponse.to_json())

# convert the object into a dict
bulk_model_tables_response_dict = bulk_model_tables_response_instance.to_dict()
# create an instance of BulkModelTablesResponse from a dict
bulk_model_tables_response_from_dict = BulkModelTablesResponse.from_dict(bulk_model_tables_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


