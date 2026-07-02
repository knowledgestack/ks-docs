
# TextPart


## Properties

Name | Type
------------ | -------------
`id` | string
`seq` | number
`startTime` | Date
`endTime` | Date
`kind` | string
`text` | string
`citations` | [Array&lt;Citation&gt;](Citation.md)

## Example

```typescript
import type { TextPart } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "seq": null,
  "startTime": null,
  "endTime": null,
  "kind": null,
  "text": null,
  "citations": null,
} satisfies TextPart

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextPart
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


