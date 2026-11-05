
# UpdateMailCredentialRequest

Correct a registration. All fields optional; an empty body is a 400.  ``name`` is always editable: it is a label and nothing authenticates with it.  The three that say *which application* are editable **only while no mailbox points at this registration**. A mailbox\'s stored grant is a refresh token issued to one client in one directory, so moving a registration that is in use would leave every mailbox on it unable to refresh — and across directories unable to match its own account id ever again. Before the first mailbox there is no grant, no token cache and no account id, so a mistyped id is just a mistyped id. ``mailbox_count`` is the gate, and the refusal names it.  Supplying ``client_secret`` here is for one typed wrong, which is why it follows the same gate. Replacing a secret that is *in use* is ``POST /{id}/rotate``, which is allowed at any count because a refresh token is bound to the client rather than to a particular secret.

## Properties

Name | Type
------------ | -------------
`name` | string
`directoryId` | string
`clientId` | string
`clientSecret` | string

## Example

```typescript
import type { UpdateMailCredentialRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "directoryId": null,
  "clientId": null,
  "clientSecret": null,
} satisfies UpdateMailCredentialRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateMailCredentialRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


