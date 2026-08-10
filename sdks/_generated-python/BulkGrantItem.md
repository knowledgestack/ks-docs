# BulkGrantItem

One requested grant: a capability on an object (PDO id) for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **UUID** |  | 
**object_id** | **UUID** |  | 
**capability** | [**PermissionCapability**](PermissionCapability.md) |  | 
**can_approve** | **bool** |  | [optional] [default to False]

## Example

```python
from ksapi.models.bulk_grant_item import BulkGrantItem

# TODO update the JSON string below
json = "{}"
# create an instance of BulkGrantItem from a JSON string
bulk_grant_item_instance = BulkGrantItem.from_json(json)
# print the JSON string representation of the object
print(BulkGrantItem.to_json())

# convert the object into a dict
bulk_grant_item_dict = bulk_grant_item_instance.to_dict()
# create an instance of BulkGrantItem from a dict
bulk_grant_item_from_dict = BulkGrantItem.from_dict(bulk_grant_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


