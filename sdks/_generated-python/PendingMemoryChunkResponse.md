# PendingMemoryChunkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** |  | 
**kind** | [**MemoryKind**](MemoryKind.md) |  | 
**scope** | [**MemoryScope**](MemoryScope.md) |  | 
**owner_path_part_id** | **UUID** |  | 
**proposer_tenant_user_id** | **UUID** |  | 
**run_id** | **UUID** |  | 
**rationale** | **str** |  | 
**body** | **str** |  | 

## Example

```python
from ksapi.models.pending_memory_chunk_response import PendingMemoryChunkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PendingMemoryChunkResponse from a JSON string
pending_memory_chunk_response_instance = PendingMemoryChunkResponse.from_json(json)
# print the JSON string representation of the object
print(PendingMemoryChunkResponse.to_json())

# convert the object into a dict
pending_memory_chunk_response_dict = pending_memory_chunk_response_instance.to_dict()
# create an instance of PendingMemoryChunkResponse from a dict
pending_memory_chunk_response_from_dict = PendingMemoryChunkResponse.from_dict(pending_memory_chunk_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


