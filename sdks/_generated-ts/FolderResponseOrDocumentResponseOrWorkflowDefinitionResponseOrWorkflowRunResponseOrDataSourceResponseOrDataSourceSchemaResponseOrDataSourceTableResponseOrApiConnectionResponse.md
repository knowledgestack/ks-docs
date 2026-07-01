
# FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaResponseOrDataSourceTableResponseOrApiConnectionResponse


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
`documentType` | [DocumentType](DocumentType.md)
`documentOrigin` | [DocumentOrigin](DocumentOrigin.md)
`activeVersionId` | string
`activeVersion` | [DocumentVersionResponse](DocumentVersionResponse.md)
`checkout` | [DocumentCheckoutResponse](DocumentCheckoutResponse.md)
`description` | string
`maxRunDurationSeconds` | number
`instructionPathPartId` | string
`isActive` | boolean
`approvalRequired` | boolean
`isTemplate` | boolean
`commonFilePathPartIds` | Array&lt;string&gt;
`createdFromId` | string
`copyCount` | number
`workflowDefinitionId` | string
`triggeredBy` | [UserInfo](UserInfo.md)
`executionState` | [WorkflowExecutionState](WorkflowExecutionState.md)
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
`engine` | [DataSourceEngine](DataSourceEngine.md)
`dataSourceId` | string
`schemaName` | string
`isDefault` | boolean
`tables` | [Array&lt;DataSourceTableResponse&gt;](DataSourceTableResponse.md)
`dataSourceSchemaId` | string
`tableName` | string
`columnConfig` | Array&lt;{ [key: string]: any; }&gt;
`baseUrl` | string
`networkClass` | [NetworkClass](NetworkClass.md)
`verifyTls` | boolean
`apiDocs` | string
`disclaimerAcceptedAt` | Date
`disclaimerAcceptedBy` | string

## Example

```typescript
import type { FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaResponseOrDataSourceTableResponseOrApiConnectionResponse } from '@knowledge-stack/ksapi'

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
  "documentType": null,
  "documentOrigin": null,
  "activeVersionId": null,
  "activeVersion": null,
  "checkout": null,
  "description": null,
  "maxRunDurationSeconds": null,
  "instructionPathPartId": null,
  "isActive": null,
  "approvalRequired": null,
  "isTemplate": null,
  "commonFilePathPartIds": null,
  "createdFromId": null,
  "copyCount": null,
  "workflowDefinitionId": null,
  "triggeredBy": null,
  "executionState": null,
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
  "engine": null,
  "dataSourceId": null,
  "schemaName": null,
  "isDefault": null,
  "tables": null,
  "dataSourceSchemaId": null,
  "tableName": null,
  "columnConfig": null,
  "baseUrl": null,
  "networkClass": null,
  "verifyTls": null,
  "apiDocs": null,
  "disclaimerAcceptedAt": null,
  "disclaimerAcceptedBy": null,
} satisfies FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaResponseOrDataSourceTableResponseOrApiConnectionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FolderResponseOrDocumentResponseOrWorkflowDefinitionResponseOrWorkflowRunResponseOrDataSourceResponseOrDataSourceSchemaResponseOrDataSourceTableResponseOrApiConnectionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


