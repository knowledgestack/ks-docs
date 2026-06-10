# ProposeMemoryChunkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**MemoryScope**](MemoryScope.md) |  | 
**scope_owner_id** | **UUID** |  | 
**content** | **str** |  | 
**rationale** | **str** |  | 
**kind** | [**MemoryKind**](MemoryKind.md) |  | [optional] 
**run_id** | **UUID** |  | [optional] 

## Example

```python
from ksapi.models.propose_memory_chunk_request import ProposeMemoryChunkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProposeMemoryChunkRequest from a JSON string
propose_memory_chunk_request_instance = ProposeMemoryChunkRequest.from_json(json)
# print the JSON string representation of the object
print(ProposeMemoryChunkRequest.to_json())

# convert the object into a dict
propose_memory_chunk_request_dict = propose_memory_chunk_request_instance.to_dict()
# create an instance of ProposeMemoryChunkRequest from a dict
propose_memory_chunk_request_from_dict = ProposeMemoryChunkRequest.from_dict(propose_memory_chunk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


