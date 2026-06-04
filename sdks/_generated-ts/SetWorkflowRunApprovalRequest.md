
# SetWorkflowRunApprovalRequest

Body for ``POST /v1/workflow-runs/{run_id}/approval``.  Approves an entire completed run in one call — every output document under ``outputs/`` plus the run folder itself. ``reason`` is an optional reviewer note persisted on each approval audit row.

## Properties

Name | Type
------------ | -------------
`state` | string
`reason` | string

## Example

```typescript
import type { SetWorkflowRunApprovalRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "state": null,
  "reason": null,
} satisfies SetWorkflowRunApprovalRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetWorkflowRunApprovalRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


