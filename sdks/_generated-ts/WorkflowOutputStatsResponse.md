
# WorkflowOutputStatsResponse

Avg documents generated per workflow definition (completed runs).

## Properties

Name | Type
------------ | -------------
`perDefinition` | [Array&lt;DefinitionOutputStat&gt;](DefinitionOutputStat.md)
`overallAvg` | number

## Example

```typescript
import type { WorkflowOutputStatsResponse } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "perDefinition": null,
  "overallAvg": null,
} satisfies WorkflowOutputStatsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkflowOutputStatsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


