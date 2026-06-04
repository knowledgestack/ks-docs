
# StepInput


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`kind` | [StepKind](StepKind.md)
`args` | [Args](Args.md)
`detail` | string
`startTime` | Date
`endTime` | Date
`steps` | [Array&lt;StepInput&gt;](StepInput.md)

## Example

```typescript
import type { StepInput } from '@knowledge-stack/ksapi'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "kind": null,
  "args": null,
  "detail": null,
  "startTime": null,
  "endTime": null,
  "steps": null,
} satisfies StepInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StepInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


