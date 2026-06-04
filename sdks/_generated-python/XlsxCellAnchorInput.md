# XlsxCellAnchorInput

One citation anchored to a cell in an .xlsx deliverable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] [default to 'xlsx_cell']
**sheet_name** | **str** |  | 
**cell_address** | **str** | Coordinate like &#39;B23&#39;. | 
**citations** | [**List[CitedChunk]**](CitedChunk.md) | Cited chunks in the order they appeared in the comment body, each with the source-document snapshot resolved at save time. | 
**anchor_text** | **str** | Cached cell value at this anchor, for FE display. NOT the cited quote. Empty when the cell holds a formula whose cache has not been refreshed. | [optional] [default to '']

## Example

```python
from ksapi.models.xlsx_cell_anchor_input import XlsxCellAnchorInput

# TODO update the JSON string below
json = "{}"
# create an instance of XlsxCellAnchorInput from a JSON string
xlsx_cell_anchor_input_instance = XlsxCellAnchorInput.from_json(json)
# print the JSON string representation of the object
print(XlsxCellAnchorInput.to_json())

# convert the object into a dict
xlsx_cell_anchor_input_dict = xlsx_cell_anchor_input_instance.to_dict()
# create an instance of XlsxCellAnchorInput from a dict
xlsx_cell_anchor_input_from_dict = XlsxCellAnchorInput.from_dict(xlsx_cell_anchor_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


