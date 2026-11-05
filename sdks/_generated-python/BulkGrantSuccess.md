# BulkGrantSuccess

A grant that was created, keyed on its (user, object) pair plus new id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **UUID** |  | 
**object_id** | **UUID** |  | 
**permission_id** | **UUID** |  | 
**can_read** | **bool** |  | 
**can_write** | **bool** |  | 
**can_delete** | **bool** |  | 
**can_approve** | **bool** |  | 
**can_grant_permissions** | **bool** |  | 

## Example

```python
from ksapi.models.bulk_grant_success import BulkGrantSuccess

# TODO update the JSON string below
json = "{}"
# create an instance of BulkGrantSuccess from a JSON string
bulk_grant_success_instance = BulkGrantSuccess.from_json(json)
# print the JSON string representation of the object
print(BulkGrantSuccess.to_json())

# convert the object into a dict
bulk_grant_success_dict = bulk_grant_success_instance.to_dict()
# create an instance of BulkGrantSuccess from a dict
bulk_grant_success_from_dict = BulkGrantSuccess.from_dict(bulk_grant_success_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


