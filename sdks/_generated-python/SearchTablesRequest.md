# SearchTablesRequest

Semantic search over connector table summaries (agent table discovery).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | Natural-language search query | 
**top_k** | **int** | Number of tables (1-50) | [optional] [default to 10]
**score_threshold** | **float** | Minimum similarity score | [optional] [default to 0.3]
**data_source_id** | **UUID** | Optional: restrict the search to one connector | [optional] 

## Example

```python
from ksapi.models.search_tables_request import SearchTablesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchTablesRequest from a JSON string
search_tables_request_instance = SearchTablesRequest.from_json(json)
# print the JSON string representation of the object
print(SearchTablesRequest.to_json())

# convert the object into a dict
search_tables_request_dict = search_tables_request_instance.to_dict()
# create an instance of SearchTablesRequest from a dict
search_tables_request_from_dict = SearchTablesRequest.from_dict(search_tables_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


