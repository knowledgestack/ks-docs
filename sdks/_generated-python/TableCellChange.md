# TableCellChange

One changed table cell (``old`` null for added, ``new`` for removed).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row** | **int** |  | 
**col** | **int** |  | 
**type** | [**BlockChangeType**](BlockChangeType.md) |  | 
**old** | **str** |  | 
**new** | **str** |  | 

## Example

```python
from ksapi.models.table_cell_change import TableCellChange

# TODO update the JSON string below
json = "{}"
# create an instance of TableCellChange from a JSON string
table_cell_change_instance = TableCellChange.from_json(json)
# print the JSON string representation of the object
print(TableCellChange.to_json())

# convert the object into a dict
table_cell_change_dict = table_cell_change_instance.to_dict()
# create an instance of TableCellChange from a dict
table_cell_change_from_dict = TableCellChange.from_dict(table_cell_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


