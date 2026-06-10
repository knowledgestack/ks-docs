# CellDiff

A cell-level diff of two spreadsheet versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changes** | [**List[CellChange]**](CellChange.md) |  | 
**added** | **int** |  | 
**removed** | **int** |  | 
**modified** | **int** |  | 
**truncated** | **bool** |  | 

## Example

```python
from ksapi.models.cell_diff import CellDiff

# TODO update the JSON string below
json = "{}"
# create an instance of CellDiff from a JSON string
cell_diff_instance = CellDiff.from_json(json)
# print the JSON string representation of the object
print(CellDiff.to_json())

# convert the object into a dict
cell_diff_dict = cell_diff_instance.to_dict()
# create an instance of CellDiff from a dict
cell_diff_from_dict = CellDiff.from_dict(cell_diff_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


