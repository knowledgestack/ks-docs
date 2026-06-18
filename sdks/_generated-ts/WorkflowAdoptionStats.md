
# WorkflowAdoptionStats

Adoption proxies for a workflow-runs summary.  These are deliberately labelled \"adoption\", not \"value\" — they measure how much the system is used, not the business value it produced (which is not derivable from any column we store).

## Properties

Name | Type
------------ | -------------
`runs` | number
`activeDefinitions` | number
`distinctTriggerers` | number

## Example

```typescript
import type { WorkflowAdoptionStats } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "runs": null,
  "activeDefinitions": null,
  "distinctTriggerers": null,
} satisfies WorkflowAdoptionStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowAdoptionStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


