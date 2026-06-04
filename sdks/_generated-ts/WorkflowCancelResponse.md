
# WorkflowCancelResponse

Response for generic workflow cancellation.

## Properties

Name | Type
------------ | -------------
`workflowId` | string
`message` | string

## Example

```typescript
import type { WorkflowCancelResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "workflowId": null,
  "message": null,
} satisfies WorkflowCancelResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowCancelResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


