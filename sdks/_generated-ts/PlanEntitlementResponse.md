
# PlanEntitlementResponse

One entitlement a plan grants; a toggle is on while its row exists.

## Properties

Name | Type
------------ | -------------
`entitlementId` | string
`key` | [EntitlementKey](EntitlementKey.md)
`kind` | [EntitlementKind](EntitlementKind.md)
`limit` | number
`seatScaled` | boolean
`resetPeriod` | [ResetPeriod](ResetPeriod.md)

## Example

```typescript
import type { PlanEntitlementResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "entitlementId": null,
  "key": null,
  "kind": null,
  "limit": null,
  "seatScaled": null,
  "resetPeriod": null,
} satisfies PlanEntitlementResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanEntitlementResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


