# ChunkContentItem

Response model for a chunk item in document version contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | 
**path_part_id** | **UUID** | PathPart ID | 
**name** | **str** | PathPart name | 
**parent_path_id** | **UUID** | Parent PathPart ID | 
**metadata_obj_id** | **UUID** | Chunk ID | 
**depth** | **int** | Depth relative to document version root | 
**content** | **str** | Chunk content | [optional] 
**chunk_type** | [**ChunkType**](ChunkType.md) |  | [optional] 
**chunk_metadata** | [**ChunkMetadata**](ChunkMetadata.md) | Chunk metadata | [optional] 
**materialized_path** | **str** | Full materialized path from root | 
**system_managed** | **bool** | Whether this item is system-managed | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.chunk_content_item import ChunkContentItem

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkContentItem from a JSON string
chunk_content_item_instance = ChunkContentItem.from_json(json)
# print the JSON string representation of the object
print(ChunkContentItem.to_json())

# convert the object into a dict
chunk_content_item_dict = chunk_content_item_instance.to_dict()
# create an instance of ChunkContentItem from a dict
chunk_content_item_from_dict = ChunkContentItem.from_dict(chunk_content_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


