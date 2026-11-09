# EntitlementError

The entitlement that refused a request, so a client can show or buy what it needs.  ``quota_exceeded`` (429) fills ``included``, ``additional`` and ``period_end``; ``feature_not_available`` (403) fills ``granted_by``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Entitlement key, e.g. &#39;meter.kb.page&#39; or &#39;toggle.agent.sql&#39;. | 
**kind** | [**EntitlementKind**](EntitlementKind.md) |  | 
**plan** | [**PlanRef**](PlanRef.md) | The plan in force when the request was refused. | [optional] 
**granted_by** | [**List[PlanRef]**](PlanRef.md) | Public plans that grant this key; empty when it is a spent limit. | [optional] 
**included** | [**EntitlementUsage**](EntitlementUsage.md) | The plan allowance this period. | [optional] 
**additional** | [**EntitlementUsage**](EntitlementUsage.md) | Purchased top-up units: used this period and held. | [optional] 
**period_end** | **datetime** | When the plan allowance resets. | [optional] 

## Example

```python
from ksapi.models.entitlement_error import EntitlementError

# TODO update the JSON string below
json = "{}"
# create an instance of EntitlementError from a JSON string
entitlement_error_instance = EntitlementError.from_json(json)
# print the JSON string representation of the object
print(EntitlementError.to_json())

# convert the object into a dict
entitlement_error_dict = entitlement_error_instance.to_dict()
# create an instance of EntitlementError from a dict
entitlement_error_from_dict = EntitlementError.from_dict(entitlement_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


