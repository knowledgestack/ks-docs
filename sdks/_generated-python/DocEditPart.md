# DocEditPart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable per-message part id (uuid) | 
**seq** | **int** | 0-based order within the message | 
**start_time** | **datetime** |  | 
**end_time** | **datetime** |  | [optional] 
**kind** | **str** |  | [optional] [default to 'doc_edit']
**tool_call_id** | **str** |  | [optional] 
**document_id** | **UUID** |  | 
**base_version_id** | **UUID** |  | [optional] 
**new_version_id** | **UUID** |  | 
**doc_format** | **str** |  | 
**approval_id** | **UUID** |  | [optional] 

## Example

```python
from ksapi.models.doc_edit_part import DocEditPart

# TODO update the JSON string below
json = "{}"
# create an instance of DocEditPart from a JSON string
doc_edit_part_instance = DocEditPart.from_json(json)
# print the JSON string representation of the object
print(DocEditPart.to_json())

# convert the object into a dict
doc_edit_part_dict = doc_edit_part_instance.to_dict()
# create an instance of DocEditPart from a dict
doc_edit_part_from_dict = DocEditPart.from_dict(doc_edit_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


