# ChangeSubscriptionRequest

Body for ``POST /v1/tenants/{tenant_id}/subscriptions``.  For a priced plan, ``interval`` and ``billing_system`` are required (``channel`` too for Ping++); the response carries the provider checkout to complete. For the free plan they are ignored — the downgrade is applied immediately (unbilled tenants) or scheduled for period end (billed tenants).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **UUID** | Target plan to switch to. | 
**num_seats** | **int** | Desired seat cap. Must be &lt;&#x3D; plan.max_seats and &gt;&#x3D; the count of active TenantUser rows. | 
**interval** | [**BillingInterval**](BillingInterval.md) |  | [optional] 
**billing_system** | [**BillingSystem**](BillingSystem.md) |  | [optional] 
**channel** | **str** | Ping++ payment channel chosen in the UI (e.g. &#39;alipay_pc_direct&#39;, &#39;wx_pub_qr&#39;). Required when billing_system&#x3D;PING_PP. | [optional] 
**channel_extra** | **Dict[str, object]** | Channel-specific Ping++ charge &#x60;extra&#x60; parameters (success_url, product ids, ... — see the Ping++ charge API for the chosen channel). Passed through verbatim; amounts are always resolved server-side. | [optional] 

## Example

```python
from ksapi.models.change_subscription_request import ChangeSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeSubscriptionRequest from a JSON string
change_subscription_request_instance = ChangeSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(ChangeSubscriptionRequest.to_json())

# convert the object into a dict
change_subscription_request_dict = change_subscription_request_instance.to_dict()
# create an instance of ChangeSubscriptionRequest from a dict
change_subscription_request_from_dict = ChangeSubscriptionRequest.from_dict(change_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


