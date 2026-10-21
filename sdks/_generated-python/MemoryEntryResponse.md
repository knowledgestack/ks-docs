# MemoryEntryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunk_id** | **UUID** |  | 
**kind** | [**MemoryKind**](MemoryKind.md) |  | 
**body** | **str** |  | 

## Example

```python
from ksapi.models.memory_entry_response import MemoryEntryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MemoryEntryResponse from a JSON string
memory_entry_response_instance = MemoryEntryResponse.from_json(json)
# print the JSON string representation of the object
print(MemoryEntryResponse.to_json())

# convert the object into a dict
memory_entry_response_dict = memory_entry_response_instance.to_dict()
# create an instance of MemoryEntryResponse from a dict
memory_entry_response_from_dict = MemoryEntryResponse.from_dict(memory_entry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


