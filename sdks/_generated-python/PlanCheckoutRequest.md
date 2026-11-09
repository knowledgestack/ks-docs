# PlanCheckoutRequest

Subscribe to a plan through the provider's hosted checkout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **UUID** |  | 
**interval** | [**BillingInterval**](BillingInterval.md) |  | 
**num_seats** | **int** |  | 

## Example

```python
from ksapi.models.plan_checkout_request import PlanCheckoutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PlanCheckoutRequest from a JSON string
plan_checkout_request_instance = PlanCheckoutRequest.from_json(json)
# print the JSON string representation of the object
print(PlanCheckoutRequest.to_json())

# convert the object into a dict
plan_checkout_request_dict = plan_checkout_request_instance.to_dict()
# create an instance of PlanCheckoutRequest from a dict
plan_checkout_request_from_dict = PlanCheckoutRequest.from_dict(plan_checkout_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


