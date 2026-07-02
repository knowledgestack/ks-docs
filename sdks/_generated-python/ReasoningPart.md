# ReasoningPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable per-message part id (uuid) | 
**seq** | **int** | 0-based order within the message | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | [optional] 
**kind** | **str** |  | [optional] [default to 'reasoning']
**text** | **str** |  | 

## Example

```python
from ksapi.models.reasoning_part import ReasoningPart

# TODO update the JSON string below
json = "{}"
# create an instance of ReasoningPart from a JSON string
reasoning_part_instance = ReasoningPart.from_json(json)
# print the JSON string representation of the object
print(ReasoningPart.to_json())

# convert the object into a dict
reasoning_part_dict = reasoning_part_instance.to_dict()
# create an instance of ReasoningPart from a dict
reasoning_part_from_dict = ReasoningPart.from_dict(reasoning_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


