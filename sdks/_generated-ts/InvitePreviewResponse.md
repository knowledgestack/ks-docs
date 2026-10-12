
# InvitePreviewResponse


## Properties

Name | Type
------------ | -------------
`state` | [InvitePreviewState](InvitePreviewState.md)
`email` | string
`tenantName` | string
`role` | [TenantUserRole](TenantUserRole.md)
`expiresAt` | Date
`invitedBy` | [UserInfo](UserInfo.md)

## Example

```typescript
import type { InvitePreviewResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "state": null,
  "email": null,
  "tenantName": null,
  "role": null,
  "expiresAt": null,
  "invitedBy": null,
} satisfies InvitePreviewResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InvitePreviewResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


