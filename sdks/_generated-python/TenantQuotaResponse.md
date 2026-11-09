# TenantQuotaResponse

The tenant's metered entitlements and seats under the plan in force.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlements** | [**List[EntitlementQuotaStatus]**](EntitlementQuotaStatus.md) | One entry per metered entitlement key, ordered by key | 
**seats** | [**SeatQuotaStatus**](SeatQuotaStatus.md) |  | 

## Example

```python
from ksapi.models.tenant_quota_response import TenantQuotaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantQuotaResponse from a JSON string
tenant_quota_response_instance = TenantQuotaResponse.from_json(json)
# print the JSON string representation of the object
print(TenantQuotaResponse.to_json())

# convert the object into a dict
tenant_quota_response_dict = tenant_quota_response_instance.to_dict()
# create an instance of TenantQuotaResponse from a dict
tenant_quota_response_from_dict = TenantQuotaResponse.from_dict(tenant_quota_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


