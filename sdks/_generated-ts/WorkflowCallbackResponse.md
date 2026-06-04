
# WorkflowCallbackResponse

Response from the runner callback endpoint.

## Properties

Name | Type
------------ | -------------
`status` | string

## Example

```typescript
import type { WorkflowCallbackResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "status": null,
} satisfies WorkflowCallbackResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowCallbackResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


