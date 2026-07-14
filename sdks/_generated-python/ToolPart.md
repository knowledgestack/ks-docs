# ToolPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable per-message part id (uuid) | 
**seq** | **int** | 0-based order within the message | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | [optional] 
**kind** | **str** |  | [optional] [default to 'tool']
**tool_call_id** | **str** |  | 
**tool_name** | **str** |  | 
**input** | [**Input**](Input.md) |  | [optional] 
**status** | [**ToolStatus**](ToolStatus.md) |  | [optional] 
**result** | **object** |  | [optional] 
**is_error** | **bool** |  | [optional] [default to False]
**duration_ms** | **int** |  | [optional] 
**extras** | **Dict[str, object]** |  | [optional] 
**display_type** | [**ToolDisplayType**](ToolDisplayType.md) |  | [optional] 

## Example

```python
from ksapi.models.tool_part import ToolPart

# TODO update the JSON string below
json = "{}"
# create an instance of ToolPart from a JSON string
tool_part_instance = ToolPart.from_json(json)
# print the JSON string representation of the object
print(ToolPart.to_json())

# convert the object into a dict
tool_part_dict = tool_part_instance.to_dict()
# create an instance of ToolPart from a dict
tool_part_from_dict = ToolPart.from_dict(tool_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


