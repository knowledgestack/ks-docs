# ColumnReference

The table+column a foreign-key column points at.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema_name** | **str** |  | [optional] 
**table** | **str** |  | 
**column** | **str** |  | 

## Example

```python
from ksapi.models.column_reference import ColumnReference

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnReference from a JSON string
column_reference_instance = ColumnReference.from_json(json)
# print the JSON string representation of the object
print(ColumnReference.to_json())

# convert the object into a dict
column_reference_dict = column_reference_instance.to_dict()
# create an instance of ColumnReference from a dict
column_reference_from_dict = ColumnReference.from_dict(column_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


