# ChangeSubscriptionRequest

Body for ``POST /v1/tenants/{tenant_id}/subscriptions``.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **UUID** | Target plan to switch to. | 
**num_seats** | **int** | Desired seat cap. Must be &lt;&#x3D; plan.max_seats and &gt;&#x3D; the count of active TenantUser rows. | 

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


