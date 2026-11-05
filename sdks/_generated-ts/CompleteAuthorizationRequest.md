
# CompleteAuthorizationRequest

What the provider left in the fragment, forwarded by the page that opened it.  Every field is the provider\'s own, passed through verbatim: the callback route reads the fragment and relays it, deciding nothing. Which of them arrive says which way the consent went — ``code`` on a success, ``error`` on a refusal — so both are optional here and the refusal is the API\'s to name.

## Properties

Name | Type
------------ | -------------
`state` | string
`code` | string
`error` | string
`errorDescription` | string
`clientInfo` | string

## Example

```typescript
import type { CompleteAuthorizationRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "state": null,
  "code": null,
  "error": null,
  "errorDescription": null,
  "clientInfo": null,
} satisfies CompleteAuthorizationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CompleteAuthorizationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


