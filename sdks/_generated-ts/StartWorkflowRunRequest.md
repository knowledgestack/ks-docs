
# StartWorkflowRunRequest

Optional JSON body for ``POST /v1/workflow-runs/{id}/start``.  The whole body is optional: an absent body starts the run with just the localized \"Started workflow: X\" opening message, exactly as before. When ``user_message`` is set it is appended to that opening thread message AND injected into the runner\'s first user turn, so the agent acts on it as guidance layered on the workflow instruction.

## Properties

Name | Type
------------ | -------------
`userMessage` | string

## Example

```typescript
import type { StartWorkflowRunRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "userMessage": null,
} satisfies StartWorkflowRunRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StartWorkflowRunRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


