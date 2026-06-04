# TenantBrandingResponse

Resolved branding with presigned URLs instead of internal S3 URIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_name** | **str** | Custom brand name for logo | [optional] 
**brand_color** | **str** | Primary brand hex color | [optional] 
**logo_url** | **str** | Presigned URL for primary logo | [optional] 
**logo_dark_url** | **str** | Presigned URL for dark-mode logo | [optional] 
**favicon_url** | **str** | Presigned URL for favicon | [optional] 
**theme_overrides** | **Dict[str, str]** | Custom CSS variable overrides | [optional] 

## Example

```python
from ksapi.models.tenant_branding_response import TenantBrandingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantBrandingResponse from a JSON string
tenant_branding_response_instance = TenantBrandingResponse.from_json(json)
# print the JSON string representation of the object
print(TenantBrandingResponse.to_json())

# convert the object into a dict
tenant_branding_response_dict = tenant_branding_response_instance.to_dict()
# create an instance of TenantBrandingResponse from a dict
tenant_branding_response_from_dict = TenantBrandingResponse.from_dict(tenant_branding_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


