# UpdateApiConnectionRequest

Partial update (PATCH). A risk-increasing change re-arms the disclaimer.  ``name`` renames the connection and ``parent_path_part_id`` moves it under a new FOLDER; neither is a risk-increasing change, so a rename/move alone leaves the disclaimer intact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**parent_path_part_id** | **UUID** | New parent FOLDER path_part to move the connection under. | [optional] 
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


