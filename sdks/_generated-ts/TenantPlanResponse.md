
# TenantPlanResponse

The plan in force for a tenant, what it grants, and who sets it.

## Properties

Name | Type
------------ | -------------
`planId` | string
`planName` | string
`entitlements` | [Array&lt;PlanEntitlementResponse&gt;](PlanEntitlementResponse.md)
`numSeats` | number
`validFrom` | Date
`validUntil` | Date
`billed` | boolean

## Example

```typescript
import type { TenantPlanResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "planId": null,
  "planName": null,
  "entitlements": null,
  "numSeats": null,
  "validFrom": null,
  "validUntil": null,
  "billed": null,
} satisfies TenantPlanResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantPlanResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


