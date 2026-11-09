# TopupCheckoutRequest

Buy one top-up product (with Stripe, the Price's lookup key).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topup_key** | **str** |  | 

## Example

```python
from ksapi.models.topup_checkout_request import TopupCheckoutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TopupCheckoutRequest from a JSON string
topup_checkout_request_instance = TopupCheckoutRequest.from_json(json)
# print the JSON string representation of the object
print(TopupCheckoutRequest.to_json())

# convert the object into a dict
topup_checkout_request_dict = topup_checkout_request_instance.to_dict()
# create an instance of TopupCheckoutRequest from a dict
topup_checkout_request_from_dict = TopupCheckoutRequest.from_dict(topup_checkout_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


