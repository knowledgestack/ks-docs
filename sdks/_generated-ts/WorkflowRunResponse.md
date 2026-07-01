
# WorkflowRunResponse

Workflow run response.  Doubles as a discriminated-union variant for folder-listing responses so the FE can mix WD/Run entries with regular folders + documents and route based on ``part_type``.  Two-step flow note: a NOT_STARTED run has ``started_at=None`` and ``run_snapshot=None``; both are populated when Start dispatches the run. The flat ``input_path_part_ids`` list carries the currently-pinned KB references so the FE can render them on a NOT_STARTED run (the snapshot\'s typed list is not available yet).

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
`workflowDefinitionId` | string
`triggeredBy` | [UserInfo](UserInfo.md)
`executionState` | [WorkflowExecutionState](WorkflowExecutionState.md)
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`startedAt` | Date
`completedAt` | Date
`runSnapshot` | [WorkflowRunSnapshot](WorkflowRunSnapshot.md)
`error` | string
`autoStart` | boolean
`autoStartUserMessage` | string
`inputsPathPartId` | string
`outputsPathPartId` | string
`discussionsPathPartId` | string
`inputPathPartIds` | Array&lt;string&gt;
`outputsPathPartIds` | Array&lt;string&gt;
`excludedCommonFiles` | [Array&lt;ExcludedCommonFile&gt;](ExcludedCommonFile.md)
`runThreadId` | string
`owner` | [UserInfo](UserInfo.md)
`createdAt` | Date
`updatedAt` | Date
`permissions` | [ItemPermissions](ItemPermissions.md)

## Example

```typescript
import type { WorkflowRunResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "partType": null,
  "id": null,
  "pathPartId": null,
  "parentPathPartId": null,
  "materializedPath": null,
  "tenantId": null,
  "name": null,
  "workflowDefinitionId": null,
  "triggeredBy": null,
  "executionState": null,
  "approvalState": null,
  "startedAt": null,
  "completedAt": null,
  "runSnapshot": null,
  "error": null,
  "autoStart": null,
  "autoStartUserMessage": null,
  "inputsPathPartId": null,
  "outputsPathPartId": null,
  "discussionsPathPartId": null,
  "inputPathPartIds": null,
  "outputsPathPartIds": null,
  "excludedCommonFiles": null,
  "runThreadId": null,
  "owner": null,
  "createdAt": null,
  "updatedAt": null,
  "permissions": null,
} satisfies WorkflowRunResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowRunResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


