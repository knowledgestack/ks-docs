
# WorkflowRunCallbackRequest

Request body for the runner callback endpoint.

## Properties

Name | Type
------------ | -------------
`status` | string
`error` | string
`failureCode` | [RunFailureCode](RunFailureCode.md)

## Example

```typescript
import type { WorkflowRunCallbackRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "error": null,
  "failureCode": null,
} satisfies WorkflowRunCallbackRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowRunCallbackRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


