# TextPartOrReasoningPartOrToolPartOrDocEditPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable per-message part id (uuid) | 
**seq** | **int** | 0-based order within the message | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | [optional] 
**kind** | **str** |  | [optional] [default to 'doc_edit']
**text** | **str** |  | 
**citations** | [**List[Citation]**](Citation.md) |  | [optional] 
**tool_call_id** | **str** |  | 
**tool_name** | **str** |  | 
**input** | [**Input**](Input.md) |  | [optional] 
**status** | [**ToolStatus**](ToolStatus.md) |  | [optional] 
**result** | **object** |  | [optional] 
**is_error** | **bool** |  | [optional] [default to False]
**duration_ms** | **int** |  | [optional] 
**extras** | **Dict[str, object]** |  | [optional] 
**document_id** | **UUID** |  | 
**base_version_id** | **UUID** |  | [optional] 
**new_version_id** | **UUID** |  | 
**doc_format** | **str** |  | 
**approval_id** | **UUID** |  | [optional] 

## Example

```python
from ksapi.models.text_part_or_reasoning_part_or_tool_part_or_doc_edit_part import TextPartOrReasoningPartOrToolPartOrDocEditPart

# TODO update the JSON string below
json = "{}"
# create an instance of TextPartOrReasoningPartOrToolPartOrDocEditPart from a JSON string
text_part_or_reasoning_part_or_tool_part_or_doc_edit_part_instance = TextPartOrReasoningPartOrToolPartOrDocEditPart.from_json(json)
# print the JSON string representation of the object
print(TextPartOrReasoningPartOrToolPartOrDocEditPart.to_json())

# convert the object into a dict
text_part_or_reasoning_part_or_tool_part_or_doc_edit_part_dict = text_part_or_reasoning_part_or_tool_part_or_doc_edit_part_instance.to_dict()
# create an instance of TextPartOrReasoningPartOrToolPartOrDocEditPart from a dict
text_part_or_reasoning_part_or_tool_part_or_doc_edit_part_from_dict = TextPartOrReasoningPartOrToolPartOrDocEditPart.from_dict(text_part_or_reasoning_part_or_tool_part_or_doc_edit_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


