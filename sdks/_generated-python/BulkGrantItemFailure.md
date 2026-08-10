# BulkGrantItemFailure

A grant that could not be created, keyed on its (user, object) pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **UUID** |  | 
**object_id** | **UUID** |  | 
**reason** | [**BulkFailureReason**](BulkFailureReason.md) |  | 

## Example

```python
from ksapi.models.bulk_grant_item_failure import BulkGrantItemFailure

# TODO update the JSON string below
json = "{}"
# create an instance of BulkGrantItemFailure from a JSON string
bulk_grant_item_failure_instance = BulkGrantItemFailure.from_json(json)
# print the JSON string representation of the object
print(BulkGrantItemFailure.to_json())

# convert the object into a dict
bulk_grant_item_failure_dict = bulk_grant_item_failure_instance.to_dict()
# create an instance of BulkGrantItemFailure from a dict
bulk_grant_item_failure_from_dict = BulkGrantItemFailure.from_dict(bulk_grant_item_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


