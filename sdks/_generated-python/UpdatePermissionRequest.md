# UpdatePermissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path_part_id** | **UUID** |  | [optional] 
**capability** | [**PermissionCapability**](PermissionCapability.md) |  | [optional] 

## Example

```python
from ksapi.models.update_permission_request import UpdatePermissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePermissionRequest from a JSON string
update_permission_request_instance = UpdatePermissionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdatePermissionRequest.to_json())

# convert the object into a dict
update_permission_request_dict = update_permission_request_instance.to_dict()
# create an instance of UpdatePermissionRequest from a dict
update_permission_request_from_dict = UpdatePermissionRequest.from_dict(update_permission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


