# AcceptInviteResponse

Response returned after accepting an invite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **UUID** |  | 
**role** | [**TenantUserRole**](TenantUserRole.md) |  | 
**skipped_groups** | **List[UUID]** | Groups configured on the invite/tenant link that no longer exist and were therefore skipped. | [optional] 

## Example

```python
from ksapi.models.accept_invite_response import AcceptInviteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptInviteResponse from a JSON string
accept_invite_response_instance = AcceptInviteResponse.from_json(json)
# print the JSON string representation of the object
print(AcceptInviteResponse.to_json())

# convert the object into a dict
accept_invite_response_dict = accept_invite_response_instance.to_dict()
# create an instance of AcceptInviteResponse from a dict
accept_invite_response_from_dict = AcceptInviteResponse.from_dict(accept_invite_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


