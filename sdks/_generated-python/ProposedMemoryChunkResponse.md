# ProposedMemoryChunkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** |  | 
**scope** | [**MemoryScope**](MemoryScope.md) |  | 
**owner_path_part_id** | **UUID** |  | 
**kind** | [**MemoryKind**](MemoryKind.md) |  | 
**rationale** | **str** |  | 
**body** | **str** |  | 
**proposer_tenant_user_id** | **UUID** |  | 
**run_id** | **UUID** |  | 

## Example

```python
from ksapi.models.proposed_memory_chunk_response import ProposedMemoryChunkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProposedMemoryChunkResponse from a JSON string
proposed_memory_chunk_response_instance = ProposedMemoryChunkResponse.from_json(json)
# print the JSON string representation of the object
print(ProposedMemoryChunkResponse.to_json())

# convert the object into a dict
proposed_memory_chunk_response_dict = proposed_memory_chunk_response_instance.to_dict()
# create an instance of ProposedMemoryChunkResponse from a dict
proposed_memory_chunk_response_from_dict = ProposedMemoryChunkResponse.from_dict(proposed_memory_chunk_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


