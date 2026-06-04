
# SeatQuotaStatus

Live seat count for the tenant.  ``used`` is the number of active (non-deactivated) ``TenantUser`` rows.

## Properties

Name | Type
------------ | -------------
`used` | number
`limit` | number

## Example

```typescript
import type { SeatQuotaStatus } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "used": null,
  "limit": null,
} satisfies SeatQuotaStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeatQuotaStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


