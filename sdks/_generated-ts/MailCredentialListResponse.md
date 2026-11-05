
# MailCredentialListResponse

A workspace\'s registrations, and the callback a new one must list.  ``redirect_uri`` is on the envelope rather than only on the rows because it is needed **before** the first row exists: registering the application in the provider\'s directory is what has to happen first, and it takes this string. Every row in a workspace carries the same one.

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;MailCredentialResponse&gt;](MailCredentialResponse.md)
`redirectUri` | string

## Example

```typescript
import type { MailCredentialListResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "redirectUri": null,
} satisfies MailCredentialListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailCredentialListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


