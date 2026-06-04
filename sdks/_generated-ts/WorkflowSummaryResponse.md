
# WorkflowSummaryResponse

List item - DB-only fields, no Temporal call per item.

## Properties

Name | Type
------------ | -------------
`workflowId` | string
`documentId` | string
`documentVersionId` | string
`status` | [PipelineStatus](PipelineStatus.md)
`lastActivity` | string
`error` | string
`lastRunTimestamp` | Date
`lastStateUpdateTimestamp` | Date
`createdAt` | Date

## Example

```typescript
import type { WorkflowSummaryResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "workflowId": null,
  "documentId": null,
  "documentVersionId": null,
  "status": null,
  "lastActivity": null,
  "error": null,
  "lastRunTimestamp": null,
  "lastStateUpdateTimestamp": null,
  "createdAt": null,
} satisfies WorkflowSummaryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowSummaryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


