# InvitePreviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**InvitePreviewState**](InvitePreviewState.md) |  | 
**email** | **str** | Invitee email, to lock the form | [optional] 
**tenant_name** | **str** |  | [optional] 
**role** | [**TenantUserRole**](TenantUserRole.md) |  | [optional] 
**expires_at** | **datetime** |  | [optional] 
**invited_by** | [**UserInfo**](UserInfo.md) | Display name only, no email | [optional] 

## Example

```python
from ksapi.models.invite_preview_response import InvitePreviewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InvitePreviewResponse from a JSON string
invite_preview_response_instance = InvitePreviewResponse.from_json(json)
# print the JSON string representation of the object
print(InvitePreviewResponse.to_json())

# convert the object into a dict
invite_preview_response_dict = invite_preview_response_instance.to_dict()
# create an instance of InvitePreviewResponse from a dict
invite_preview_response_from_dict = InvitePreviewResponse.from_dict(invite_preview_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


