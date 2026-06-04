# UpdateChunkMetadataRequest

Request to update chunk metadata and/or move the chunk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_metadata** | [**ChunkMetadata**](ChunkMetadata.md) | Metadata to merge into existing chunk_metadata (optional) | [optional] 
**parent_path_part_id** | **UUID** | Reparent to this PathPart ID (must be DOCUMENT_VERSION or SECTION in the same document version) | [optional] 
**prev_sibling_path_id** | **UUID** | Move after this sibling PathPart ID (within new or current parent) | [optional] 
**move_to_head** | **bool** | Set to true to move to head of sibling list | [optional] [default to False]

## Example

```python
from ksapi.models.update_chunk_metadata_request import UpdateChunkMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChunkMetadataRequest from a JSON string
update_chunk_metadata_request_instance = UpdateChunkMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChunkMetadataRequest.to_json())

# convert the object into a dict
update_chunk_metadata_request_dict = update_chunk_metadata_request_instance.to_dict()
# create an instance of UpdateChunkMetadataRequest from a dict
update_chunk_metadata_request_from_dict = UpdateChunkMetadataRequest.from_dict(update_chunk_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


