# CreateGroupPermissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** |  | 
**capability** | [**PermissionCapability**](PermissionCapability.md) |  | 

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


