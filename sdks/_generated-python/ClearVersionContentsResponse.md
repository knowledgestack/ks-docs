# ClearVersionContentsResponse

Response model for the clear version contents endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted** | **int** | Number of top-level children deleted | 

## Example

```python
from ksapi.models.clear_version_contents_response import ClearVersionContentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClearVersionContentsResponse from a JSON string
clear_version_contents_response_instance = ClearVersionContentsResponse.from_json(json)
# print the JSON string representation of the object
print(ClearVersionContentsResponse.to_json())

# convert the object into a dict
clear_version_contents_response_dict = clear_version_contents_response_instance.to_dict()
# create an instance of ClearVersionContentsResponse from a dict
clear_version_contents_response_from_dict = ClearVersionContentsResponse.from_dict(clear_version_contents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


