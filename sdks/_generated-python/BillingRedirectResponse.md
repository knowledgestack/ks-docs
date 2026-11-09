# BillingRedirectResponse

A provider-hosted page to send the user to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | 

## Example

```python
from ksapi.models.billing_redirect_response import BillingRedirectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRedirectResponse from a JSON string
billing_redirect_response_instance = BillingRedirectResponse.from_json(json)
# print the JSON string representation of the object
print(BillingRedirectResponse.to_json())

# convert the object into a dict
billing_redirect_response_dict = billing_redirect_response_instance.to_dict()
# create an instance of BillingRedirectResponse from a dict
billing_redirect_response_from_dict = BillingRedirectResponse.from_dict(billing_redirect_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


