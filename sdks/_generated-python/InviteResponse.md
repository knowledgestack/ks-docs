# InviteResponse

Invite response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**tenant_id** | **UUID** |  | 
**email** | **str** |  | 
**role** | [**TenantUserRole**](TenantUserRole.md) |  | 
**groups** | **List[UUID]** |  | [optional] 
**expires_at** | **datetime** |  | 
**accepted_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | 
**updated_at** | **datetime** |  | 
**invite_link** | **str** |  | 
**email_id** | **UUID** |  | [optional] 

## Example

```python
from ksapi.models.invite_response import InviteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InviteResponse from a JSON string
invite_response_instance = InviteResponse.from_json(json)
# print the JSON string representation of the object
print(InviteResponse.to_json())

# convert the object into a dict
invite_response_dict = invite_response_instance.to_dict()
# create an instance of InviteResponse from a dict
invite_response_from_dict = InviteResponse.from_dict(invite_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


