
# EmailAccessToken

A freshly minted mailbox token, for a run that outlives its first one.  Minted on the API side, which owns the cache; the worker never sees the refresh token. One mailbox is one owner, so two concurrent runs cannot overwrite each other\'s rotation of it.

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`accessTokenExpiresAt` | Date

## Example

```typescript
import type { EmailAccessToken } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "accessToken": null,
  "accessTokenExpiresAt": null,
} satisfies EmailAccessToken

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmailAccessToken
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


