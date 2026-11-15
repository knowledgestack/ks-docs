# TenantResponse

Tenant response model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Tenant ID | 
**name** | **str** | Tenant name | 
**owner** | [**UserInfo**](UserInfo.md) | The tenant OWNER&#39;s name, so a member knows who can grant access. Null only when the tenant has no OWNER membership. | 
**idp_config** | **Dict[str, object]** | External IdP configuration | [optional] 
**settings** | [**TenantSettingsResponse**](TenantSettingsResponse.md) |  | 
**branding** | [**TenantBrandingResponse**](TenantBrandingResponse.md) |  | [optional] 
**num_seats** | **int** | Seats held under the plan in force, one once a lapsed plan&#39;s grace ran out: the most active members, and the multiplier of seat-scaled allowances. Bounded by the plan&#39;s seat limit when bought; at most 10000. | 
**plan_id** | **UUID** | The plan in force (a plan_definition id): free once a lapsed plan&#39;s renewal grace ran out. | 

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


