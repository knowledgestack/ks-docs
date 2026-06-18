# UpdateApiConnectionRequest

Partial update (PATCH). A risk-increasing change re-arms the disclaimer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** |  | [optional] 
**network_class** | [**NetworkClass**](NetworkClass.md) |  | [optional] 
**verify_tls** | **bool** |  | [optional] 
**auth_config** | [**ApiAuthConfig**](ApiAuthConfig.md) |  | [optional] 
**api_docs** | **str** |  | [optional] 

## Example

```python
from ksapi.models.update_api_connection_request import UpdateApiConnectionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateApiConnectionRequest from a JSON string
update_api_connection_request_instance = UpdateApiConnectionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateApiConnectionRequest.to_json())

# convert the object into a dict
update_api_connection_request_dict = update_api_connection_request_instance.to_dict()
# create an instance of UpdateApiConnectionRequest from a dict
update_api_connection_request_from_dict = UpdateApiConnectionRequest.from_dict(update_api_connection_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


