
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
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`createdAt` | Date
`updatedAt` | Date

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
  "approvalState": null,
  "createdAt": null,
  "updatedAt": null,
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


