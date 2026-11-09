# PlanResponse

A plan and every key it grants; a key it does not grant is absent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** |  | 
**name** | **str** | Immutable: the payment provider&#39;s lookup key. | 
**description** | **str** |  | 
**public** | **bool** | Purchasable through self-serve checkout. | 
**deleted_at** | **datetime** | Soft-deletion time; null for a live plan. | 
**entitlements** | [**List[PlanEntitlementResponse]**](PlanEntitlementResponse.md) |  | 

## Example

```python
from ksapi.models.plan_response import PlanResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlanResponse from a JSON string
plan_response_instance = PlanResponse.from_json(json)
# print the JSON string representation of the object
print(PlanResponse.to_json())

# convert the object into a dict
plan_response_dict = plan_response_instance.to_dict()
# create an instance of PlanResponse from a dict
plan_response_from_dict = PlanResponse.from_dict(plan_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


