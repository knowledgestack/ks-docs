# DataSourceQueryRequest

A read-only SQL query the caller (or agent) wrote.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql** | **str** |  | 
**max_rows** | **int** |  | [optional] [default to 1000]

## Example

```python
from ksapi.models.data_source_query_request import DataSourceQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceQueryRequest from a JSON string
data_source_query_request_instance = DataSourceQueryRequest.from_json(json)
# print the JSON string representation of the object
print(DataSourceQueryRequest.to_json())

# convert the object into a dict
data_source_query_request_dict = data_source_query_request_instance.to_dict()
# create an instance of DataSourceQueryRequest from a dict
data_source_query_request_from_dict = DataSourceQueryRequest.from_dict(data_source_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


