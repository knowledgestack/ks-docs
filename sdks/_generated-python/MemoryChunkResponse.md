# MemoryChunkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** |  | 
**kind** | [**MemoryKind**](MemoryKind.md) |  | 
**body** | **str** |  | 

## Example

```python
from ksapi.models.memory_chunk_response import MemoryChunkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MemoryChunkResponse from a JSON string
memory_chunk_response_instance = MemoryChunkResponse.from_json(json)
# print the JSON string representation of the object
print(MemoryChunkResponse.to_json())

# convert the object into a dict
memory_chunk_response_dict = memory_chunk_response_instance.to_dict()
# create an instance of MemoryChunkResponse from a dict
memory_chunk_response_from_dict = MemoryChunkResponse.from_dict(memory_chunk_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


