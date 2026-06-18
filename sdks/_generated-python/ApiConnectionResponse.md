# ApiConnectionResponse

Connector response; a discriminated-union variant for folder listings.  ``auth_config`` is intentionally omitted — the secret is write-only and never serialized back.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_type** | **str** | Path part type | [optional] [default to 'API_CONNECTION']
**id** | **UUID** |  | 
**path_part_id** | **UUID** |  | 
**parent_path_part_id** | **UUID** |  | 
**materialized_path** | **str** |  | 
**tenant_id** | **UUID** |  | 
**name** | **str** |  | 
**base_url** | **str** |  | 
**network_class** | [**NetworkClass**](NetworkClass.md) |  | 
**verify_tls** | **bool** |  | 
**api_docs** | **str** |  | 
**disclaimer_accepted_at** | **datetime** |  | 
**disclaimer_accepted_by** | **UUID** |  | 
**approval_state** | [**PathPartApprovalState**](PathPartApprovalState.md) |  | 
**owner** | [**UserInfo**](UserInfo.md) |  | [optional] 
**permissions** | [**ItemPermissions**](ItemPermissions.md) |  | 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from ksapi.models.api_connection_response import ApiConnectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiConnectionResponse from a JSON string
api_connection_response_instance = ApiConnectionResponse.from_json(json)
# print the JSON string representation of the object
print(ApiConnectionResponse.to_json())

# convert the object into a dict
api_connection_response_dict = api_connection_response_instance.to_dict()
# create an instance of ApiConnectionResponse from a dict
api_connection_response_from_dict = ApiConnectionResponse.from_dict(api_connection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


