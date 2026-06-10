# ConnectionConfig

Connector connection parameters. ``password`` is write-only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** |  | 
**port** | **int** |  | [optional] 
**database** | **str** |  | 
**username** | **str** |  | 
**password** | **str** |  | 

## Example

```python
from ksapi.models.connection_config import ConnectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionConfig from a JSON string
connection_config_instance = ConnectionConfig.from_json(json)
# print the JSON string representation of the object
print(ConnectionConfig.to_json())

# convert the object into a dict
connection_config_dict = connection_config_instance.to_dict()
# create an instance of ConnectionConfig from a dict
connection_config_from_dict = ConnectionConfig.from_dict(connection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


