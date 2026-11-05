
# RotateMailCredentialResponse


## Properties

Name | Type
------------ | -------------
`mailboxesAffected` | number
`reauthCleared` | number

## Example

```typescript
import type { RotateMailCredentialResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "mailboxesAffected": null,
  "reauthCleared": null,
} satisfies RotateMailCredentialResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RotateMailCredentialResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


