
# WorkflowLeaderboardResponse

Top workflows and top users by run count over a window.

## Properties

Name | Type
------------ | -------------
`topWorkflows` | [Array&lt;LeaderboardEntry&gt;](LeaderboardEntry.md)
`topUsers` | [Array&lt;LeaderboardEntry&gt;](LeaderboardEntry.md)

## Example

```typescript
import type { WorkflowLeaderboardResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "topWorkflows": null,
  "topUsers": null,
} satisfies WorkflowLeaderboardResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowLeaderboardResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


