# BulkItemFailure

A single id that could not be applied, and why.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**reason** | [**BulkFailureReason**](BulkFailureReason.md) |  | 

## Example

```python
from ksapi.models.bulk_item_failure import BulkItemFailure

# TODO update the JSON string below
json = "{}"
# create an instance of BulkItemFailure from a JSON string
bulk_item_failure_instance = BulkItemFailure.from_json(json)
# print the JSON string representation of the object
print(BulkItemFailure.to_json())

# convert the object into a dict
bulk_item_failure_dict = bulk_item_failure_instance.to_dict()
# create an instance of BulkItemFailure from a dict
bulk_item_failure_from_dict = BulkItemFailure.from_dict(bulk_item_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


