# UpdatePermissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_read** | **bool** | Set read access; omitted or null leaves the stored flag unchanged. | [optional] 
**can_write** | **bool** | Set write access; requires read in the resulting grant. Omitted or null leaves the stored flag unchanged. | [optional] 
**can_delete** | **bool** | Set delete access; requires read and write in the resulting grant. Omitted or null leaves the stored flag unchanged. | [optional] 
**can_approve** | **bool** | Set approval access; requires read in the resulting grant. Omitted or null leaves the stored flag unchanged. | [optional] 
**can_grant_permissions** | **bool** | Set subtree permission management; requires all four flags. Omitted or null retains the stored value. | [optional] 
**path_part_id** | **UUID** |  | [optional] 

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


