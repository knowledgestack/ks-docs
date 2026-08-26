# AcceptTenantInvitationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **UUID** |  | 
**tenant_name** | **str** |  | 
**user_id** | **UUID** |  | 

## Example

```python
from ksapi.models.accept_tenant_invitation_response import AcceptTenantInvitationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptTenantInvitationResponse from a JSON string
accept_tenant_invitation_response_instance = AcceptTenantInvitationResponse.from_json(json)
# print the JSON string representation of the object
print(AcceptTenantInvitationResponse.to_json())

# convert the object into a dict
accept_tenant_invitation_response_dict = accept_tenant_invitation_response_instance.to_dict()
# create an instance of AcceptTenantInvitationResponse from a dict
accept_tenant_invitation_response_from_dict = AcceptTenantInvitationResponse.from_dict(accept_tenant_invitation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


