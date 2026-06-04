# TenantSettingsResponse

Tenant settings as exposed via API (no internal S3 URIs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | [**SupportedLanguage**](SupportedLanguage.md) |  | 
**description** | **str** | Tenant description | 
**industry** | **str** | Industry / company type captured during onboarding | [optional] 
**timezone** | **str** | IANA timezone (e.g. &#39;America/New_York&#39;) | 
**display_name** | [**DisplayNameFormat**](DisplayNameFormat.md) |  | 
**invite_link** | [**InviteLinkSettingsResponse**](InviteLinkSettingsResponse.md) |  | 

## Example

```python
from ksapi.models.tenant_settings_response import TenantSettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantSettingsResponse from a JSON string
tenant_settings_response_instance = TenantSettingsResponse.from_json(json)
# print the JSON string representation of the object
print(TenantSettingsResponse.to_json())

# convert the object into a dict
tenant_settings_response_dict = tenant_settings_response_instance.to_dict()
# create an instance of TenantSettingsResponse from a dict
tenant_settings_response_from_dict = TenantSettingsResponse.from_dict(tenant_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


