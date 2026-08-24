# BillingPaymentResponse

One confirmed payment, as shown in the tenant's billing history.  Backs in-app receipts: CN payments have no provider-hosted invoice (``invoice_url`` is NULL) — the frontend renders a receipt from these fields. Stripe payments link the hosted invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **UUID** | Payment id. | 
**billing_system** | [**BillingSystem**](BillingSystem.md) |  | 
**plan_id** | **UUID** | Plan purchased. | 
**interval** | **str** | Billing period purchased. | 
**num_seats** | **int** | Seats purchased. | 
**amount** | **int** | Total charged, in the currency&#39;s minor unit. | 
**currency** | **str** | USD (cents) or CNY (fen). | 
**invoice_url** | **str** | Provider-hosted invoice/receipt, when available. | [optional] 
**created_at** | **datetime** | When the payment confirmed. | 

## Example

```python
from ksapi.models.billing_payment_response import BillingPaymentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPaymentResponse from a JSON string
billing_payment_response_instance = BillingPaymentResponse.from_json(json)
# print the JSON string representation of the object
print(BillingPaymentResponse.to_json())

# convert the object into a dict
billing_payment_response_dict = billing_payment_response_instance.to_dict()
# create an instance of BillingPaymentResponse from a dict
billing_payment_response_from_dict = BillingPaymentResponse.from_dict(billing_payment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


