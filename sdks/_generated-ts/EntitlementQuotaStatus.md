
# EntitlementQuotaStatus

One metered entitlement in the tenant\'s current window.

## Properties

Name | Type
------------ | -------------
`key` | [EntitlementKey](EntitlementKey.md)
`granted` | boolean
`plan` | [PlanRef](PlanRef.md)
`used` | number
`limit` | number
`additionalBalance` | number
`periodStart` | Date
`periodEnd` | Date

## Example

```typescript
import type { EntitlementQuotaStatus } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "granted": null,
  "plan": null,
  "used": null,
  "limit": null,
  "additionalBalance": null,
  "periodStart": null,
  "periodEnd": null,
} satisfies EntitlementQuotaStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EntitlementQuotaStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


