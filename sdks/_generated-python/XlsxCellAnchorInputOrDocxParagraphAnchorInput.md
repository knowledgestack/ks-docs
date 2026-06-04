# XlsxCellAnchorInputOrDocxParagraphAnchorInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] [default to 'xlsx_cell']
**sheet_name** | **str** |  | 
**cell_address** | **str** | Coordinate like &#39;B23&#39;. | 
**citations** | [**List[CitedChunk]**](CitedChunk.md) | Cited chunks in the order they appeared in the comment body, each with the source-document snapshot resolved at save time. | 
**anchor_text** | **str** | Paragraph text at this anchor (first 160 chars), for FE display. NOT the cited quote. | [optional] [default to '']
**paragraph_index** | **int** | 0-based position of the &lt;w:p&gt; in word/document.xml body. | 
**comment_id** | **int** | w:id of the comment in word/comments.xml. | 

## Example

```python
from ksapi.models.xlsx_cell_anchor_input_or_docx_paragraph_anchor_input import XlsxCellAnchorInputOrDocxParagraphAnchorInput

# TODO update the JSON string below
json = "{}"
# create an instance of XlsxCellAnchorInputOrDocxParagraphAnchorInput from a JSON string
xlsx_cell_anchor_input_or_docx_paragraph_anchor_input_instance = XlsxCellAnchorInputOrDocxParagraphAnchorInput.from_json(json)
# print the JSON string representation of the object
print(XlsxCellAnchorInputOrDocxParagraphAnchorInput.to_json())

# convert the object into a dict
xlsx_cell_anchor_input_or_docx_paragraph_anchor_input_dict = xlsx_cell_anchor_input_or_docx_paragraph_anchor_input_instance.to_dict()
# create an instance of XlsxCellAnchorInputOrDocxParagraphAnchorInput from a dict
xlsx_cell_anchor_input_or_docx_paragraph_anchor_input_from_dict = XlsxCellAnchorInputOrDocxParagraphAnchorInput.from_dict(xlsx_cell_anchor_input_or_docx_paragraph_anchor_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


