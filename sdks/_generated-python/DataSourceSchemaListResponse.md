# DataSourceSchemaListResponse

The source's user namespaces (PG schemas / MySQL databases).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schemas** | [**List[DataSourceSchemaResponse]**](DataSourceSchemaResponse.md) |  | 

## Example

```python
from ksapi.models.data_source_schema_list_response import DataSourceSchemaListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSchemaListResponse from a JSON string
data_source_schema_list_response_instance = DataSourceSchemaListResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceSchemaListResponse.to_json())

# convert the object into a dict
data_source_schema_list_response_dict = data_source_schema_list_response_instance.to_dict()
# create an instance of DataSourceSchemaListResponse from a dict
data_source_schema_list_response_from_dict = DataSourceSchemaListResponse.from_dict(data_source_schema_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


