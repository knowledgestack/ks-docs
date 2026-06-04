# LineageNodeResponse

A node in the lineage graph (enriched chunk).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Chunk ID | 
**content** | **str** | Chunk text content | 
**chunk_type** | [**ChunkType**](ChunkType.md) |  | 
**chunk_metadata** | [**ChunkMetadata**](ChunkMetadata.md) |  | 
**tenant_id** | **UUID** | Tenant ID | 
**created_at** | **datetime** | Creation timestamp | 
**updated_at** | **datetime** | Last update timestamp | 

## Example

```python
from ksapi.models.lineage_node_response import LineageNodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LineageNodeResponse from a JSON string
lineage_node_response_instance = LineageNodeResponse.from_json(json)
# print the JSON string representation of the object
print(LineageNodeResponse.to_json())

# convert the object into a dict
lineage_node_response_dict = lineage_node_response_instance.to_dict()
# create an instance of LineageNodeResponse from a dict
lineage_node_response_from_dict = LineageNodeResponse.from_dict(lineage_node_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


