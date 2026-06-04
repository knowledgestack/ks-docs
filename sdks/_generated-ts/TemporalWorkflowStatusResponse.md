
# TemporalWorkflowStatusResponse

Generic Temporal workflow status — no DB interaction.

## Properties

Name | Type
------------ | -------------
`workflowId` | string
`temporalStatus` | string
`workflowType` | string
`taskQueue` | string
`startTime` | Date
`closeTime` | Date
`runId` | string

## Example

```typescript
import type { TemporalWorkflowStatusResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "workflowId": null,
  "temporalStatus": null,
  "workflowType": null,
  "taskQueue": null,
  "startTime": null,
  "closeTime": null,
  "runId": null,
} satisfies TemporalWorkflowStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemporalWorkflowStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


