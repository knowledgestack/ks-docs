
# EntitlementDefinitionResponse

An entitlement a plan can grant.

## Properties

Name | Type
------------ | -------------
`id` | string
`key` | [EntitlementKey](EntitlementKey.md)
`kind` | [EntitlementKind](EntitlementKind.md)
`displayName` | string

## Example

```typescript
import type { EntitlementDefinitionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "key": null,
  "kind": null,
  "displayName": null,
} satisfies EntitlementDefinitionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EntitlementDefinitionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


