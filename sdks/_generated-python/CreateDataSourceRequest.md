# CreateDataSourceRequest

Create a connector under a folder the caller can write to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**parent_path_part_id** | **UUID** |  | 
**engine** | [**DataSourceEngine**](DataSourceEngine.md) |  | 
**connection_config** | [**ConnectionConfig**](ConnectionConfig.md) |  | 

## Example

```python
from ksapi.models.create_data_source_request import CreateDataSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataSourceRequest from a JSON string
create_data_source_request_instance = CreateDataSourceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDataSourceRequest.to_json())

# convert the object into a dict
create_data_source_request_dict = create_data_source_request_instance.to_dict()
# create an instance of CreateDataSourceRequest from a dict
create_data_source_request_from_dict = CreateDataSourceRequest.from_dict(create_data_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


