# ColumnConfig

A modeled column. Only ``exposed`` columns are surfaced to the agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**data_type** | **str** |  | [optional] [default to '']
**comment** | **str** |  | [optional] 
**is_pk** | **bool** |  | [optional] [default to False]
**exposed** | **bool** |  | [optional] [default to True]

## Example

```python
from ksapi.models.column_config import ColumnConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnConfig from a JSON string
column_config_instance = ColumnConfig.from_json(json)
# print the JSON string representation of the object
print(ColumnConfig.to_json())

# convert the object into a dict
column_config_dict = column_config_instance.to_dict()
# create an instance of ColumnConfig from a dict
column_config_from_dict = ColumnConfig.from_dict(column_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


