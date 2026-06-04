# FolderActionResponse

Response for folder action endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_id** | **UUID** |  | 
**action** | [**FolderAction**](FolderAction.md) |  | 
**workflow_id** | **str** |  | 

## Example

```python
from ksapi.models.folder_action_response import FolderActionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FolderActionResponse from a JSON string
folder_action_response_instance = FolderActionResponse.from_json(json)
# print the JSON string representation of the object
print(FolderActionResponse.to_json())

# convert the object into a dict
folder_action_response_dict = folder_action_response_instance.to_dict()
# create an instance of FolderActionResponse from a dict
folder_action_response_from_dict = FolderActionResponse.from_dict(folder_action_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


