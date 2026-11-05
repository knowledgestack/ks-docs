
# RotateMailCredentialRequest

A new secret for one registration. OWNER/ADMIN only.

## Properties

Name | Type
------------ | -------------
`clientSecret` | string

## Example

```typescript
import type { RotateMailCredentialRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "clientSecret": null,
} satisfies RotateMailCredentialRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RotateMailCredentialRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


