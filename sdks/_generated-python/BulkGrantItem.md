# BulkGrantItem

One requested grant: permission flags on an object (PDO id) for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_read** | **bool** | Grant read access to the target subtree. | [optional] [default to False]
**can_write** | **bool** | Grant write access; requires can_read&#x3D;true. | [optional] [default to False]
**can_delete** | **bool** | Grant delete access; requires can_read&#x3D;true and can_write&#x3D;true. | [optional] [default to False]
**can_approve** | **bool** | Grant approval access; requires can_read&#x3D;true, independently of write and delete. | [optional] [default to False]
**can_grant_permissions** | **bool** | Manage subtree permissions; requires all four content flags. | [optional] [default to False]
**user_id** | **UUID** |  | 
**object_id** | **UUID** |  | 

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


