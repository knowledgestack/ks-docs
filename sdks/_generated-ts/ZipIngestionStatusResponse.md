
# ZipIngestionStatusResponse

Status of a ZIP fan-out: live Temporal state + per-member outcomes.  ``files`` reflects progress so far — members that have been dispatched (``workflow_id`` set), failed to dispatch (``error`` set), or were skipped as artifacts. Poll until ``temporal_status`` is terminal (e.g. ``COMPLETED``).

## Properties

Name | Type
------------ | -------------
`workflowId` | string
`temporalStatus` | string
`files` | [Array&lt;ZipMemberStatusResponse&gt;](ZipMemberStatusResponse.md)

## Example

```typescript
import type { ZipIngestionStatusResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "workflowId": null,
  "temporalStatus": null,
  "files": null,
} satisfies ZipIngestionStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ZipIngestionStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


