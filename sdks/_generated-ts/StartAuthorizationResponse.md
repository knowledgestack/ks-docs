
# StartAuthorizationResponse

Where to send the resource owner, and how long the link stays usable.

## Properties

Name | Type
------------ | -------------
`authUri` | string
`expiresIn` | number

## Example

```typescript
import type { StartAuthorizationResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "authUri": null,
  "expiresIn": null,
} satisfies StartAuthorizationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StartAuthorizationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


