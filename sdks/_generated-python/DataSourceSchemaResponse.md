# DataSourceSchemaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**is_default** | **bool** |  | 

## Example

```python
from ksapi.models.data_source_schema_response import DataSourceSchemaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSchemaResponse from a JSON string
data_source_schema_response_instance = DataSourceSchemaResponse.from_json(json)
# print the JSON string representation of the object
print(DataSourceSchemaResponse.to_json())

# convert the object into a dict
data_source_schema_response_dict = data_source_schema_response_instance.to_dict()
# create an instance of DataSourceSchemaResponse from a dict
data_source_schema_response_from_dict = DataSourceSchemaResponse.from_dict(data_source_schema_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


