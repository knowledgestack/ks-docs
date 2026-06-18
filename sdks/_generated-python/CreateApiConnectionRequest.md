# CreateApiConnectionRequest

Create an API connection under a folder the caller can write to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**parent_path_part_id** | **UUID** |  | 
**base_url** | **str** |  | 
**network_class** | [**NetworkClass**](NetworkClass.md) |  | 
**verify_tls** | **bool** |  | [optional] [default to True]
**auth_config** | [**ApiAuthConfig**](ApiAuthConfig.md) |  | 
**api_docs** | **str** |  | [optional] 

## Example

```python
from ksapi.models.create_api_connection_request import CreateApiConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateApiConnectionRequest from a JSON string
create_api_connection_request_instance = CreateApiConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateApiConnectionRequest.to_json())

# convert the object into a dict
create_api_connection_request_dict = create_api_connection_request_instance.to_dict()
# create an instance of CreateApiConnectionRequest from a dict
create_api_connection_request_from_dict = CreateApiConnectionRequest.from_dict(create_api_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


