
# ReasoningPart


## Properties

Name | Type
------------ | -------------
`id` | string
`seq` | number
`startTime` | Date
`endTime` | Date
`kind` | string
`text` | string

## Example

```typescript
import type { ReasoningPart } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seq": null,
  "startTime": null,
  "endTime": null,
  "kind": null,
  "text": null,
} satisfies ReasoningPart

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReasoningPart
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


