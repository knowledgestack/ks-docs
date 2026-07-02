
# ThreadMessageDetails


## Properties

Name | Type
------------ | -------------
`parts` | [Array&lt;TextPartOrReasoningPartOrToolPartOrDocEditPart&gt;](TextPartOrReasoningPartOrToolPartOrDocEditPart.md)
`usage` | [MessageUsage](MessageUsage.md)
`steps` | [Array&lt;Step&gt;](Step.md)
`checkpoint` | [CheckpointDetails](CheckpointDetails.md)
`modelId` | string

## Example

```typescript
import type { ThreadMessageDetails } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "parts": null,
  "usage": null,
  "steps": null,
  "checkpoint": null,
  "modelId": null,
} satisfies ThreadMessageDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ThreadMessageDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


