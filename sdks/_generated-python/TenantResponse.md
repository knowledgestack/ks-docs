# TenantResponse

Tenant response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Tenant ID | 
**name** | **str** | Tenant name | 
**idp_config** | **Dict[str, object]** | External IdP configuration | [optional] 
**settings** | [**TenantSettingsResponse**](TenantSettingsResponse.md) |  | 
**branding** | [**TenantBrandingResponse**](TenantBrandingResponse.md) |  | [optional] 
**seats** | **int** | Maximum active members allowed for this tenant. | 
**subscription_id** | **UUID** | FK to the subscription plan governing the tenant&#39;s caps. Resolve &#x60;&#x60;GET /public/subscriptions&#x60;&#x60; to display plan name and limits. | 

## Example

```python
from ksapi.models.tenant_response import TenantResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantResponse from a JSON string
tenant_response_instance = TenantResponse.from_json(json)
# print the JSON string representation of the object
print(TenantResponse.to_json())

# convert the object into a dict
tenant_response_dict = tenant_response_instance.to_dict()
# create an instance of TenantResponse from a dict
tenant_response_from_dict = TenantResponse.from_dict(tenant_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


