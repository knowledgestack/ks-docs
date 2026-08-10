# BulkOperationResponse

Per-item outcome of a bulk operation keyed on a single PDO id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**succeeded** | **List[UUID]** |  | [optional] 
**failed** | [**List[BulkItemFailure]**](BulkItemFailure.md) |  | [optional] 

## Example

```python
from ksapi.models.bulk_operation_response import BulkOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkOperationResponse from a JSON string
bulk_operation_response_instance = BulkOperationResponse.from_json(json)
# print the JSON string representation of the object
print(BulkOperationResponse.to_json())

# convert the object into a dict
bulk_operation_response_dict = bulk_operation_response_instance.to_dict()
# create an instance of BulkOperationResponse from a dict
bulk_operation_response_from_dict = BulkOperationResponse.from_dict(bulk_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


