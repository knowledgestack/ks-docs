# EntitlementQuotaStatus

One metered entitlement in the tenant's current window.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**EntitlementKey**](EntitlementKey.md) |  | 
**granted** | **bool** | Whether the plan in force grants this key at all. | 
**plan** | [**PlanRef**](PlanRef.md) | The plan in force. | 
**used** | **int** | Plan allowance spent this window. | 
**limit** | **int** | This window&#39;s plan allowance, scaled by seats where the plan says so; 0 when not granted. Audio and video are in seconds. | 
**additional_balance** | **int** | Purchased top-up units still held, spent after the allowance. | 
**period_start** | **datetime** | Window start (UTC); null when not granted. | 
**period_end** | **datetime** | Window end (UTC); null when not granted. | 

## Example

```python
from ksapi.models.entitlement_quota_status import EntitlementQuotaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of EntitlementQuotaStatus from a JSON string
entitlement_quota_status_instance = EntitlementQuotaStatus.from_json(json)
# print the JSON string representation of the object
print(EntitlementQuotaStatus.to_json())

# convert the object into a dict
entitlement_quota_status_dict = entitlement_quota_status_instance.to_dict()
# create an instance of EntitlementQuotaStatus from a dict
entitlement_quota_status_from_dict = EntitlementQuotaStatus.from_dict(entitlement_quota_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


