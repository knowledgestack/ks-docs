
# CreateMailCredentialRequest

Register an application for this workspace. OWNER/ADMIN only.  The hosts are not asked for. Which of the provider\'s clouds a directory lives in is a fact about the directory, read off the provider here, and getting it wrong surfaces as a provider error code on somebody else\'s consent screen.

## Properties

Name | Type
------------ | -------------
`name` | string
`directoryId` | string
`clientId` | string
`clientSecret` | string

## Example

```typescript
import type { CreateMailCredentialRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "directoryId": null,
  "clientId": null,
  "clientSecret": null,
} satisfies CreateMailCredentialRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateMailCredentialRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


