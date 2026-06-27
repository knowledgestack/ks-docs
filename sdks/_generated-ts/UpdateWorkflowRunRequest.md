
# UpdateWorkflowRunRequest

PATCH body for ``/v1/workflow-runs/{id}`` — NOT_STARTED runs only.  Both fields are optional. A body with both ``None`` is rejected as 400 (no-op PATCH). ``input_scope`` replaces the row\'s KB-ref list wholesale; ``name`` renames the run path_part (the trigger cascades ``materialized_path`` to every descendant).

## Properties

Name | Type
------------ | -------------
`inputScope` | Array&lt;string&gt;
`name` | string
`autoStart` | boolean
`userMessage` | string

## Example

```typescript
import type { UpdateWorkflowRunRequest } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "inputScope": null,
  "name": null,
  "autoStart": null,
  "userMessage": null,
} satisfies UpdateWorkflowRunRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateWorkflowRunRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


