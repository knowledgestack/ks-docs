
# FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse


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
`createdAt` | Date
`updatedAt` | Date
`tags` | [Array&lt;TagResponse&gt;](TagResponse.md)
`canWrite` | boolean
`documentType` | [DocumentType](DocumentType.md)
`documentOrigin` | [DocumentOrigin](DocumentOrigin.md)
`activeVersionId` | string
`activeVersion` | [DocumentVersionResponse](DocumentVersionResponse.md)
`owner` | [UserInfo](UserInfo.md)
`checkout` | [DocumentCheckoutResponse](DocumentCheckoutResponse.md)
`description` | string
`maxRunDurationSeconds` | number
`instructionPathPartId` | string
`isActive` | boolean
`approvalRequired` | boolean
`workflowDefinitionId` | string
`triggeredBy` | [UserInfo](UserInfo.md)
`executionState` | [WorkflowExecutionState](WorkflowExecutionState.md)
`startedAt` | Date
`completedAt` | Date
`runSnapshot` | [WorkflowRunSnapshot](WorkflowRunSnapshot.md)
`error` | string
`inputsPathPartId` | string
`outputsPathPartId` | string
`discussionsPathPartId` | string
`inputPathPartIds` | Array&lt;string&gt;
`outputsPathPartIds` | Array&lt;string&gt;
`runThreadId` | string

## Example

```typescript
import type { FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse } from '@knowledge-stack/ksapi'

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
  "createdAt": null,
  "updatedAt": null,
  "tags": null,
  "canWrite": null,
  "documentType": null,
  "documentOrigin": null,
  "activeVersionId": null,
  "activeVersion": null,
  "owner": null,
  "checkout": null,
  "description": null,
  "maxRunDurationSeconds": null,
  "instructionPathPartId": null,
  "isActive": null,
  "approvalRequired": null,
  "workflowDefinitionId": null,
  "triggeredBy": null,
  "executionState": null,
  "startedAt": null,
  "completedAt": null,
  "runSnapshot": null,
  "error": null,
  "inputsPathPartId": null,
  "outputsPathPartId": null,
  "discussionsPathPartId": null,
  "inputPathPartIds": null,
  "outputsPathPartIds": null,
  "runThreadId": null,
} satisfies FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


