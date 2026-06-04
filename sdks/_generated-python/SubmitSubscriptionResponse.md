# SubmitSubscriptionResponse

Result envelope for the subscription-change submit endpoint.  The endpoint returns immediately after the (mock-)Stripe charge is submitted; the actual plan/seat write happens later in the Stripe subscription webhook. ``submitted=True`` always when the route succeeds (errors raise via the global handler).  ``noop=True`` indicates the tenant is already at the requested ``(plan, num_seats)`` — no Stripe call was issued, no webhook will arrive, and the user's account is unchanged. Symmetric with ``StripeWebhookAck.replayed`` so client UIs can render \"already on this plan\" rather than spinning a \"waiting for webhook\" indicator forever.  ``idempotency_key`` echoes the value forwarded to Stripe — clients can store it to correlate the eventual webhook receipt with the original request, and re-send it verbatim on retries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitted** | **bool** | Always True when the submit returns 202. | 
**noop** | **bool** | True when the tenant was already at the target &#x60;&#x60;(plan, num_seats)&#x60;&#x60; — no Stripe call was made and no webhook will arrive. | 
**idempotency_key** | **str** | Idempotency key forwarded to Stripe — sourced from the &#x60;&#x60;Idempotency-Key&#x60;&#x60; request header or a server-generated uuid4 when absent. | 

## Example

```python
from ksapi.models.submit_subscription_response import SubmitSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SubmitSubscriptionResponse from a JSON string
submit_subscription_response_instance = SubmitSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(SubmitSubscriptionResponse.to_json())

# convert the object into a dict
submit_subscription_response_dict = submit_subscription_response_instance.to_dict()
# create an instance of SubmitSubscriptionResponse from a dict
submit_subscription_response_from_dict = SubmitSubscriptionResponse.from_dict(submit_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


