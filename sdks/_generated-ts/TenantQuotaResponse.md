
# TenantQuotaResponse

The tenant\'s metered entitlements and seats under the plan in force.

## Properties

Name | Type
------------ | -------------
`entitlements` | [Array&lt;EntitlementQuotaStatus&gt;](EntitlementQuotaStatus.md)
`seats` | [SeatQuotaStatus](SeatQuotaStatus.md)

## Example

```typescript
import type { TenantQuotaResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "entitlements": null,
  "seats": null,
} satisfies TenantQuotaResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantQuotaResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


