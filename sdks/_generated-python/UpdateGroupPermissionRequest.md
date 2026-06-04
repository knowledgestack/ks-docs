# UpdateGroupPermissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** |  | [optional] 
**capability** | [**PermissionCapability**](PermissionCapability.md) |  | [optional] 

## Example

```python
from ksapi.models.update_group_permission_request import UpdateGroupPermissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateGroupPermissionRequest from a JSON string
update_group_permission_request_instance = UpdateGroupPermissionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateGroupPermissionRequest.to_json())

# convert the object into a dict
update_group_permission_request_dict = update_group_permission_request_instance.to_dict()
# create an instance of UpdateGroupPermissionRequest from a dict
update_group_permission_request_from_dict = UpdateGroupPermissionRequest.from_dict(update_group_permission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


