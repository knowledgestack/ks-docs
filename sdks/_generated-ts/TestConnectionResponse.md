
# TestConnectionResponse

Connection-test outcome carried in the body (200 either way).  ``error`` holds the failure detail when ``success`` is false so the FE can render inline validation instead of handling a 400.

## Properties

Name | Type
------------ | -------------
`success` | boolean
`error` | string

## Example

```typescript
import type { TestConnectionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "error": null,
} satisfies TestConnectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TestConnectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


