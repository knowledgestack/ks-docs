# SubscriptionPlanResponse

Public-facing plan description.  Surfaced via ``GET /public/subscriptions`` (unauth) so the FE can render the upgrade page even before sign-in. Field names line up 1:1 with ``SubscriptionPlan`` ORM attributes; callers build the response via ``SubscriptionPlanResponse.model_validate(plan)`` (``BaseResponse`` enables ``from_attributes=True``).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Plan ID. | 
**name** | **str** | Human-readable plan name. | 
**ingested_pages** | **int** | Per-period cap on ingested pages (PAGE). | 
**messages** | **int** | Per-period cap on agent messages (MESSAGE). | 
**searches** | **int** | Per-period cap on searches (SEARCH). | 
**max_seats** | **int** | Upper bound on num_seats accepted by the upgrade endpoint. Admin PATCH may set tenant.seats above this value. | 
**public** | **bool** | Whether this plan appears in the public listing. Private plans (custom enterprise tiers) are excluded from &#x60;&#x60;GET /public/subscriptions&#x60;&#x60; but their tenant members can still read them via &#x60;&#x60;GET /v1/tenants/{tenant_id}/subscriptions&#x60;&#x60;. | 
**created_at** | **datetime** | Plan creation timestamp. | 
**updated_at** | **datetime** | Last-update timestamp. | 

## Example

```python
from ksapi.models.subscription_plan_response import SubscriptionPlanResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPlanResponse from a JSON string
subscription_plan_response_instance = SubscriptionPlanResponse.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPlanResponse.to_json())

# convert the object into a dict
subscription_plan_response_dict = subscription_plan_response_instance.to_dict()
# create an instance of SubscriptionPlanResponse from a dict
subscription_plan_response_from_dict = SubscriptionPlanResponse.from_dict(subscription_plan_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


