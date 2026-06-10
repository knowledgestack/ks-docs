
# AccessCheckResponse

Result of an admin access-check for a target user on a path part.

## Properties

Name | Type
------------ | -------------
`allowed` | boolean
`reason` | string
`matchedPath` | string

## Example

```typescript
import type { AccessCheckResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "allowed": null,
  "reason": null,
  "matchedPath": null,
} satisfies AccessCheckResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccessCheckResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


