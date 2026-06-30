# DocumentDiff

A structured block diff of two Word (.docx) versions.  ``added``/``removed``/``modified`` are full totals; ``blocks`` is capped and ``omitted_blocks`` reports exactly how many were dropped (never a silent cap). ``surfaces_checked`` attests which OOXML surfaces were diffed, ``unaccepted_revisions`` counts tracked changes present (the rendered text may not be final), and ``decode_degraded`` flags a partial parse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocks** | [**List[DocumentBlockChange]**](DocumentBlockChange.md) |  | 
**added** | **int** |  | 
**removed** | **int** |  | 
**modified** | **int** |  | 
**truncated** | **bool** |  | 
**omitted_blocks** | **int** |  | 
**surfaces_checked** | **List[str]** |  | 
**unaccepted_revisions** | **int** |  | 
**decode_degraded** | **bool** |  | 

## Example

```python
from ksapi.models.document_diff import DocumentDiff

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentDiff from a JSON string
document_diff_instance = DocumentDiff.from_json(json)
# print the JSON string representation of the object
print(DocumentDiff.to_json())

# convert the object into a dict
document_diff_dict = document_diff_instance.to_dict()
# create an instance of DocumentDiff from a dict
document_diff_from_dict = DocumentDiff.from_dict(document_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


