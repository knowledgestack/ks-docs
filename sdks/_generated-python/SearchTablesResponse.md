# SearchTablesResponse

Ranked tables matching a summary search (readable by the caller).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[TableSearchResult]**](TableSearchResult.md) |  | 

## Example

```python
from ksapi.models.search_tables_response import SearchTablesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchTablesResponse from a JSON string
search_tables_response_instance = SearchTablesResponse.from_json(json)
# print the JSON string representation of the object
print(SearchTablesResponse.to_json())

# convert the object into a dict
search_tables_response_dict = search_tables_response_instance.to_dict()
# create an instance of SearchTablesResponse from a dict
search_tables_response_from_dict = SearchTablesResponse.from_dict(search_tables_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


