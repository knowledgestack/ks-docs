
# CheckoutResponse

Result of ``POST /v1/tenants/{tenant_id}/subscriptions``.  ``REDIRECT`` → send the browser to ``url`` (Stripe Checkout). ``CREDENTIAL`` → feed ``credential`` to the Ping++ JS SDK to invoke the chosen channel. ``SCHEDULED`` → nothing to pay; the current billed subscription will not renew and expires at period end. ``APPLIED`` → the change is already in effect (free-plan downgrade of an unbilled tenant, or a no-op request).

## Properties

Name | Type
------------ | -------------
`action` | [CheckoutAction](CheckoutAction.md)
`billingSystem` | [BillingSystem](BillingSystem.md)
`url` | string
`credential` | { [key: string]: any; }

## Example

```typescript
import type { CheckoutResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "action": null,
  "billingSystem": null,
  "url": null,
  "credential": null,
} satisfies CheckoutResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckoutResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


