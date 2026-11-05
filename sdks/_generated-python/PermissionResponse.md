# PermissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**tenant_id** | **UUID** |  | 
**user_id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 
**can_read** | **bool** |  | 
**can_write** | **bool** |  | 
**can_delete** | **bool** |  | 
**can_approve** | **bool** |  | 
**can_grant_permissions** | **bool** |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.permission_response import PermissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionResponse from a JSON string
permission_response_instance = PermissionResponse.from_json(json)
# print the JSON string representation of the object
print(PermissionResponse.to_json())

# convert the object into a dict
permission_response_dict = permission_response_instance.to_dict()
# create an instance of PermissionResponse from a dict
permission_response_from_dict = PermissionResponse.from_dict(permission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


