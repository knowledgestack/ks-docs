
# CompleteAuthorizationResponse

What consented, for the page that was waiting on it.

## Properties

Name | Type
------------ | -------------
`dataSourceId` | string
`mailboxAddress` | string

## Example

```typescript
import type { CompleteAuthorizationResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "dataSourceId": null,
  "mailboxAddress": null,
} satisfies CompleteAuthorizationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompleteAuthorizationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


