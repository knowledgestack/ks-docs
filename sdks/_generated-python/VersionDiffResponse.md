# VersionDiffResponse

The diff between two document versions.  ``format`` selects the populated payload: ``text`` (side-by-side line diff, for PDF/Markdown/text), ``cells`` (cell-level diff, for spreadsheets), ``structured`` (key-path diff, for JSON/YAML), or ``document`` (structured block diff, for Word .docx).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_version_id** | **UUID** |  | 
**to_version_id** | **UUID** |  | 
**from_version** | **int** |  | [optional] 
**to_version** | **int** |  | [optional] 
**format** | [**DiffFormat**](DiffFormat.md) |  | 
**text** | [**TextDiff**](TextDiff.md) |  | [optional] 
**cells** | [**CellDiff**](CellDiff.md) |  | [optional] 
**structured** | [**StructuredDiff**](StructuredDiff.md) |  | [optional] 
**document** | [**DocumentDiff**](DocumentDiff.md) |  | [optional] 
**degraded** | **bool** |  | [optional] [default to False]
**degraded_reason** | **str** |  | [optional] 
**algorithm_version** | **str** |  | [optional] [default to '1']
**from_content_hash** | **str** |  | [optional] 
**to_content_hash** | **str** |  | [optional] 
**from_uploader** | [**UserInfo**](UserInfo.md) |  | [optional] 
**to_uploader** | [**UserInfo**](UserInfo.md) |  | [optional] 
**from_uploaded_at** | **datetime** |  | [optional] 
**to_uploaded_at** | **datetime** |  | [optional] 

## Example

```python
from ksapi.models.version_diff_response import VersionDiffResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDiffResponse from a JSON string
version_diff_response_instance = VersionDiffResponse.from_json(json)
# print the JSON string representation of the object
print(VersionDiffResponse.to_json())

# convert the object into a dict
version_diff_response_dict = version_diff_response_instance.to_dict()
# create an instance of VersionDiffResponse from a dict
version_diff_response_from_dict = VersionDiffResponse.from_dict(version_diff_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


