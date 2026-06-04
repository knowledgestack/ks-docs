
# ThreadMessageDetailsOutput


## Properties

Name | Type
------------ | -------------
`steps` | [Array&lt;StepOutput&gt;](StepOutput.md)
`checkpoint` | [CheckpointDetails](CheckpointDetails.md)
`modelId` | string

## Example

```typescript
import type { ThreadMessageDetailsOutput } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "steps": null,
  "checkpoint": null,
  "modelId": null,
} satisfies ThreadMessageDetailsOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadMessageDetailsOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


