
# ApiConnectionResponse

Connector response; a discriminated-union variant for folder listings.  ``auth_config`` is intentionally omitted — the secret is write-only and never serialized back.

## Properties

Name | Type
------------ | -------------
`partType` | string
`id` | string
`pathPartId` | string
`parentPathPartId` | string
`materializedPath` | string
`tenantId` | string
`name` | string
`baseUrl` | string
`networkClass` | [NetworkClass](NetworkClass.md)
`verifyTls` | boolean
`apiDocs` | string
`disclaimerAcceptedAt` | Date
`disclaimerAcceptedBy` | string
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`owner` | [UserInfo](UserInfo.md)
`permissions` | [ItemPermissions](ItemPermissions.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { ApiConnectionResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "tenantId": null,
  "name": null,
  "baseUrl": null,
  "networkClass": null,
  "verifyTls": null,
  "apiDocs": null,
  "disclaimerAcceptedAt": null,
  "disclaimerAcceptedBy": null,
  "approvalState": null,
  "owner": null,
  "permissions": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies ApiConnectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiConnectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


