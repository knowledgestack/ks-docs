# PlanEntitlementResponse

One entitlement a plan grants; a toggle is on while its row exists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_id** | **UUID** | The entitlement&#39;s id; with the plan&#39;s, it names this row. | 
**key** | [**EntitlementKey**](EntitlementKey.md) |  | 
**kind** | [**EntitlementKind**](EntitlementKind.md) |  | 
**limit** | **int** | 1 for a toggle. | 
**seat_scaled** | **bool** | The cap is limit x the seats sold, counting at most the plan&#39;s seat limit. | 
**reset_interval** | **str** | How often the allowance is granted afresh, as an ISO 8601 duration (P1D, P7D, P1M, P1Y); null grants it once for as long as the plan holds. | 
**rate_limits** | [**List[RateLimit]**](RateLimit.md) | How fast the allowance may be spent: shortest interval first, the tenant&#39;s limit before each user&#39;s. | 

## Example

```python
from ksapi.models.plan_entitlement_response import PlanEntitlementResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlanEntitlementResponse from a JSON string
plan_entitlement_response_instance = PlanEntitlementResponse.from_json(json)
# print the JSON string representation of the object
print(PlanEntitlementResponse.to_json())

# convert the object into a dict
plan_entitlement_response_dict = plan_entitlement_response_instance.to_dict()
# create an instance of PlanEntitlementResponse from a dict
plan_entitlement_response_from_dict = PlanEntitlementResponse.from_dict(plan_entitlement_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


