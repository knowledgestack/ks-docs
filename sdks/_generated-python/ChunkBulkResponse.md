# ChunkBulkResponse

Chunk response with ancestor path part IDs for Qdrant payload construction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Chunk ID | 
**path_part_id** | **UUID** | PathPart ID | 
**content_id** | **UUID** | ChunkContent ID | 
**content** | **str** | Chunk text content | 
**chunk_type** | [**ChunkType**](ChunkType.md) |  | 
**chunk_metadata** | [**ChunkMetadata**](ChunkMetadata.md) |  | 
**num_tokens** | **int** | Number of tokens in chunk content | [optional] 
**parent_path_id** | **UUID** | Parent PathPart ID | 
**prev_sibling_path_id** | **UUID** | Previous sibling PathPart ID | [optional] 
**next_sibling_path_id** | **UUID** | Next sibling PathPart ID | [optional] 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this chunk is system-managed | 
**tenant_id** | **UUID** | Tenant ID | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 
**asset_s3_urls** | **List[str]** | Presigned URLs to download the chunk&#39;s visual assets (6-hour validity) | [optional] 
**document** | [**ChunkDocumentResponse**](ChunkDocumentResponse.md) | Ancestor document info (populated when with_document&#x3D;true) | [optional] 
**document_version** | [**ChunkDocumentVersionResponse**](ChunkDocumentVersionResponse.md) | Ancestor document version info (populated when with_document&#x3D;true) | [optional] 
**path_part_id_segments** | **List[UUID]** | Ordered ancestor PathPart IDs from root to chunk | 

## Example

```python
from ksapi.models.chunk_bulk_response import ChunkBulkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkBulkResponse from a JSON string
chunk_bulk_response_instance = ChunkBulkResponse.from_json(json)
# print the JSON string representation of the object
print(ChunkBulkResponse.to_json())

# convert the object into a dict
chunk_bulk_response_dict = chunk_bulk_response_instance.to_dict()
# create an instance of ChunkBulkResponse from a dict
chunk_bulk_response_from_dict = ChunkBulkResponse.from_dict(chunk_bulk_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


