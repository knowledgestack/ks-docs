
# SkillResponse

Skill response; ``part_type`` is the folder-listing discriminator.

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
`description` | string
`skillMd` | string
`filePaths` | Array&lt;string&gt;
`files` | [Array&lt;SkillFile&gt;](SkillFile.md)
`hasUnpublishedChanges` | boolean
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`owner` | [UserInfo](UserInfo.md)
`createdAt` | Date
`updatedAt` | Date
`permissions` | [ItemPermissions](ItemPermissions.md)

## Example

```typescript
import type { SkillResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "tenantId": null,
  "name": null,
  "description": null,
  "skillMd": null,
  "filePaths": null,
  "files": null,
  "hasUnpublishedChanges": null,
  "approvalState": null,
  "owner": null,
  "createdAt": null,
  "updatedAt": null,
  "permissions": null,
} satisfies SkillResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkillResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


