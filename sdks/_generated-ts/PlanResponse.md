
# PlanResponse

A plan and every key it grants; a key it does not grant is absent.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`_public` | boolean
`deletedAt` | Date
`entitlements` | [Array&lt;PlanEntitlementResponse&gt;](PlanEntitlementResponse.md)

## Example

```typescript
import type { PlanResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "_public": null,
  "deletedAt": null,
  "entitlements": null,
} satisfies PlanResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


