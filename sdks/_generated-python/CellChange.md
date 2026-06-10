# CellChange

One changed spreadsheet cell (``old`` is null for added, ``new`` for removed).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sheet** | **str** |  | 
**address** | **str** |  | 
**old** | **str** |  | 
**new** | **str** |  | 
**type** | [**CellChangeType**](CellChangeType.md) |  | 

## Example

```python
from ksapi.models.cell_change import CellChange

# TODO update the JSON string below
json = "{}"
# create an instance of CellChange from a JSON string
cell_change_instance = CellChange.from_json(json)
# print the JSON string representation of the object
print(CellChange.to_json())

# convert the object into a dict
cell_change_dict = cell_change_instance.to_dict()
# create an instance of CellChange from a dict
cell_change_from_dict = CellChange.from_dict(cell_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


