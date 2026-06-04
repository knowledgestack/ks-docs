# FolderResponse

Folder response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | 
**id** | **UUID** | Folder ID | 
**path_part_id** | **UUID** | PathPart ID | 
**name** | **str** | Folder name | 
**parent_path_part_id** | **UUID** | Parent PathPart ID | 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this folder is system-managed | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**exclude_from_qdrant** | **bool** | Direct exclusion flag on this folder&#39;s path part only. The effective exclusion also applies when any ancestor folder has the flag set — fetch the ancestry to determine effective state. | 
**tenant_id** | **UUID** | Tenant ID | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 
**tags** | [**List[TagResponse]**](TagResponse.md) | Tags attached to this folder | [optional] 
**can_write** | **bool** | Whether the current caller has write access to this folder. Only populated by endpoints that compute it (e.g. folder contents). | [optional] 

## Example

```python
from ksapi.models.folder_response import FolderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FolderResponse from a JSON string
folder_response_instance = FolderResponse.from_json(json)
# print the JSON string representation of the object
print(FolderResponse.to_json())

# convert the object into a dict
folder_response_dict = folder_response_instance.to_dict()
# create an instance of FolderResponse from a dict
folder_response_from_dict = FolderResponse.from_dict(folder_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


