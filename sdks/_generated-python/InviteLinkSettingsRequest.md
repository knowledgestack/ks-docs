# InviteLinkSettingsRequest

Partial invite-link settings update.  ``role`` is constrained to USER/ADMIN by the shared ``InviteLinkRole`` Literal — Pydantic raises a 422 for any other value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** |  | [optional] 
**role** | **str** |  | [optional] 
**groups** | **List[UUID]** |  | [optional] 

## Example

```python
from ksapi.models.invite_link_settings_request import InviteLinkSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InviteLinkSettingsRequest from a JSON string
invite_link_settings_request_instance = InviteLinkSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(InviteLinkSettingsRequest.to_json())

# convert the object into a dict
invite_link_settings_request_dict = invite_link_settings_request_instance.to_dict()
# create an instance of InviteLinkSettingsRequest from a dict
invite_link_settings_request_from_dict = InviteLinkSettingsRequest.from_dict(invite_link_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


