
# TenantSubscriptionResponse

The tenant\'s current subscription: plan body + period state.

## Properties

Name | Type
------------ | -------------
`plan` | [SubscriptionPlanResponse](SubscriptionPlanResponse.md)
`numSeats` | number
`startDate` | Date
`endDate` | Date
`billingSystem` | [BillingSystem](BillingSystem.md)
`interval` | [BillingInterval](BillingInterval.md)
`willRenew` | boolean

## Example

```typescript
import type { TenantSubscriptionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "plan": null,
  "numSeats": null,
  "startDate": null,
  "endDate": null,
  "billingSystem": null,
  "interval": null,
  "willRenew": null,
} satisfies TenantSubscriptionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantSubscriptionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


