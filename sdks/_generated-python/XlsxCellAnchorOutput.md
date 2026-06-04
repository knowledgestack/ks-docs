# XlsxCellAnchorOutput

One citation anchored to a cell in an .xlsx deliverable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] [default to 'xlsx_cell']
**sheet_name** | **str** |  | 
**cell_address** | **str** | Coordinate like &#39;B23&#39;. | 
**citations** | [**List[CitedChunk]**](CitedChunk.md) | Cited chunks in the order they appeared in the comment body, each with the source-document snapshot resolved at save time. | 
**anchor_text** | **str** | Cached cell value at this anchor, for FE display. NOT the cited quote. Empty when the cell holds a formula whose cache has not been refreshed. | [optional] [default to '']
**chunk_ids** | **List[UUID]** | Flat projection of cited chunk_ids — kept for FE back-compat.  Prefer &#x60;&#x60;citations&#x60;&#x60; for new code: each entry already carries the source-document context the Citations panel needs, no follow-up &#x60;&#x60;/v1/chunks/bulk&#x60;&#x60; call required. Derived-only — &#x60;&#x60;citations&#x60;&#x60; is the single source of truth. | [readonly] 

## Example

```python
from ksapi.models.xlsx_cell_anchor_output import XlsxCellAnchorOutput

# TODO update the JSON string below
json = "{}"
# create an instance of XlsxCellAnchorOutput from a JSON string
xlsx_cell_anchor_output_instance = XlsxCellAnchorOutput.from_json(json)
# print the JSON string representation of the object
print(XlsxCellAnchorOutput.to_json())

# convert the object into a dict
xlsx_cell_anchor_output_dict = xlsx_cell_anchor_output_instance.to_dict()
# create an instance of XlsxCellAnchorOutput from a dict
xlsx_cell_anchor_output_from_dict = XlsxCellAnchorOutput.from_dict(xlsx_cell_anchor_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


