# AcceptTenantInvitationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Required only when the owner has no existing KS account. | [optional] 
**first_name** | **str** |  | [optional] 

## Example

```python
from ksapi.models.accept_tenant_invitation_request import AcceptTenantInvitationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AcceptTenantInvitationRequest from a JSON string
accept_tenant_invitation_request_instance = AcceptTenantInvitationRequest.from_json(json)
# print the JSON string representation of the object
print(AcceptTenantInvitationRequest.to_json())

# convert the object into a dict
accept_tenant_invitation_request_dict = accept_tenant_invitation_request_instance.to_dict()
# create an instance of AcceptTenantInvitationRequest from a dict
accept_tenant_invitation_request_from_dict = AcceptTenantInvitationRequest.from_dict(accept_tenant_invitation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


