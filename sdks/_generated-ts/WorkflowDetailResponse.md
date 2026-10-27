
# WorkflowDetailResponse

Single item - adds live Temporal fields.

## Properties

Name | Type
------------ | -------------
`workflowId` | string
`documentId` | string
`documentName` | string
`materializedPath` | string
`documentVersionId` | string
`isActiveVersion` | boolean
`uploader` | [UserInfo](UserInfo.md)
`status` | [PipelineStatus](PipelineStatus.md)
`lastActivity` | string
`lastStageRetryAttempt` | number
`error` | string
`lastRunTimestamp` | Date
`lastStateUpdateTimestamp` | Date
`createdAt` | Date
`temporalStatus` | string
`startTime` | Date
`closeTime` | Date
`workflowType` | string
`taskQueue` | string
`runId` | string
`chunksProcessed` | number

## Example

```typescript
import type { WorkflowDetailResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "workflowId": null,
  "documentId": null,
  "documentName": null,
  "materializedPath": null,
  "documentVersionId": null,
  "isActiveVersion": null,
  "uploader": null,
  "status": null,
  "lastActivity": null,
  "lastStageRetryAttempt": null,
  "error": null,
  "lastRunTimestamp": null,
  "lastStateUpdateTimestamp": null,
  "createdAt": null,
  "temporalStatus": null,
  "startTime": null,
  "closeTime": null,
  "workflowType": null,
  "taskQueue": null,
  "runId": null,
  "chunksProcessed": null,
} satisfies WorkflowDetailResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowDetailResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


