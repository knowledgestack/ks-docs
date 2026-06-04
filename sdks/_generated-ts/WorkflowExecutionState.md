
# WorkflowExecutionState

Execution lifecycle of a workflow run.  Two-step flow lifecycle:  * ``PENDING`` — entry state when the create call carries uploads.   Inputs are being ingested by Temporal; the run cannot be started   yet. The ingestion-completion hook auto-flips the run to   ``NOT_STARTED`` once every input under ``inputs/`` reaches   ``pipeline_state.status == COMPLETED``. * ``NOT_STARTED`` — entry state when the create call has no   uploads (KB references only), OR the post-ingestion landing   pad. The user can Start the run from here. * ``IN_PROGRESS`` — set by ``POST /v1/workflow-runs/{id}/start``,   which builds the snapshot and dispatches the Temporal workflow. * ``COMPLETED`` / ``FAILED`` — terminal; ``completed_at`` is set.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { WorkflowExecutionState } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
} satisfies WorkflowExecutionState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowExecutionState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


