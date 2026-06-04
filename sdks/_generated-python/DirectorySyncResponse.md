# DirectorySyncResponse

Response model for directory sync results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**users_created** | **int** |  | [optional] [default to 0]
**users_updated** | **int** |  | [optional] [default to 0]
**users_activated** | **int** |  | [optional] [default to 0]
**users_deactivated** | **int** |  | [optional] [default to 0]
**users_skipped** | **int** |  | [optional] [default to 0]
**warnings** | **List[str]** |  | [optional] 
**errors** | **List[str]** |  | [optional] 

## Example

```python
from ksapi.models.directory_sync_response import DirectorySyncResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DirectorySyncResponse from a JSON string
directory_sync_response_instance = DirectorySyncResponse.from_json(json)
# print the JSON string representation of the object
print(DirectorySyncResponse.to_json())

# convert the object into a dict
directory_sync_response_dict = directory_sync_response_instance.to_dict()
# create an instance of DirectorySyncResponse from a dict
directory_sync_response_from_dict = DirectorySyncResponse.from_dict(directory_sync_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


