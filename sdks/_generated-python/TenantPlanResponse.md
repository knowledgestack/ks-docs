# TenantPlanResponse

The plan in force for a tenant, what it grants, and who sets it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **UUID** | The current plan (a plan_definition id). | 
**plan_name** | **str** | The current plan&#39;s name. | 
**entitlements** | [**List[PlanEntitlementResponse]**](PlanEntitlementResponse.md) | What the plan grants, public or private; a key it does not grant is absent. | 
**num_seats** | **int** | Seats sold under the plan in force, one once a lapsed plan&#39;s grace ran out: the multiplier of seat-scaled allowances. The member cap is the plan&#39;s seat limit. | 
**valid_from** | **datetime** | When the current plan&#39;s window began. | 
**valid_until** | **datetime** | When the current plan&#39;s window ends. | 
**billed** | **bool** | True when a billing subscription sets this plan: change it with the provider, not here. | 

## Example

```python
from ksapi.models.tenant_plan_response import TenantPlanResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantPlanResponse from a JSON string
tenant_plan_response_instance = TenantPlanResponse.from_json(json)
# print the JSON string representation of the object
print(TenantPlanResponse.to_json())

# convert the object into a dict
tenant_plan_response_dict = tenant_plan_response_instance.to_dict()
# create an instance of TenantPlanResponse from a dict
tenant_plan_response_from_dict = TenantPlanResponse.from_dict(tenant_plan_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


