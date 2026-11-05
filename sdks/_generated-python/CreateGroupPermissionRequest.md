# CreateGroupPermissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_read** | **bool** | Grant read access to the target subtree. | [optional] [default to False]
**can_write** | **bool** | Grant write access; requires can_read&#x3D;true. | [optional] [default to False]
**can_delete** | **bool** | Grant delete access; requires can_read&#x3D;true and can_write&#x3D;true. | [optional] [default to False]
**can_approve** | **bool** | Grant approval access; requires can_read&#x3D;true, independently of write and delete. | [optional] [default to False]
**can_grant_permissions** | **bool** | Manage subtree permissions; requires all four content flags. | [optional] [default to False]
**path_part_id** | **UUID** |  | 

## Example

```python
from ksapi.models.create_group_permission_request import CreateGroupPermissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateGroupPermissionRequest from a JSON string
create_group_permission_request_instance = CreateGroupPermissionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateGroupPermissionRequest.to_json())

# convert the object into a dict
create_group_permission_request_dict = create_group_permission_request_instance.to_dict()
# create an instance of CreateGroupPermissionRequest from a dict
create_group_permission_request_from_dict = CreateGroupPermissionRequest.from_dict(create_group_permission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


