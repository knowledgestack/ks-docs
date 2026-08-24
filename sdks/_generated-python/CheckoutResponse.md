# CheckoutResponse

Result of ``POST /v1/tenants/{tenant_id}/subscriptions``.  ``REDIRECT`` → send the browser to ``url`` (Stripe Checkout). ``CREDENTIAL`` → feed ``credential`` to the Ping++ JS SDK to invoke the chosen channel. ``SCHEDULED`` → nothing to pay; the current billed subscription will not renew and expires at period end. ``APPLIED`` → the change is already in effect (free-plan downgrade of an unbilled tenant, or a no-op request).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**CheckoutAction**](CheckoutAction.md) |  | 
**billing_system** | [**BillingSystem**](BillingSystem.md) |  | [optional] 
**url** | **str** | Stripe Checkout URL (action&#x3D;REDIRECT). | [optional] 
**credential** | **Dict[str, object]** | Ping++ charge credential (action&#x3D;CREDENTIAL). | [optional] 

## Example

```python
from ksapi.models.checkout_response import CheckoutResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckoutResponse from a JSON string
checkout_response_instance = CheckoutResponse.from_json(json)
# print the JSON string representation of the object
print(CheckoutResponse.to_json())

# convert the object into a dict
checkout_response_dict = checkout_response_instance.to_dict()
# create an instance of CheckoutResponse from a dict
checkout_response_from_dict = CheckoutResponse.from_dict(checkout_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


