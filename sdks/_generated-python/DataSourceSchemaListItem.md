# DataSourceSchemaListItem

A namespace discovered by live introspection (not a persisted PDO).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**is_default** | **bool** |  | 

## Example

```python
from ksapi.models.data_source_schema_list_item import DataSourceSchemaListItem

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSchemaListItem from a JSON string
data_source_schema_list_item_instance = DataSourceSchemaListItem.from_json(json)
# print the JSON string representation of the object
print(DataSourceSchemaListItem.to_json())

# convert the object into a dict
data_source_schema_list_item_dict = data_source_schema_list_item_instance.to_dict()
# create an instance of DataSourceSchemaListItem from a dict
data_source_schema_list_item_from_dict = DataSourceSchemaListItem.from_dict(data_source_schema_list_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


