# AppendMemoryChunkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **str** |  | 
**kind** | [**MemoryKind**](MemoryKind.md) |  | [optional] 

## Example

```python
from ksapi.models.append_memory_chunk_request import AppendMemoryChunkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppendMemoryChunkRequest from a JSON string
append_memory_chunk_request_instance = AppendMemoryChunkRequest.from_json(json)
# print the JSON string representation of the object
print(AppendMemoryChunkRequest.to_json())

# convert the object into a dict
append_memory_chunk_request_dict = append_memory_chunk_request_instance.to_dict()
# create an instance of AppendMemoryChunkRequest from a dict
append_memory_chunk_request_from_dict = AppendMemoryChunkRequest.from_dict(append_memory_chunk_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


