
# WorkflowDefinitionResponse

Workflow definition response.  Doubles as a discriminated-union variant for folder-listing responses. The ``part_type`` literal is the discriminator: when the FE walks a folder tree it sees this shape mixed in with ``FolderResponse`` / ``DocumentResponse`` and can route to the dedicated workflow page based on ``part_type``.

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
`maxRunDurationSeconds` | number
`instructionPathPartId` | string
`isActive` | boolean
`approvalRequired` | boolean
`isTemplate` | boolean
`selectedSkillIds` | Array&lt;string&gt;
`commonFilePathPartIds` | Array&lt;string&gt;
`createdFromId` | string
`copyCount` | number
`lastRun` | [LastRunSummary](LastRunSummary.md)
`pendingApprovalCount` | number
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`owner` | [UserInfo](UserInfo.md)
`scheduleCadence` | [ScheduleCadence](ScheduleCadence.md)
`scheduleStartAt` | Date
`scheduleTimezone` | string
`createdAt` | Date
`updatedAt` | Date
`permissions` | [ItemPermissions](ItemPermissions.md)

## Example

```typescript
import type { WorkflowDefinitionResponse } from '@knowledge-stack/ksapi'

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
  "maxRunDurationSeconds": null,
  "instructionPathPartId": null,
  "isActive": null,
  "approvalRequired": null,
  "isTemplate": null,
  "selectedSkillIds": null,
  "commonFilePathPartIds": null,
  "createdFromId": null,
  "copyCount": null,
  "lastRun": null,
  "pendingApprovalCount": null,
  "approvalState": null,
  "owner": null,
  "scheduleCadence": null,
  "scheduleStartAt": null,
  "scheduleTimezone": null,
  "createdAt": null,
  "updatedAt": null,
  "permissions": null,
} satisfies WorkflowDefinitionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowDefinitionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


