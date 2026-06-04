
# SubmitSubscriptionResponse

Result envelope for the subscription-change submit endpoint.  The endpoint returns immediately after the (mock-)Stripe charge is submitted; the actual plan/seat write happens later in the Stripe subscription webhook. ``submitted=True`` always when the route succeeds (errors raise via the global handler).  ``noop=True`` indicates the tenant is already at the requested ``(plan, num_seats)`` — no Stripe call was issued, no webhook will arrive, and the user\'s account is unchanged. Symmetric with ``StripeWebhookAck.replayed`` so client UIs can render \"already on this plan\" rather than spinning a \"waiting for webhook\" indicator forever.  ``idempotency_key`` echoes the value forwarded to Stripe — clients can store it to correlate the eventual webhook receipt with the original request, and re-send it verbatim on retries.

## Properties

Name | Type
------------ | -------------
`submitted` | boolean
`noop` | boolean
`idempotencyKey` | string

## Example

```typescript
import type { SubmitSubscriptionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "submitted": null,
  "noop": null,
  "idempotencyKey": null,
} satisfies SubmitSubscriptionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubmitSubscriptionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


