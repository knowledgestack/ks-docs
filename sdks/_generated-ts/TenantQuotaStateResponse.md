
# TenantQuotaStateResponse

Tenant\'s current quota state across all enforced caps.

## Properties

Name | Type
------------ | -------------
`metered` | [Array&lt;MeteredQuotaStatus&gt;](MeteredQuotaStatus.md)
`seats` | [SeatQuotaStatus](SeatQuotaStatus.md)

## Example

```typescript
import type { TenantQuotaStateResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "metered": null,
  "seats": null,
} satisfies TenantQuotaStateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantQuotaStateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


