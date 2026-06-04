
# AskResponse

Response body for POST /v1/agent/ask.

## Properties

Name | Type
------------ | -------------
`text` | string

## Example

```typescript
import type { AskResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "text": null,
} satisfies AskResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AskResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


