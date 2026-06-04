# VersionChunkIdsResponse

Response containing chunk IDs for a document version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_ids** | **List[UUID]** |  | 

## Example

```python
from ksapi.models.version_chunk_ids_response import VersionChunkIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VersionChunkIdsResponse from a JSON string
version_chunk_ids_response_instance = VersionChunkIdsResponse.from_json(json)
# print the JSON string representation of the object
print(VersionChunkIdsResponse.to_json())

# convert the object into a dict
version_chunk_ids_response_dict = version_chunk_ids_response_instance.to_dict()
# create an instance of VersionChunkIdsResponse from a dict
version_chunk_ids_response_from_dict = VersionChunkIdsResponse.from_dict(version_chunk_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


