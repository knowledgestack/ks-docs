# CreateChunkRequest

Request to create a new chunk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_path_id** | **UUID** | Parent PathPart ID (must be DOCUMENT_VERSION or SECTION) | 
**content** | **str** | Chunk text content | 
**chunk_type** | [**ChunkType**](ChunkType.md) |  | 
**chunk_metadata** | [**ChunkMetadata**](ChunkMetadata.md) |  | 
**prev_sibling_path_id** | **UUID** | PathPart ID to insert after (null &#x3D; append to tail) | [optional] 

## Example

```python
from ksapi.models.create_chunk_request import CreateChunkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateChunkRequest from a JSON string
create_chunk_request_instance = CreateChunkRequest.from_json(json)
# print the JSON string representation of the object
print(CreateChunkRequest.to_json())

# convert the object into a dict
create_chunk_request_dict = create_chunk_request_instance.to_dict()
# create an instance of CreateChunkRequest from a dict
create_chunk_request_from_dict = CreateChunkRequest.from_dict(create_chunk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


