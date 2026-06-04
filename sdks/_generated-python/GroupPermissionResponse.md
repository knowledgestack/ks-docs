# GroupPermissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**tenant_id** | **UUID** |  | 
**group_id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 
**capability** | [**PermissionCapability**](PermissionCapability.md) |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.group_permission_response import GroupPermissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupPermissionResponse from a JSON string
group_permission_response_instance = GroupPermissionResponse.from_json(json)
# print the JSON string representation of the object
print(GroupPermissionResponse.to_json())

# convert the object into a dict
group_permission_response_dict = group_permission_response_instance.to_dict()
# create an instance of GroupPermissionResponse from a dict
group_permission_response_from_dict = GroupPermissionResponse.from_dict(group_permission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


