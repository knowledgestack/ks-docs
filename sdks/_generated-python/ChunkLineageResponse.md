# ChunkLineageResponse

Single chunk lineage edge response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_chunk_id** | **UUID** | Parent chunk ID | 
**chunk_id** | **UUID** | Child chunk ID | 
**tenant_id** | **UUID** | Tenant ID | 
**created_at** | **datetime** | Creation timestamp | 

## Example

```python
from ksapi.models.chunk_lineage_response import ChunkLineageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChunkLineageResponse from a JSON string
chunk_lineage_response_instance = ChunkLineageResponse.from_json(json)
# print the JSON string representation of the object
print(ChunkLineageResponse.to_json())

# convert the object into a dict
chunk_lineage_response_dict = chunk_lineage_response_instance.to_dict()
# create an instance of ChunkLineageResponse from a dict
chunk_lineage_response_from_dict = ChunkLineageResponse.from_dict(chunk_lineage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


