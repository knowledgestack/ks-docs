# TenantQuotaStateResponse

Tenant's current quota state across all enforced caps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metered** | [**List[MeteredQuotaStatus]**](MeteredQuotaStatus.md) | One entry per metered resource | 
**seats** | [**SeatQuotaStatus**](SeatQuotaStatus.md) |  | 

## Example

```python
from ksapi.models.tenant_quota_state_response import TenantQuotaStateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantQuotaStateResponse from a JSON string
tenant_quota_state_response_instance = TenantQuotaStateResponse.from_json(json)
# print the JSON string representation of the object
print(TenantQuotaStateResponse.to_json())

# convert the object into a dict
tenant_quota_state_response_dict = tenant_quota_state_response_instance.to_dict()
# create an instance of TenantQuotaStateResponse from a dict
tenant_quota_state_response_from_dict = TenantQuotaStateResponse.from_dict(tenant_quota_state_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


