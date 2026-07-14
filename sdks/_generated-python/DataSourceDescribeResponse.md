# DataSourceDescribeResponse

Result of (re)describing a connector's modeled tables.  Each modeled table gets a one-line summary embedded as a single Qdrant point for the agent's table search. Counts report how many tables were (re)summarized and (re)embedded this call; unchanged tables are skipped (the embed is content-hash gated), so a repeat call reports zeros.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_id** | **UUID** |  | 
**tables_total** | **int** | Modeled tables considered | 
**summarized** | **int** | Tables whose summary was (re)generated | 
**embedded** | **int** | Tables whose Qdrant point was (re)written | 

## Example

```python
from ksapi.models.data_source_describe_response import DataSourceDescribeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceDescribeResponse from a JSON string
data_source_describe_response_instance = DataSourceDescribeResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceDescribeResponse.to_json())

# convert the object into a dict
data_source_describe_response_dict = data_source_describe_response_instance.to_dict()
# create an instance of DataSourceDescribeResponse from a dict
data_source_describe_response_from_dict = DataSourceDescribeResponse.from_dict(data_source_describe_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


