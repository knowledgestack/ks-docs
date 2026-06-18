
# FolderResponse

Folder response model.

## Properties

Name | Type
------------ | -------------
`partType` | string
`id` | string
`pathPartId` | string
`name` | string
`parentPathPartId` | string
`materializedPath` | string
`systemManaged` | boolean
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`excludeFromQdrant` | boolean
`tenantId` | string
`owner` | [UserInfo](UserInfo.md)
`createdAt` | Date
`updatedAt` | Date
`tags` | [Array&lt;TagResponse&gt;](TagResponse.md)
`permissions` | [ItemPermissions](ItemPermissions.md)

## Example

```typescript
import type { FolderResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "name": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "systemManaged": null,
  "approvalState": null,
  "excludeFromQdrant": null,
  "tenantId": null,
  "owner": null,
  "createdAt": null,
  "updatedAt": null,
  "tags": null,
  "permissions": null,
} satisfies FolderResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FolderResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


