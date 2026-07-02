# TextPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable per-message part id (uuid) | 
**seq** | **int** | 0-based order within the message | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | [optional] 
**kind** | **str** |  | [optional] [default to 'text']
**text** | **str** |  | 
**citations** | [**List[Citation]**](Citation.md) |  | [optional] 

## Example

```python
from ksapi.models.text_part import TextPart

# TODO update the JSON string below
json = "{}"
# create an instance of TextPart from a JSON string
text_part_instance = TextPart.from_json(json)
# print the JSON string representation of the object
print(TextPart.to_json())

# convert the object into a dict
text_part_dict = text_part_instance.to_dict()
# create an instance of TextPart from a dict
text_part_from_dict = TextPart.from_dict(text_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


