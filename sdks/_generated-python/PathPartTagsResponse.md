# PathPartTagsResponse

Response containing the current tags for a path part.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[TagResponse]**](TagResponse.md) | Tags attached to the path part | 

## Example

```python
from ksapi.models.path_part_tags_response import PathPartTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PathPartTagsResponse from a JSON string
path_part_tags_response_instance = PathPartTagsResponse.from_json(json)
# print the JSON string representation of the object
print(PathPartTagsResponse.to_json())

# convert the object into a dict
path_part_tags_response_dict = path_part_tags_response_instance.to_dict()
# create an instance of PathPartTagsResponse from a dict
path_part_tags_response_from_dict = PathPartTagsResponse.from_dict(path_part_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


