# VersionDiffResponse

The diff between two document versions.  ``format`` selects the populated payload: ``text`` (side-by-side line diff, for Word/PDF/text) or ``cells`` (cell-level diff, for spreadsheets).

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


