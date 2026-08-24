# TenantSubscriptionResponse

The tenant's current subscription: plan body + period state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | [**SubscriptionPlanResponse**](SubscriptionPlanResponse.md) |  | 
**num_seats** | **int** | Seats in force for this period. | 
**start_date** | **datetime** | Inclusive period start. | 
**end_date** | **datetime** | Exclusive period end. Unbilled subscriptions carry a 100-year horizon; billed ones the paid-through date. | 
**billing_system** | [**BillingSystem**](BillingSystem.md) |  | [optional] 
**interval** | [**BillingInterval**](BillingInterval.md) |  | [optional] 
**will_renew** | **bool** | True when the subscription auto-renews at period end (a Stripe subscription with no cancellation scheduled). False for Ping++ prepay (renewal &#x3D; buying again), unbilled subscriptions, and Stripe periods with a scheduled cancellation. | 

## Example

```python
from ksapi.models.tenant_subscription_response import TenantSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TenantSubscriptionResponse from a JSON string
tenant_subscription_response_instance = TenantSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(TenantSubscriptionResponse.to_json())

# convert the object into a dict
tenant_subscription_response_dict = tenant_subscription_response_instance.to_dict()
# create an instance of TenantSubscriptionResponse from a dict
tenant_subscription_response_from_dict = TenantSubscriptionResponse.from_dict(tenant_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


