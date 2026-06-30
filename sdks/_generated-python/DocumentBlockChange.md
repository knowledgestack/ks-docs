# DocumentBlockChange

One changed block in a Word document, ordered by position.  ``from_paragraph_index``/``to_paragraph_index`` are the 0-based position of the ``<w:p>`` in ``word/document.xml`` body (the same index citation anchors use, so the frontend aligns changes to its docx render). ``anchor_text`` is a text-match fallback for that alignment. ``old``/``new`` are null on the absent side; ``*_spans`` mark changed word ranges (CJK-aware).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**BlockChangeType**](BlockChangeType.md) |  | 
**kind** | [**BlockKind**](BlockKind.md) |  | 
**change_class** | [**ChangeClass**](ChangeClass.md) |  | 
**from_paragraph_index** | **int** |  | 
**to_paragraph_index** | **int** |  | 
**old_text** | **str** |  | [optional] 
**new_text** | **str** |  | [optional] 
**old_spans** | [**List[DiffSpan]**](DiffSpan.md) |  | [optional] 
**new_spans** | [**List[DiffSpan]**](DiffSpan.md) |  | [optional] 
**formatting_changed** | **bool** |  | [optional] [default to False]
**numeric_delta** | **str** |  | [optional] 
**numeric_pct** | **str** |  | [optional] 
**anchor_text** | **str** |  | [optional] 
**surface** | **str** |  | [optional] [default to 'body']
**cell_changes** | [**List[TableCellChange]**](TableCellChange.md) |  | [optional] 
**revisions** | [**List[RevisionEdit]**](RevisionEdit.md) |  | [optional] 
**old_image_ref** | **str** |  | [optional] 
**new_image_ref** | **str** |  | [optional] 
**image_regions** | [**List[PixelRegion]**](PixelRegion.md) |  | [optional] 
**image_note** | **str** |  | [optional] 

## Example

```python
from ksapi.models.document_block_change import DocumentBlockChange

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentBlockChange from a JSON string
document_block_change_instance = DocumentBlockChange.from_json(json)
# print the JSON string representation of the object
print(DocumentBlockChange.to_json())

# convert the object into a dict
document_block_change_dict = document_block_change_instance.to_dict()
# create an instance of DocumentBlockChange from a dict
document_block_change_from_dict = DocumentBlockChange.from_dict(document_block_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


