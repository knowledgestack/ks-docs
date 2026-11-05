
# MailCredentialResponse

A registration as an admin may see it: the ids, never the secret.  The two GUIDs are here so an admin can tell two registrations in one directory apart, and confirm against what they typed in the provider\'s portal. They are not secrets — they travel in every consent URL — but they are noise to a member who only has to pick one, which is why the picker gets :class:`MailCredentialOption` instead.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`provider` | string
`directoryId` | string
`clientId` | string
`redirectUri` | string
`createdAt` | Date
`mailboxCount` | number

## Example

```typescript
import type { MailCredentialResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "provider": null,
  "directoryId": null,
  "clientId": null,
  "redirectUri": null,
  "createdAt": null,
  "mailboxCount": null,
} satisfies MailCredentialResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MailCredentialResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


