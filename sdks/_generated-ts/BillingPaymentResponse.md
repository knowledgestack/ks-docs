
# BillingPaymentResponse

One confirmed payment, as shown in the tenant\'s billing history.  Backs in-app receipts: CN payments have no provider-hosted invoice (``invoice_url`` is NULL) — the frontend renders a receipt from these fields. Stripe payments link the hosted invoice.

## Properties

Name | Type
------------ | -------------
`id` | string
`billingSystem` | [BillingSystem](BillingSystem.md)
`planId` | string
`interval` | string
`numSeats` | number
`amount` | number
`currency` | string
`invoiceUrl` | string
`createdAt` | Date

## Example

```typescript
import type { BillingPaymentResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "billingSystem": null,
  "planId": null,
  "interval": null,
  "numSeats": null,
  "amount": null,
  "currency": null,
  "invoiceUrl": null,
  "createdAt": null,
} satisfies BillingPaymentResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BillingPaymentResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


