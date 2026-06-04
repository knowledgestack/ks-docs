# CreateChunkLineageRequest

Request to batch-create lineage edges for a child chunk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** | Child chunk ID | 
**parent_chunk_ids** | **List[UUID]** | List of parent chunk IDs | 

## Example

```python
from ksapi.models.create_chunk_lineage_request import CreateChunkLineageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateChunkLineageRequest from a JSON string
create_chunk_lineage_request_instance = CreateChunkLineageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateChunkLineageRequest.to_json())

# convert the object into a dict
create_chunk_lineage_request_dict = create_chunk_lineage_request_instance.to_dict()
# create an instance of CreateChunkLineageRequest from a dict
create_chunk_lineage_request_from_dict = CreateChunkLineageRequest.from_dict(create_chunk_lineage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


