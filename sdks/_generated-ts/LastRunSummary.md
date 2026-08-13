
# LastRunSummary

The definition\'s most recent run — a compact projection for list rows.  ``approval_state`` is the run folder\'s own approval state (execution and approval are separate axes). Named to avoid colliding with the unrelated ``last_run_timestamp`` document-ingestion concept.

## Properties

Name | Type
------------ | -------------
`id` | string
`executionState` | [WorkflowExecutionState](WorkflowExecutionState.md)
`approvalState` | [PathPartApprovalState](PathPartApprovalState.md)
`createdAt` | Date
`startedAt` | Date
`completedAt` | Date
`error` | string

## Example

```typescript
import type { LastRunSummary } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "executionState": null,
  "approvalState": null,
  "createdAt": null,
  "startedAt": null,
  "completedAt": null,
  "error": null,
} satisfies LastRunSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LastRunSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


