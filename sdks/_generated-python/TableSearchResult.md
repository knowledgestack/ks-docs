# TableSearchResult

A modeled table matched by summary search, with its query coordinates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **UUID** |  | 
**table_id** | **UUID** |  | 
**schema_name** | **str** |  | 
**table_name** | **str** |  | 
**name** | **str** |  | 
**summary** | **str** |  | 
**score** | **float** |  | 

## Example

```python
from ksapi.models.table_search_result import TableSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of TableSearchResult from a JSON string
table_search_result_instance = TableSearchResult.from_json(json)
# print the JSON string representation of the object
print(TableSearchResult.to_json())

# convert the object into a dict
table_search_result_dict = table_search_result_instance.to_dict()
# create an instance of TableSearchResult from a dict
table_search_result_from_dict = TableSearchResult.from_dict(table_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


