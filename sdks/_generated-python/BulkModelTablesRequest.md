# BulkModelTablesRequest

Import several tables (across one or more schemas) in one call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tables** | [**List[ModelTableRequest]**](ModelTableRequest.md) |  | 

## Example

```python
from ksapi.models.bulk_model_tables_request import BulkModelTablesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkModelTablesRequest from a JSON string
bulk_model_tables_request_instance = BulkModelTablesRequest.from_json(json)
# print the JSON string representation of the object
print(BulkModelTablesRequest.to_json())

# convert the object into a dict
bulk_model_tables_request_dict = bulk_model_tables_request_instance.to_dict()
# create an instance of BulkModelTablesRequest from a dict
bulk_model_tables_request_from_dict = BulkModelTablesRequest.from_dict(bulk_model_tables_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


