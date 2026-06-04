
# ChangeSubscriptionRequest

Body for ``POST /v1/tenants/{tenant_id}/subscriptions``.

## Properties

Name | Type
------------ | -------------
`subscriptionId` | string
`numSeats` | number

## Example

```typescript
import type { ChangeSubscriptionRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "subscriptionId": null,
  "numSeats": null,
} satisfies ChangeSubscriptionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChangeSubscriptionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


