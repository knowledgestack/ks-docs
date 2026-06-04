
# InviteResponse

Invite response model.

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`email` | string
`role` | [TenantUserRole](TenantUserRole.md)
`groups` | Array&lt;string&gt;
`expiresAt` | Date
`acceptedAt` | Date
`createdAt` | Date
`updatedAt` | Date
`inviteLink` | string
`emailId` | string

## Example

```typescript
import type { InviteResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "tenantId": null,
  "email": null,
  "role": null,
  "groups": null,
  "expiresAt": null,
  "acceptedAt": null,
  "createdAt": null,
  "updatedAt": null,
  "inviteLink": null,
  "emailId": null,
} satisfies InviteResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


