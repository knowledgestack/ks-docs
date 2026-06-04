# InviteLinkSettingsResponse

Tenant-wide invite-link settings (exposed via API).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the invite link is active | 
**role** | **str** | Role assigned to joining users | 
**groups** | **List[UUID]** | Groups the joining user is added to | [optional] 

## Example

```python
from ksapi.models.invite_link_settings_response import InviteLinkSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InviteLinkSettingsResponse from a JSON string
invite_link_settings_response_instance = InviteLinkSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(InviteLinkSettingsResponse.to_json())

# convert the object into a dict
invite_link_settings_response_dict = invite_link_settings_response_instance.to_dict()
# create an instance of InviteLinkSettingsResponse from a dict
invite_link_settings_response_from_dict = InviteLinkSettingsResponse.from_dict(invite_link_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


