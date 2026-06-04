# SubtreeChunksResponse

Response for subtree resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**List[SubtreeChunkGroup]**](SubtreeChunkGroup.md) |  | 

## Example

```python
from ksapi.models.subtree_chunks_response import SubtreeChunksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubtreeChunksResponse from a JSON string
subtree_chunks_response_instance = SubtreeChunksResponse.from_json(json)
# print the JSON string representation of the object
print(SubtreeChunksResponse.to_json())

# convert the object into a dict
subtree_chunks_response_dict = subtree_chunks_response_instance.to_dict()
# create an instance of SubtreeChunksResponse from a dict
subtree_chunks_response_from_dict = SubtreeChunksResponse.from_dict(subtree_chunks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


