# DocxParagraphAnchorInput

One citation anchored to a paragraph in a .docx deliverable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] [default to 'docx_paragraph']
**paragraph_index** | **int** | 0-based position of the &lt;w:p&gt; in word/document.xml body. | 
**comment_id** | **int** | w:id of the comment in word/comments.xml. | 
**citations** | [**List[CitedChunk]**](CitedChunk.md) | Cited chunks in the order they appeared in the comment body, each with the source-document snapshot resolved at save time. | 
**anchor_text** | **str** | Paragraph text at this anchor (first 160 chars), for FE display. NOT the cited quote. | [optional] [default to '']

## Example

```python
from ksapi.models.docx_paragraph_anchor_input import DocxParagraphAnchorInput

# TODO update the JSON string below
json = "{}"
# create an instance of DocxParagraphAnchorInput from a JSON string
docx_paragraph_anchor_input_instance = DocxParagraphAnchorInput.from_json(json)
# print the JSON string representation of the object
print(DocxParagraphAnchorInput.to_json())

# convert the object into a dict
docx_paragraph_anchor_input_dict = docx_paragraph_anchor_input_instance.to_dict()
# create an instance of DocxParagraphAnchorInput from a dict
docx_paragraph_anchor_input_from_dict = DocxParagraphAnchorInput.from_dict(docx_paragraph_anchor_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


