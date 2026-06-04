
# CloneWorkflowRunRequest

POST body for ``/v1/workflow-runs/{id}/clone``.  Creates a new NOT_STARTED run under the same definition. When ``include_inputs`` is True, the new run\'s ``input_path_part_ids`` are pinned from the source\'s ``run_snapshot.inputs`` — uploaded DVs stay in the source\'s ``inputs/`` and are referenced by path_part_id (no S3 copy, no re-ingest). The source must have a snapshot to clone from, so cloning a NOT_STARTED source returns 409.

## Properties

Name | Type
------------ | -------------
`includeInputs` | boolean

## Example

```typescript
import type { CloneWorkflowRunRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "includeInputs": null,
} satisfies CloneWorkflowRunRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CloneWorkflowRunRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


