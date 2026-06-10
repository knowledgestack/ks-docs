# MemoryBodyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | [**MemoryScope**](MemoryScope.md) |  | 
**owner_id** | **UUID** |  | 
**body** | **str** |  | 

## Example

```python
from ksapi.models.memory_body_response import MemoryBodyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MemoryBodyResponse from a JSON string
memory_body_response_instance = MemoryBodyResponse.from_json(json)
# print the JSON string representation of the object
print(MemoryBodyResponse.to_json())

# convert the object into a dict
memory_body_response_dict = memory_body_response_instance.to_dict()
# create an instance of MemoryBodyResponse from a dict
memory_body_response_from_dict = MemoryBodyResponse.from_dict(memory_body_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


