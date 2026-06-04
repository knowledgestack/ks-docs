# TenantSettingsUpdate

Partial tenant settings update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | [**SupportedLanguage**](SupportedLanguage.md) |  | [optional] 
**description** | **str** | Tenant description | [optional] 
**industry** | **str** | Industry / company type captured during onboarding | [optional] 
**timezone** | **str** | IANA timezone (e.g. &#39;America/New_York&#39;) | [optional] 
**display_name** | [**DisplayNameFormat**](DisplayNameFormat.md) |  | [optional] 
**brand_name** | **str** | Custom brand name for logo | [optional] 
**brand_color** | **str** | Primary brand hex color (e.g. &#39;#2563eb&#39;) | [optional] 
**theme_overrides** | **Dict[str, str]** | Custom CSS variable overrides | [optional] 
**invite_link** | [**InviteLinkSettingsRequest**](InviteLinkSettingsRequest.md) | Tenant-wide invite-link configuration | [optional] 

## Example

```python
from ksapi.models.tenant_settings_update import TenantSettingsUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of TenantSettingsUpdate from a JSON string
tenant_settings_update_instance = TenantSettingsUpdate.from_json(json)
# print the JSON string representation of the object
print(TenantSettingsUpdate.to_json())

# convert the object into a dict
tenant_settings_update_dict = tenant_settings_update_instance.to_dict()
# create an instance of TenantSettingsUpdate from a dict
tenant_settings_update_from_dict = TenantSettingsUpdate.from_dict(tenant_settings_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


