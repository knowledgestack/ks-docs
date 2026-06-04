# UpdateFolderRequest

Request to update a folder (rename, move, and/or change qdrant exclusion).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | New folder name | [optional] 
**parent_path_part_id** | **UUID** | New parent PathPart ID for move (must be a FOLDER type) | [optional] 
**exclude_from_qdrant** | **bool** | If set, toggle whether this folder (and its descendants) are excluded from Qdrant vector indexing. True deletes existing points for the subtree; False re-embeds them. Not allowed on system-managed folders. | [optional] 

## Example

```python
from ksapi.models.update_folder_request import UpdateFolderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFolderRequest from a JSON string
update_folder_request_instance = UpdateFolderRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateFolderRequest.to_json())

# convert the object into a dict
update_folder_request_dict = update_folder_request_instance.to_dict()
# create an instance of UpdateFolderRequest from a dict
update_folder_request_from_dict = UpdateFolderRequest.from_dict(update_folder_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


