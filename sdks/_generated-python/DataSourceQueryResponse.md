# DataSourceQueryResponse

Read-only query result. ``generated_sql`` echoes the executed SQL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** |  | 
**rows** | **List[List[object]]** |  | 
**row_count** | **int** |  | 
**truncated** | **bool** |  | 
**generated_sql** | **str** |  | 

## Example

```python
from ksapi.models.data_source_query_response import DataSourceQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceQueryResponse from a JSON string
data_source_query_response_instance = DataSourceQueryResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceQueryResponse.to_json())

# convert the object into a dict
data_source_query_response_dict = data_source_query_response_instance.to_dict()
# create an instance of DataSourceQueryResponse from a dict
data_source_query_response_from_dict = DataSourceQueryResponse.from_dict(data_source_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


