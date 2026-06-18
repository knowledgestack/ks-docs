
# WorkflowRunSummaryResponse

Aggregate workflow-runs health over a window, permission-scoped.  Read-gated like the run list: the numbers cover only runs under workflows the caller can read (OWNER/ADMIN ⇒ tenant-wide). All windowed metrics filter runs by ``created_at`` in ``[window_start, window_end]``; the approval backlog and ``active_definitions`` are point-in-time (not windowed). ``failure_rate`` and the duration percentiles are ``None`` when their denominator set is empty.

## Properties

Name | Type
------------ | -------------
`windowStart` | Date
`windowEnd` | Date
`total` | number
`countsByState` | { [key: string]: number; }
`failureRate` | number
`durationP50Seconds` | number
`durationP95Seconds` | number
`pendingApprovalCount` | number
`oldestPendingAgeSeconds` | number
`adoption` | [WorkflowAdoptionStats](WorkflowAdoptionStats.md)

## Example

```typescript
import type { WorkflowRunSummaryResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "windowStart": null,
  "windowEnd": null,
  "total": null,
  "countsByState": null,
  "failureRate": null,
  "durationP50Seconds": null,
  "durationP95Seconds": null,
  "pendingApprovalCount": null,
  "oldestPendingAgeSeconds": null,
  "adoption": null,
} satisfies WorkflowRunSummaryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowRunSummaryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


